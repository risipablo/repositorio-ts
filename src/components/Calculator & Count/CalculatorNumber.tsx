import { useState } from "react"
import "./calculator.css"

export function Calculator(){
    const [count,setCount] = useState<number>(0)
    const [result, setResult] = useState<number>(0)
    const [plus,setPlus] = useState<number>(0)
   

    const handlePlus = () => {
        const n1 = count
        const n2 = plus

        if(isNaN(n1) || isNaN(n2)){
            setResult(0)
            return
        }

        const resultPlus = count + plus
        setResult(resultPlus)
    }

    const handleminus = () => {
        const n1 = count
        const n2 = plus

        if(isNaN(n1) || isNaN(n2)){
            setResult(0)
            return
        }

        const resultPlus = count - plus
        setResult(resultPlus)
    }


    const handleMulti = () => {
        const n1 = count
        const n2 = plus

        if(isNaN(n1) || isNaN(n2)){
            setResult(0)
            return
        }

        const resultPlus = count * plus
        setResult(resultPlus)
    }


    const handleDiv = () => {
        const n1 = count
        const n2 = plus

        if(isNaN(n1) || isNaN(n2)){
            setResult(0)
            return
        }

        const resultPlus = count / plus
        setResult(resultPlus)
    }
    
    const reset = () => {
        setResult(0)
        setCount(0)
        setPlus(0)
        setResultConveres(0)
        setPorcentage(0)
        setCountValue(0)
        setResult2(0)
        setA(0)
        setB(0)
    }

    const [countValue,setCountValue] = useState<number>(0)
    const [resultConverse, setResultConveres] = useState<number>(0)
    const [porcentage, setPorcentage] = useState<number>(0)

    const handleConversation = (operator:string) =>{
        const number = countValue
        if(isNaN(number)){
            setResultConveres(0)
            return
        }

        const factor = 1 + (porcentage / 100)
        const result = operator === 'multiply' ? number * factor : number / factor
        setResultConveres(result)
    }

    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);
    const [result2, setResult2] = useState<number>(0);


    const sugarSintax = (op: "add" | 'sub' | 'mul' | 'div') => {
        
        if(!Number.isFinite(a) || !Number.isFinite(b)) {
            setResult2(0)
            return
        }

        const res = op === 'add' ? a + b : op === 'sub' 
        ? a - b : op === 'mul' ? a * b : a / b

        setResult2(res)
    }

    return(
        <div>
            <h1>Calculator Numbers</h1>

            <div>
                <input type="number" 
                placeholder="insert a number" 
                value={count} 
                onChange={e => setCount(Number(e.target.value))} />
                
                <div className="buttons">
                    <button onClick={handlePlus}> + </button>
                    <button onClick={handleminus}> - </button>
                    <button onClick={handleMulti}> * </button>
                    <button onClick={handleDiv}> / </button>
                </div>

                <input type="number"
                 placeholder="insert another number" 
                 value={plus} 
                 onChange={e => setPlus(Number(e.target.value))}/>

                <div className="number">
                    <p> Result:{result} </p>
                    <button onClick={reset}>Reset</button>
                </div>
            </div>

            <h1> Calculator percentage</h1>
            <div>
                <input type="number" placeholder="insert number" value={countValue} onChange={(e) => setCountValue(Number(e.target.value))}/>
                <input type="number" placeholder="insert percentage" value={porcentage} onChange={(e) => setPorcentage(Number(e.target.value))} />

                <div>
                    <button onClick={() => handleConversation('multiply')}> * </button>
                    <button  onClick={() => handleConversation('')}> / </button>
                </div>

                <div className="number">
                    Result:{resultConverse}
                </div>
            </div>

            <h1> Calculator with Sugar Sintax</h1>
            <div>

                <input
                type="number"
                placeholder="Insert number A"
                value={a}
                onChange={(e) => setA(Number(e.target.value))}
                />

                <div className="buttons">
                <button onClick={() => sugarSintax("add")}>+</button>
                <button onClick={() => sugarSintax("sub")}>-</button>
                <button onClick={() => sugarSintax("mul")}>*</button>
                <button onClick={() => sugarSintax("div")}>/</button>
                </div>

                <input
                type="number"
                placeholder="Insert number B"
                value={b}
                onChange={(e) => setB(Number(e.target.value))}
                />

                <div className="number">
                <p>Result: {result2}</p>
                <button onClick={reset}>Reset</button>
                </div>
            
            </div>

            <hr />
        </div>
    )
}