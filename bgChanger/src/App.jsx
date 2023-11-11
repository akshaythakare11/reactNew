import { useState } from "react"

function App() {

  const [color, setColor] = useState('olive')
  return (
    <div className="w-full h-screen duration-200"
      style={{
        backgroundColor: color
      }}>
      <div className="absolute flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
        <div className="absolute flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-9 py-1 rounded-full border" style={{
            backgroundColor: "Red"
          }}
            onClick={() => {
              setColor('red')
            }}>Red
          </button>

          <button className="outline-none px-9 py-1 rounded-full border" style={{
            backgroundColor: "violet"
          }}
            onClick={() => {
              console.log(color,'clicked')
              setColor('violet')
            }}>violet
          </button>

          <button className="outline-none px-9 py-1 rounded-full border" style={{
            backgroundColor: "blue"
          }}
            onClick={() => {
              setColor('blue')
              console.log(color,'clicked')

            }}>Blue
          </button>

        </div>
      </div>
    </div>
  )
}

export default App
