import { useBanco } from "../components/hook/useBanco"

interface RegisterClientProps{
    onCreateUser: () => void // no recibe parametros y no retorna nada
}

export const RegisterClient = ({onCreateUser}: RegisterClientProps) => {
    
    const{client} = useBanco()

    if(!client){
        return(
            <div>
                <h2> Welcome to the bank TS</h2>
                <p> Please login for enter the bank</p>
                <button onClick={onCreateUser}> Ingresar </button>
            </div>
        )
    }

    return null
}