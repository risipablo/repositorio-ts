import { useBanco } from "../components/hook/useBanco"
import { RegisterClient } from "./registerClient"



export function Banco(){

    const {client, amount,setAmount,handleDeposit,handleExtract,handleExtracMoneyAll,message,createUser,exitSession} = useBanco()
    

    return(
        <div>
            <hr/>
            {!client ? <RegisterClient onCreateUser={createUser}/> 
                 
                 
                 : 
 
                <div>
                    <p> Welcome back {client.name}</p>
            
                    <div style={{margin: "20px 0"}}>
                        <input type="number"  value={amount} onChange={(e) => setAmount(Number(e.target.value))}/>
                        <button onClick={handleDeposit}> Deposit</button>
                        <button onClick={handleExtract}> Extract</button>
                        <button onClick={handleExtracMoneyAll}> Extrac All Money</button>

                        <button onClick={exitSession}> Exit Session</button>
                    </div>


                <p>Balanced Acount: ${client.getBalance()}</p>
                    <p>{message}</p>



                    
                </div>


            
            }

            
        </div>

    )
}