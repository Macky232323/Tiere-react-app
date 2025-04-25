import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TierTabelle from './TierTabelle';
import TierDetail from './TierDetail';
import './App.css';

function App() {
  const [tiere, setTiere] = useState([]);
  const [fehler, setFehler] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch('http://localhost:5005/tiere')
      .then(res => res.ok ? res.json() : Promise.reject(res.statusText))
      .then(setTiere)
      .catch(err => setFehler(err));
  }, []);

  if (fehler) return <div>Fehler: {fehler}</div>;
  if (id) return <TierDetail tiere={tiere} id={id} />;

  return (
    <div>
      <h1>Tierliste</h1>
      {tiere.length ? <TierTabelle tiere={tiere} /> : <div>Daten werden geladen...</div>}
    </div>
  );
}

export default App;