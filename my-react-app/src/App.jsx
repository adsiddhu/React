import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to React</h1>
      <h1>Counter : {count}</h1>

      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => count > 0 ? setCount(count - 1) : count}>-</button>
    </>
  )
}

export default App