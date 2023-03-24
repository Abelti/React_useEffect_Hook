import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client'
//import App from './App'


//useEffect declaration
//Interacting with the DOM to change style properties of the document body:

function App () {
    React.useEffect(() => {
    document.body.style.background = 'black';
    document.body.style.color = 'white';
  })
  return (
    <div>
      <h1>My React App</h1>
    </div>
);
}

const App2 = () => {
  const [age, setAge] = useState(0)
  const handleClick = () => setAge(age + 1)

  useEffect(() => {
    document.title = 'You are ' + age + ' years old!'
  })

  return <div>
    <p> Look at the title of the current tab in your browser </p>
    <button onClick={handleClick}>Update Title!! </button>
  </div>
}


//Run Again when a Value Changes

function App3() {
  const [color, setColor] = React.useState('black')
  React.useEffect(() => {
    document.body.style.background = color;
    document.body.style.color = 'white';
  }, [color]);
  function changeColor() {
    setColor('gold')
    } 
  return (
    <div>
      <h1>React App</h1>
      <button onClick={changeColor}>Change color</button>
    </div>
  );

}

//Unsubscribe by Returning a Function

function App4 () {
  const [color, setColor] = React.useState('navy')
  React.useEffect(() => {
    document.body.style.background = color;
    document.body.style.color = 'white';
    window.addEventListener('keydown', handleEnterButton)
      return () => {
        window.removeEventListener('keydown', handleEnterButton)
      }
    }, [color]);
  function changeColor() {
    setColor('gold')
  } 
  function handleEnterButton(event) {
    if (event.keyCode === 13) {
      setColor('red')
      }
    } 
  return (
    <div>
      <h1>React App</h1>
      <button onClick={changeColor}>Get color</button>
    </div>
  );
}


//Fetching data from an API

function App5() {
  const [color, setColor] = React.useState('navy')
  const [user, setUser] = React.useState(null)
  React.useEffect(() => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setUser(data.results[0]))
  }, [])
  React.useEffect(() => {
    document.body.style.background = color;
    document.body.style.color = 'white';
    window.addEventListener('keydown', handleEnterButton)
      return () => {
    window.removeEventListener('keydown', handleEnterButton)
      }
    }, [color]);
  function changeColor() {
    setColor('gold')
    }
  function handleEnterButton(event) {
    if (event.keyCode === 13) {
      setColor('red')
    }
  }
  return (
    <div>
      <h1>React App</h1>
      <button onClick={changeColor}>Get color</button>
      <br />
      <br />
        Current user: <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App2 />);




// ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
		// <App />
	// </React.StrictMode>
// )