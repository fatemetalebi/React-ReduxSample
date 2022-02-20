import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {increment,decrement} from '../statemanagment/actions/countAction'

export const Counter = () => {
    const counter = useSelector(state => state.countState);
    const dispatch=useDispatch();

  return (
    <div>
      <h3>Counter:</h3>{counter}
      <br></br>
          <button onClick={() => dispatch(increment())}>+1</button>
          <button onClick={() => dispatch(decrement())}>-1</button>
</div>
  )
}
