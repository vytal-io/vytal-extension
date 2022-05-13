const PredictionTableRow = ({ title, value, percent }) => (
  <tr>
    <td>{title}</td>
    <td>{value || 'N/A'}</td>
    <td>{percent}%</td>
  </tr>
);

export default PredictionTableRow;
