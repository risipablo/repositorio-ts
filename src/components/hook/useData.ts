import { useState } from "react"
import type{ IUsers } from "../interface/interface"
import userApi from "../../../config/data.json"



export const useData = () => {
    const [users, setUsers] = useState<IUsers[]>([])
    const [loading,setLoading] = useState(false)

    const fetch = ():Promise<IUsers[]> => {
        setLoading(true)
   
        return new Promise<IUsers[]>((resolve) => {
            const userData = (userApi as IUsers[]).slice(0,3)
            
            setUsers(userData)
            setLoading(false)
            resolve(userData)
        })
    }

    return{ users, loading , fetch}

}

// El fetch crea una Promesa para devolver un array tipado con su interfaz
// Luego se crear una constante para obtener los datos locales (userAPi)
// Luego guarda esos datos procesados en el estado local y en el resolves devolviendo el mismo array

