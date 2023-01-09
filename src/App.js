
import './App.css';
import Button from './components/Button.js'
import Input from './components/input.js'
import {useState} from 'react'
import * as math  from 'mathjs';


const App =()=> {

  const [text,setText] = useState('')

  const [result,setResult] = useState('')

  const addToText = (value) =>{
    setText((text) => [...text,value + " "])
  }

  const resetClear = () =>{
    setText('')
    setResult("")
  }

  const calculateResult =  () =>{
    const input = text.join("")
    setResult(math.evaluate(input))
  }

  const buttonColor="#f2a33c"
  const redButtonColor="red"

  return (
    <div className="App">
    <div className='calc-warpper'>
      <Input text={text} result={result}/>
      <div className='row'>
      <Button symbol="7" handleClick={addToText}/>
      <Button  symbol="8" handleClick={addToText}/>
      <Button  symbol="9" handleClick={addToText}/>
      <Button  symbol="/" color={buttonColor} handleClick={addToText}/>
      </div>
      <div className='row'>
      <Button  symbol="4" handleClick={addToText}/>
      <Button  symbol="5" handleClick={addToText}/>
      <Button  symbol="6" handleClick={addToText}/>
      <Button  symbol="*" color={buttonColor} handleClick={addToText}/>
      </div>
      <div className='row'>
      <Button  symbol="1" handleClick={addToText}/>
      <Button  symbol="2" handleClick={addToText}/>
      <Button  symbol="3" handleClick={addToText}/>
      <Button  symbol="+" color={buttonColor} handleClick={addToText}/>
      </div>
      <div className='row'>
      <Button  symbol="0" handleClick={addToText}/>
      <Button  symbol="." handleClick={addToText}/>
      <Button  symbol="=" handleClick={calculateResult}/>
      <Button  symbol="-" color={buttonColor} handleClick={addToText}/>
      </div>
      <Button  symbol="Clear" color={redButtonColor} handleClick={resetClear}/>
      

    </div>
    </div>
  );
}

export default App;
