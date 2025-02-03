// import React, { useState, useMemo,useCallback } from "react"
// import TodoEx from "./todoEx"
// export default function MemoExampleTest() {
//         const [count, setCount] = useState(0)
//         const [todo, setTodo] = useState(["todo1", "todo2"])
//         const expesiveCalculation = (num) => {
//             console.log("calculatiing.....");
//             for (let i = 0; i <= 100; i++) {
//                 num += 1
//             }
//             return num;
//         }
//       //  let calculation = expesiveCalculation(count)
//       const calculation = useMemo(() => expesiveCalculation(count), [count]);
//     //   const addTodo=()=>{
//     //     setTodo((prev) => [...todo, "todo1"])
//     //   }
//       const addTodo=useCallback(()=>{
//         setTodo((prev) => [...todo, "todo1"])
//       },[todo])
//         return (
//             <div>
//                 <TodoEx todos={todo} addTodo={addTodo}/>
//                 {/* {todo.map((item) => (
//                     <p>{item}</p>
//                 ))} */}
//                 <button onClick={() => {
//                   addTodo();
//                 }}>Add To do</button>
//                 <button onClick={() => {
//                     setCount((prev) => prev + 1)
//                 }}>increment</button>
//                 <span>{count}</span>
//                 {/* {console.log("calculation")} */}
//                 <span>calculation:{calculation}</span>
//             </div>
//         )
// }

import React, { useState, useReducer } from "react";
function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return {
                ...state, count: state.count + 1
            }
        case "decrement":
            return {
                ...state, count: state.count - 1
            }
        case "default":
            return state
    }
}
export default function MemoExampleTest() {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return (
        <div>
            <span>{state.count}</span><br></br>
            <button onClick={() => {
                dispatch({ type: "increment" })
            }}>
                increment
            </button><br></br>
            <button onClick={() => {
                dispatch({ type: "decrement" })
            }}>
                decrement
            </button>
        </div>
    )
}