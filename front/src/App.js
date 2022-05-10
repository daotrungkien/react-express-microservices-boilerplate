import './App.css';
import { useState } from 'react';

function App() {
  const [x, setX] = useState(1);
  const [y, setY] = useState(2);
  const [result, setResult] = useState(null);

  const calculateSum = async () => {
    try {
      const response = await fetch('http://localhost/api/add', {
        method: 'POST',
        credentials: 'omit',
        headers: { "Content-Type": 'application/json' },
        body: JSON.stringify({ x, y })
      });

      const responseData = await response.json();
      console.log(responseData)

      setResult(responseData.result)

    } catch(err) {
      console.log(err)
    }
  }

  const calculateDiff = async () => {
    try {
      const response = await fetch('http://localhost/api/subtract', {
        method: 'POST',
        credentials: 'omit',
        headers: { "Content-Type": 'application/json' },
        body: JSON.stringify({ x, y })
      });

      const responseData = await response.json();
      console.log(responseData)

      setResult(responseData.result)

    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
      <p className="param">X: {x}
        <button onClick={() => {
          setX(x + 1);
          setResult(null);
        }}>+</button>
        <button onClick={() => {
          setX(x - 1);
          setResult(null);
        }}>-</button>
      </p>

      
      <p className="param">Y: {y}
        <button onClick={() => {
          setY(y + 1);
          setResult(null);
        }}>+</button>
        <button onClick={() => {
          setY(y - 1);
          setResult(null);
        }}>-</button>
      </p>

      <p>
        <button onClick={() => calculateSum()}>Sum</button>
        <button onClick={() => calculateDiff()}>Diff</button>
      </p>

      <p className="result">Result: {result ?? '(not calculated)'}</p>

    </div>
  );
}

export default App;
