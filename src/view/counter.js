import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from '../slice/counterSlice'
import { useReducer } from 'react'
const reducer=(state,action)=>{
    switch(action.type){
      case "increment":
        return {
          ...state,
          value:state.value+action.payload
      }
      case "decrement":
        return {
          ...state,
          value:state.value-action.payload
      }
      default:
        return state
    }
}
export default function Counter() {
  // const count = useSelector((state) => state.counter.value)
 // const dispatch = useDispatch()
  const [state,dispatch]=useReducer(reducer,{value:0})

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
         // onClick={() => dispatch(increment())}
         onClick={() => dispatch({payload:2,type:"increment"})}
        >
          Increment
        </button>
        <span>{state.value}</span>
        <button
          aria-label="Increment value"
         // onClick={() => dispatch(increment())}
         onClick={() => dispatch({payload:2,type:"decrement"})}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}