import React,{useReducer} from 'react'

const initialState = {
  firstCountr:0,
  secondCounter:10
}

const reducer = (state, action) => {
   switch(action.type){
     case 'increment':
          return {...state, firstCountr: state.firstCountr + action.value}
     case 'decrement':
          return {...state, firstCountr: state.firstCountr - action.value}
     case 'increment2':
          return {...state, secondCounter: state.secondCounter + action.value}
     case 'decrement2':
          return {...state, secondCounter: state.secondCounter - action.value}
     case 'reset':
          return initialState     
     default:
          return state  
   }
}
function CounterTwo() {
const [count, dispatch] = useReducer(reducer,initialState)
  return (
    <div>
    <div>Counter - {count.firstCountr}</div>
    <div>Counter2 - {count.secondCounter}</div>

      <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
      <button onClick={()=>dispatch({type: 'decrement',value:1})}>Decrement</button>
      <button onClick={()=>dispatch({type:'increment2',value:2})}>Increment2</button>
      <button onClick={()=>dispatch({type: 'decrement2',value:2})}>Decrement2</button>
      <button onClick={()=>dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default CounterTwo
