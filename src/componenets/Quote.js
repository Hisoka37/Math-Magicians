import { useState, useEffect } from 'react';
import './quote.css';

const Quote = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const category = 'success';
        const API_KEY = 'Cc7Hs/f+QcMWIBGsIrrgDw==6z957rQCg0Yhq4OT';
        const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
        const response = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': API_KEY,
          },
        });
        const data = await response.json();
        setQuotes(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchQuotes();
  }, []);

  return (
    <div className="quote">
      <h1>Quotes</h1>
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>{quote.quote}</li>
        ))}
      </ul>
    </div>
  );
};

export default Quote;
