import './App.css';
// import { useState, useEffect } from "react"


//*************************************** */ useState
// function App() {
//   const [count, setCount] = useState(0);
//   // const handleClick =
//   return (
//     <>
//       <p>Count value is:{count} </p>

//       <button onClick={() => setCount(0)}>Reset</button>

//       <button onClick={() => setCount(count + 1)}> Plus (+) </button>

//       <button
//         onClick={() => setCount(count - 1)}>
//         Minus (-)
//       </button>
//     </>
//   );
// }

// export default App;



//*************************************** */ setState
// function App() {
//   const [state, setState] = useState({ age: 19, siblingsNum: 4 })
//   const handleClick = val =>
//     setState({
//       ...state,
//       [val]: state[val] + 1
//     })
//   const { age, siblingsNum } = state

//   return (
//     <div>
//       <p>Today I am {age} Years of Age</p>
//       <p>I have {siblingsNum} siblings</p>

//       <div>
//         <button onClick={handleClick.bind("null", 'age')}>Get older!</button>
//         <button onClick={handleClick.bind(null, 'siblingsNum')}>
//           More siblings!
//         </button>
//       </div>
//     </div>
//   )
// }

// export default App;


//**************************************** stateEffect
// function App() {
//   // const [age, setAge] = useState(0)
//   // const handleClick = () => setAge(age + 1)

//   // useEffect(() => {
//   //   alert('You are ' + age + ' years old!')
//   // })
//   useEffect(() => {
//     const clicked = () => console.log('window clicked')
//     window.addEventListener('click', clicked)

//     return () => {
//       window.removeEventListener('click', clicked)
//     }
//   }, [])

//   useEffect(() => {
//     console.log("another useEffect call");
//   })
//   return (
//     //   <div>
//     //   <p> Look at the title of the current tab in your browser </p>
//     //   <button onClick={handleClick}>Update Title!! </button>
//     // </div>
//     <div>
//       When you click the window you'll
//       find a message logged to the console
//     </div>
//   )
// }

// export default App;






//*********************************************** */ Skipping effects (array dependency)
// import { useState, useEffect } from 'react';

// const App = () => {
//   const [randomNumber, setRandomNumber] = useState(0);
//   const [effectLogs, setEffectLogs] = useState([]);

//   useEffect(() => {
//     setEffectLogs((prevEffectLogs) => [...prevEffectLogs, 'effect fn has been invoked']);
//   },[randomNumber]);

//   return (
//     <div>
//       <h1>{randomNumber}</h1>
//       <button
//         onClick={() => {
//           setRandomNumber(Math.random());
//         }}
//       >
//         Generate random number!
//       </button>
//       <div>
//         {effectLogs.map((effect, index) => (
//           <div key={index}>{'🍔'.repeat(index) + effect}</div>
//         ))}
//       </div>
// div>
//   );
// };

// export default App



// ***********************************useReducer
import React from 'react'
import { useReducer } from 'react';

const App = () => {
  const initialState = { width: 15 };

  const reducer = (state, action) => {
    console.log(state)
    switch (action) {
      case 'plus':
        return { width: state.width + 15 }
      case 'minus':
        return { width: state.width - 15 }
      default:
        throw new Error("what's going on?")
    }
  }


  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <div style={{ background: 'teal', height: '30px', width: state.width }}></div>
      <div style={{ marginTop: '3rem' }}>
        <button onClick={() => dispatch('plus')}>Increase bar size</button>
        <button onClick={() => dispatch('minus')}>Decrease bar size</button>
      </div>
    </>
  )
}

export default App