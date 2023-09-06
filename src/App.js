import {useState} from 'react'
import './App.css';

function App() {
  const [gender, setGender] = useState('male')
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [result, setResult] = useState(0)

  const numbers = new Array(24).fill(null).map((_,i) => i+1)
  
  function calculate(e){
    e.preventDefault()

    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - (burning * time)

    if(gender === "male"){
      result = grams / (weight * 0.7)
    }else{
      result = grams / (weight * 0.6)
    }

    setResult(result)

  }

  return (
    <div id="container">
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
          <label>Gender</label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={(e => setGender(e.target.value))}><label>Male</label></input>
          <input type="radio" name="gender" value="female" defaultChecked onChange={(e => setGender(e.target.value))}><label>Female</label></input>
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
