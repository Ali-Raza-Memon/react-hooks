import React, { useState } from 'react';

function Home() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = () => {
    alert(`Name: ${name}\nAge: ${age}`);
  };

  return (
    <div>
      <h2>Enter your information:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit" className='bg-green-600 text-white rounded-lg px-2 my-3'>Submit</button>
      </form>
    </div>
  );
}

export default Home;
