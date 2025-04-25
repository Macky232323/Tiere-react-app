import React from 'react';
import { Link } from 'react-router-dom';
import './TierTabelle.css';

function TierTabelle({ tiere }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Tierart</th>
          <th>Name</th>
          <th>Krankheit</th>
          <th>Geburtstag</th>
          <th>Gewicht</th>
        </tr>
      </thead>
      <tbody>
        {tiere.map(tier => (
          <tr key={tier.id}>
            <td><Link to={`/tiere/${tier.id}`}>{tier.tierart}</Link></td>
            <td><Link to={`/tiere/${tier.id}`}>{tier.name}</Link></td>
            <td>{tier.krankheit}</td>
            <td>{tier.geburtstag}</td>
            <td>{tier.gewicht}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TierTabelle;