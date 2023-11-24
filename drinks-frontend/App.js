import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function fetchDrinks() {
      try {
        const response = await axios.get('http://localhost:8000/drinks/');
        setDrinks(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchDrinks();
  }, []);

  return (
    <div>
      <h1>Drinks from Django API</h1>
      <ul>
        {drinks.map((drink) => (
          <li key={drink.id}>{drink.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
