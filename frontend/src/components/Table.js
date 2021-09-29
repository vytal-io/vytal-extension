import './Table.css';
import TableRow from './TableRow';

const Table = ({ data }) => (
  <div className="tableWrap">
    <table>
      {data.map((item) => (
        <tbody key={item.key} title={item.code}>
          <TableRow item={item} />
        </tbody>
      ))}
    </table>
  </div>
);

export default Table;
