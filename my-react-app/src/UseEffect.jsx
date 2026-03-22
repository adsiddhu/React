import { useState, useEffect } from "react";

function UseEffect() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function GitHubProfile() {
            const response = await fetch("https://api.github.com/users");
            const data = await response.json();
            setUsers(data);
            console.log("react");
        }
        GitHubProfile();
    }, [])


    return (
        <>
            <h1>useEffect</h1>
            <div style={{ display: "flex", justifyContent: "center", textAlign: "center", flexWrap: "wrap", }}>
                {users.map(data => (
                    <div style={{ border: "2px solid white", margin: "12px", borderRadius: "8px" }}>
                        <img
                            src={data.avatar_url}
                            height={"150px"}
                            style={{ margin: "8px", borderRadius: "8px" }}
                        />
                        <p style={{ padding: "8px" }}>{data.login}</p>
                    </div>
                ))}
                <UserName />
                <UseEffectCount />
            </div>
        </>
    );
}

export default UseEffect;

export function UserName() {
    const [name, setName] = useState("")
    function handleChange(e) {
        setName(e.target.value.toUpperCase())
    }
    return (
        <>
            <h1>user Name :</h1>
            <br />
            <input type="text" value={name} onChange={handleChange} />
        </>
    )
}


export function UseEffectCount() {
    const [user, setUser] = useState([])
    const [count, setCount] = useState(30)

    useEffect(() => {
        async function GitHubCount() {
            const response = await fetch(`https://api.github.com/users?per_page=${count}`)
            const data = await response.json()
            setUser(data)
        }
        GitHubCount()
    }, [count])

    return (
        <>
            <h1>useEffect Count </h1>
            <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />
            {
                user.map((data) => (
                    <img
                        src={data.avatar_url}
                        height={"150px"}
                        style={{ margin: "8px", borderRadius: "8px" }}
                    />
                ))
            }
        </>
    )
}