import { useState } from "react"
import type { ITask } from "../interface/interface"



export const useComponen = () => {
    const [task,setTask] = useState<ITask[]>([])


    const handleAdd = ( text: string, date: string) => {
        if(!text || !date)
            return

        const newTask: ITask = {id: Date.now()
            , text, date, done: false}
        setTask([...task, newTask])
    }

    const deleteTask = (id:number) => {
        const updateProduct = task.filter(tas => tas.id !== id) 
        setTask(updateProduct)
    }

    const deleteAll = () => {
        setTask([])
    }

    const toggleCheck = (id:number) => {
        setTask(task.map(tas => tas.id === id ? {...tas, done: !tas.done}: tas))
    }


    return{
        task,  handleAdd, deleteTask, deleteAll, toggleCheck
    }
}