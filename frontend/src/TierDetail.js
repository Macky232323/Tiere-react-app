import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TierDetail.css';

function TierDetail({ tiere, id }) {
  const navigate = useNavigate();

  const tier = tiere.find(t => t.id === parseInt(id));

  if (!tier) {
    return <div>Tier nicht gefunden!</div>;
  }

  return (
    <div>
      <h2>Tierdetails</h2>
      <p>Tierart: {tier.tierart}</p>
      <p>Name: {tier.name}</p>
      <p>Krankheit: {tier.krankheit}</p>
      <p>Geburtstag: {tier.geburtstag}</p>
      <p>Gewicht: {tier.gewicht}</p>
      <button onClick={() => navigate('/')}>Zurück zur Liste</button>
    </div>
  );
}

export default TierDetail;