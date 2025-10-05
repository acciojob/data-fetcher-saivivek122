import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(json => {
        if (json && json.products && json.products.length > 0) {
          setTimeout(() => setData(json), 300);
        } else {
          setTimeout(() => setData([]), 300);
        }
      })
      .catch(err => setError("An error occurred: " + err.message));
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : data ? (
        Array.isArray(data) && data.length === 0 ? (
          <pre>{JSON.stringify([])}</pre>
        ) : (
          <>
            <h2>Data Fetched from API</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
