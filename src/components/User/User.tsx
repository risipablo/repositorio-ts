import { useState } from "react"


export const User = () => {


    const[name,setName] = useState<string>("")
    const[username,setUsername] = useState<string>("")
    const[email,setEmail] = useState<string>("")
    const[city,setCity] = useState<string>("")


    const handleAddUser = () => {
        // addUser(name,city,email,username)
        setCity("")
        setName("")
        setUsername("")
        setName("")
    }


    return(
        <div className="user-container">
            <h2>User List</h2>

            <form>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
            </form>

            <div className="buttons">
                <button onClick={handleAddUser}> Add</button>
            </div>

            {user.length > 0 && (
                <table className="user-table">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {user.slice(0, 5).map((u) => (
                    <tr key={u.id}>
                        <td>{u.name}</td>
                        <td>{u.username}</td>
                        <td>{u.email}</td>
                        <td>{u.address.city}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            )}
        </div>
    )
}