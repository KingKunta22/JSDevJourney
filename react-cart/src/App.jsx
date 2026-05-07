// import { useState } from 'react' // What does this line do

// function App() {

//   const [count, setCount] = useState(0) // AND THIS LINE... LIKE FPR ME TO UNDERSTAND CONVERT EVERYTHING TO VANILLA IF NEEDED

//   return (
//     <div>
//       <h1>Count: {count}</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button> 
//     </div>
//     // So I basically declared a variable outside this return value (count), called it like {count} which I believe is similar to ${count} in javascript
//     // thenidk what the onclick value means and what it does, i mean it does count + 1 but idk how and wtf is useState
//   )

// }

// export default App // I believe this is a necessary before ending every .jsx file?

// Okay, TASK 1:

import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button> 
      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  )

}

export default App