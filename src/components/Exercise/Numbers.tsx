import { useState } from "react"


export function Numbers(){
    const numbers = Array.from({length:25},(_,i) => i + 1)
    const [numberFilter , setNumberFilter] = useState<number[]>([])


    const handlePar = () => {
        const par = numbers.filter(num => num % 2 === 0)
        console.log(par)
        setNumberFilter(par)
    }

    const handleImpar = () => {
        const impar = numbers.filter(num => num % 2 !== 0)
        setNumberFilter(impar)
    }

    const handleDuplicar = () => {
        const dup = numbers.map(num => num * 2 )
        setNumberFilter(dup)
    }

    const sumTotal = () => {
        const sum = numbers.reduce((acc,cur) => acc + cur, 0)
        setNumberFilter([sum])
    }

    const numberMax = () => {
        const maxN = Math.max(...numbers)
        setNumberFilter([maxN])
    }

    const orderNumber = () => {
        const order = [...numbers].sort((a,b) => b - a)
        setNumberFilter(order)
    }

    const clean = () => {
        setNumberFilter([])
    }

    return(
        <>
        <h1>Numbers</h1>

        <div>
            <button onClick={clean}>Clean</button>
            <button onClick={handlePar}> Filtrar Pares </button>
            <button onClick={handleImpar}> Filtrar Pares </button>
            <button onClick={handleDuplicar}> duplicar </button>
            <button onClick={sumTotal}> sumar todo </button>
            <button onClick={numberMax}> Maximo Num </button>
            <button onClick={orderNumber}> Order </button>

        </div>

            { numberFilter.length === 0 ? (
                <div>
                    {numbers.map((number) => (
                        <ul key={number}>
                            <li>{number}</li>
                        </ul>
                    ))}
                </div>
            ) : (
            numberFilter.map((number) => (
                <ul key={number}>
                    <li>{number}</li>
                </ul>
            )))}


        <hr />
        </>
        
    )

}