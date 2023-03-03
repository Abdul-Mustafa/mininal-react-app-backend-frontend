import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [size, setSize] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/event.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, size })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      /><br/><br/>

      <label htmlFor="size">Size:</label>
      <input
        type="text"
        id="size"
        name="size"
        value={size}
        onChange={(event) => setSize(event.target.value)}
      /><br/><br/>

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
