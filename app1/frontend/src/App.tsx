import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  
  const getCount = () =>{
    try {      
      const options = {method: 'GET', headers: {'User-Agent': 'insomnia/10.3.0'}};
      fetch('http://localhost:3000/api/count', options)
      .then(response => {
        console.log(response,"response",count);
        return response.json()
      })
      .then(response => {
        console.log(response);
        setCount(response.count)
      })
      .catch(err => console.error(err));
    } catch (error) {
      console.error(error);
    }
  }

  const incrementCount = () => {
    try {
      const options = {method: 'POST', headers: {'User-Agent': 'insomnia/10.3.0'}};
      fetch('http://localhost:3000/api/increase', options)
      .then(response =>
        { 
        response.json()
        getCount()     }   
      )
      .catch(err => console.error(err));
    } catch (error) {
      console.error(error);
    }
  }

  const decrementCount = () => {
    try {
      const options = {method: 'POST', headers: {'User-Agent': 'insomnia/10.3.0'}};
      fetch('http://localhost:3000/api/decrease', options)
      .then(response => {
        getCount()
        return response.json()})
      .catch(err => console.error(err));
    } catch (error) {
      console.error(error);
    }
  }

  const resetCount = () => {
    try {
      const options = {method: 'POST', headers: {'User-Agent': 'insomnia/10.3.0'}};
      fetch('http://localhost:3000/api/reset', options)
      .then(response => {
        getCount()
        response.json()
      })
      .catch(err => console.error(err));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCount();
  }, [ count ]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Express + Postgress </h1>
      <div className="card">
        <button style={{ margin: '0 -10px' }} onClick={decrementCount} >
          -
        </button>
        <button style={{ zIndex: 0 }} >
          {count}
        </button>
        <button style={{ margin: '0 -10px', zIndex: 1 }} onClick={incrementCount} >
          +
        </button>
      </div>
      <div className="">
        <button style={{ margin: '0 -10px', zIndex: 1 }} onClick={resetCount} >
          reset
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
