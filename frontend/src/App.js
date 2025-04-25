import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TierTabelle from './TierTabelle';
import TierDetail from './TierDetail';
import './App.css';

function App() {
  const [tiere, setTiere] = useState([]);
  const [ladeFehler, setLadeFehler] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch('http://localhost:5005/tiere')
      .then(response => {
        if (!response.ok) {
          throw new Error('Daten holen hat nicht geklappt!');
        }
        return response.json();
      })
      .then(daten => {
        setTiere(daten);
      })
      .catch(fehler => {
        setLadeFehler(fehler.message);
      });
  }, []);

  if (ladeFehler) {
    return <div>Fehler: {ladeFehler}</div>;
  }

  if (id) {
    return <TierDetail tiere={tiere} id={id} />;
  }

  return (
    <div>
      <h1>Tierliste</h1>
      {tiere.length > 0 ? (
        <TierTabelle tiere={tiere} />
      ) : (
        <div>Daten werden geladen...</div>
      )}
    </div>
  );
}

export default App;