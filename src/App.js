import {useState} from 'react'
import './App.css';

function App() {
  const [gender, setGender] = useState('male')
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [result, setResult] = useState(0)

  
  function calculate(e){
    e.preventDefault()

    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - (burning * time)

    if(gender === "male"){
      setResult(gramsLeft / (weight * 0.7))
    }else if(gender === "female"){
      console.log(grams)
      console.log(weight)
      setResult(gramsLeft / (weight * 0.6))
    }

  }

  return (
    <div id="container">
      <h3>Alkometri</h3>
      <form onSubmit={calculate}>
        <div>
          <label>Weight</label>
          <input value={weight} onChange={e => setWeight(e.target.value)}/>
        </div>
        <div>
          <label>Bottles</label>
          <input value={bottles} onChange={e => setBottles(e.target.value)}/>
        </div>
        <div>
          <label>Time in hours</label>
          <input value={time} onChange={e => setTime(e.target.value)}/>
        </div>
        <div>
          <label>Gender:<br></br></label>
          <label id="radio">Male</label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={(e => setGender(e.target.value))}></input>
          <label id="radio">Female</label>
          <input type="radio" name="gender" value="female" onChange={(e => setGender(e.target.value))}></input>
        </div>
        <div>
          <label>Result</label>
          <output>{result.toFixed(1)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
