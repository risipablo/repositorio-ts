import { useEffect, useState } from "react"


export const Counter = () => {
    const[count,setCount] = useState<number>(0)
    const[color,setColor] = useState<string>("")

    const minus = () => {
        if(count > 0){
            setCount(count - 1)
        }else {
            return null
        } 
    }

    const plus = () => {
        setCount(count + 1)
    }

    const reset = () => {
        setCount(0)
    }

    const changeColor = () => {
        setColor(color => color ? '' : 'red')
    }

    useEffect(() => {

    },[count,color])

    

    return(
        <div className="cointer-master">
            <h1>Counter</h1>
            <div>
                <p> Count: </p>
                <button onClick={minus}> - </button>
                <span style={{color:color}}>{count}</span>
                <button onClick={plus}> + </button>

                <div>
                    <button onClick={changeColor}> Change color </button>
                    <button onClick={reset}> Reset</button>
                </div>
            </div>
            <hr/>
        </div>
    )
}