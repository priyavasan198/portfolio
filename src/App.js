import React, { useState } from 'react';

function App() {
const [theme, setTheme] = useState('white');
const [number, setNumber] = useState(98765);
const [text, setText] = useState('');

function generateNumber() {
setNumber(Math.floor(10000 + Math.random() * 90000));
}

return (
<div style={{
backgroundColor: theme,
minHeight: '100vh',
textAlign: 'center',
padding: '30px',
boxSizing: 'border-box'
}}>

  {/* <h1>🌈 React Mini Projects</h1> */}

  {/* Theme Changer */}
  <h2>Theme Changer</h2>

  <button onClick={() => setTheme('black')}>Black</button>
  {/* <button onClick={() => setTheme('pink')}>Pink</button>
  <button onClick={() => setTheme('lightgreen')}>Green</button> */}
  <button onClick={() => setTheme('white')}>White</button>

  <hr />

  {/* Random Number Generator */}
  <h2>Random Number Generator</h2>

  <h3>{number}</h3>

  <button onClick={generateNumber}>
    Generate Number
  </button>

  <hr />

  {/* Live Character Counter */}
  <h2>Character Counter</h2>

  <textarea
    placeholder="Type something here..."
    value={text}
    onChange={(e) => setText(e.target.value)}
    rows="5"
    cols="30"
  />

  <h3>Characters: {text.length}</h3>
{/*command line*/}
</div>

);
}

export default App;