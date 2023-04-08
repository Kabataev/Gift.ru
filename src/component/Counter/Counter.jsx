import {useState} from 'react'
import './counter.scss';


function Counter() {
  const [count , setCount] = useState(10);

  function decrementCount(){
    if(count <=1){
      return count;
    }else{
      setCount((prevCount) => prevCount -1 );
    }
  }

  function dectrementThreeCount(){
    if(count <=1){
      return count;
    }else{
      setCount((prevCount) => prevCount -3 );
    }
  }

  function incrementCount (){
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className='counter'>
      <h1>COUNTER</h1>
      <strong className='counter__num'>{count}</strong><br/>
      <button onClick={decrementCount}>LOWER COUNT</button>
      <br/>
      <button onClick={dectrementThreeCount}>Сделать сразу -3</button>
      <br/>
      <button onClick={incrementCount}>ADD COUNT</button>
    </div>
  )
}

export default Counter;
