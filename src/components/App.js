import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(json => {
        if (json && Object.keys(json).length > 0) {
          setTimeout(() => setData(json), 300);
        } else {
          setData("No data");
        }
      })
      .catch(err => setError("An error occurred: " + err.message));
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : data === "No data" ? (
        <p>No data found</p>
      ) : data ? (
        <>
          <h2>Data Fetched from API</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
