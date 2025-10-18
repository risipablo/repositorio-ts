import { useState } from "react"
import { Client } from "../class/Client"



export const useBanco = () =>{
    const [client,setClient] = useState<Client | null>(null)
    const [amount, setAmount] = useState<number>(0)
    const [message, setMessage] = useState<string>("")

    const createUser = () => {
        const newClient = new Client("Pablo", "Risi", 123, 10000)
        setClient(newClient)
    }

    const handleDeposit = () => {
        if (client){
            setMessage(client.Deposit(amount))
            setAmount(0)
        }
    }

    const handleExtract = () => {
        if(client){
            setMessage(client.ExtracMoney(amount))
            setAmount(0)
        }
    }

    const handleExtracMoneyAll = () => {
        if(client){
            setMessage(client.ExtracAllMoney())
            setAmount(0)
        }
    }


    const exitSession = () => {
        setClient(null)
        setMessage("")
        setAmount(0)
    }

    return{
        createUser,
        handleDeposit,
        handleExtracMoneyAll,
        handleExtract,
        client,
        message,
        amount,
        setAmount,
        exitSession
    }

}