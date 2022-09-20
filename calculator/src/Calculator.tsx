import React,{useState} from 'react'
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import { ButtonCode, calculate, State } from './calculate';

const Calculator = () => {
  const [state, setState] = useState<State>({
    current:"0",
    operand:0,
    operator: null,
    isNextClear: false,
  })
  const buttonHandler = (code:ButtonCode) => {
    const NextState = calculate(code,state)
    setState(NextState);
  }
  return (
    <div>
      <Display value={state.current} />
      <ButtonPanel buttonHandler={buttonHandler} />
    </div>
  )
}

export default Calculator
