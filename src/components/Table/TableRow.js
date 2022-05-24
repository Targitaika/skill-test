import React from 'react';

export default function TableRow({
  name, from, to, isActive, onclick,
}) {
  return (
    <tr className={`regular-tr${isActive ? ' selected-tr' : ''}`} onClick={onclick}>
      <td>{name}</td>
      <td>{from}</td>
      <td>{to}</td>
    </tr>
  );
}
