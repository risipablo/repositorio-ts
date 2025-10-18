// component/Users.tsx

import { useEffect } from "react"
import { useData } from "../hook/useData"



export const DataLocal = () => {
    const {users,loading,fetch} = useData()
    
    useEffect(() => {
        fetch()
            .then(data => {
                console.log(data)
            })
                 users.slice(0.3)
    },[])

    if(loading) return <p> loading ...</p>

    return (
        <div>
            <h1> Import local data base</h1>
        <div>
            {users.length > 0 && (
                users.map(user => (
                <ul key={user.id}>
                    <li> Name: {user.name}</li>
                    <li> Email: {user.email}</li>
                    <li> Age: {user.age}</li>
                    <li> City: {user.city}</li>
                </ul>
            ))
            )}
        </div>
        </div>
        
    )
}