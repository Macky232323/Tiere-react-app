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
        </tr>
      </thead>
      <tbody>
        {tiere.map(tier => (
          <tr key={tier.id}>
            <td><Link to={`/tiere/${tier.id}`}>{tier.tierart}</Link></td>
            <td><Link to={`/tiere/${tier.id}`}>{tier.name}</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TierTabelle;