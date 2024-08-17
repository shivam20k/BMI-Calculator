import { useMemo, useState } from 'react';
import './App.css';

function App() {

  const [height, setHeight] = useState(50)
  const [weight, setWeight] = useState(30)


  
  function onHeightChange(event){
    setHeight(event.target.value)

  }

  function onWeightChange(event){
    setWeight(event.target.value)
  }


  const output= useMemo(()=>{

    const calculateHeight =height/100;
    return(weight/(calculateHeight*calculateHeight)).toFixed(1)


  },[weight,height])
  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className='input-section'>

        <p className='slider-output'>Weight {weight}Kg</p>
        <input className='input-slider'
          type='range'
          step='1'
          min='30'
          max='200'
          onChange={onWeightChange}
          >

          </input>

        <p className='slider-output'>Height {height}cm</p>
        <input className='input-slider'
          type='range'
          step='1'
          min='40'
          max='220'
          onChange={onHeightChange}
          
          ></input>


      </div>
      <div className='output-section'>
        <p className='p'>Your BMI is </p>
        <p className='output'> {output}</p>
      </div>
    </main>
  );
}

export default App;
