import { useState } from "react";
import Cricket from "./Cricket"


function App() {
  let [count, setCount] = useState(10)
  // let count = 0;
  const addCounter = () => {
    setCount(count++)
  }

  const deleteCounter = () => {
    if (count > 0) {
      count = count - 1
      setCount(count)
    }

  }
  return (
    <>

      <h1>Akshay Thakare</h1>
      <button onClick={addCounter}>
        Add the Score {count}
      </button>
      <br />
      <br />
      <button onClick={deleteCounter}>
        Delete the Score {count}
      </button>
      <Cricket />
    </>

  )
}

export default App
