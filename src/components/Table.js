import * as React from 'react';

const Table = ({ title, data }) => (
  <table>
    <thead>
      <tr>
        <th>{title}</th>
      </tr>
    </thead>
    {data.map((item) => (
      <tbody key={item.title}>
        <tr>
          <td>{item.title}:</td>
          <td>{item.value}</td>
        </tr>
      </tbody>
    ))}
  </table>
);
export default Table;
