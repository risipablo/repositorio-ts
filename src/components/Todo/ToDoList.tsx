import { useEffect, useState } from "react"
import { useComponen } from "../hook/useComponent"



export function TODOLIST(){

    const{ handleAdd,task, deleteTask,deleteAll, toggleCheck} = useComponen()

    const [text,setText] = useState<string>("")
    const [date,setDate] = useState<string>("")


    useEffect(() => {
        localStorage.setItem('task', JSON.stringify(task))
    }, [task]) 


    const handleAddTask = () => {
        handleAdd( text, date)
        setText("")
        setDate("")
    }

    const handleDeleteTask = (id:number) => {
        deleteTask(id)
    }



    return(
        <div>
            <h1> To Do List</h1>

            <input type="text" placeholder="insert task" 
            value={text} onChange={(e) => setText(e.target.value)}/>

            <input type="date" placeholder="insert date"
            value={date} onChange={(e) => setDate(e.target.value)} />

            <button onClick={handleAddTask}> Add</button>

            {task.length > 0 && (
                <button onClick={deleteAll}> Delete All </button>
            )}

            {task.map((tas) => (
                <ul key={tas.id}>
                   <li>{tas.text}</li>
                   <li>{tas.date}</li> 
                   <li> 
                     <input type="checkbox" checked={tas.done} onChange={() => toggleCheck(tas.id!)} />
                     {tas.done ? "Check" : "No Check"}
                    </li>
                   <button onClick={() => handleDeleteTask(tas.id!)}> Delete</button>
                </ul>
            ))}
         <hr/>
        </div>
    )
}