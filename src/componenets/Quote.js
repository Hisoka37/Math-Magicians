import { useState, useEffect } from 'react';
import './quote.css';

const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        if (!response.ok) {
          throw new Error('Response was not ok 🤒');
        }
        const data = await response.json();
        setQuotes(data);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setError(error);
        setLoading(false);
      }
    };
    fetchQuotes();
  }, []);

  if (loading) {
    return <div>Hi, Loading ...</div>;
  }

  if (error) {
    return <div> Oops, something has gone wrong, Please refresh the page</div>;
  }

  return (
    <div className="quote">
      <h1>Quote of The Day</h1>
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>{quote.quote}</li>
        ))}
      </ul>
    </div>
  );
};

export default Quote;
