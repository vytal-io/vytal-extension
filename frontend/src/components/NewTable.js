import parse from 'html-react-parser';
import { checkUndefinedProperties } from './navigator';

const Table = ({ data }) => (
  <div className="tableWrap">
    <table>
      {data.map((item) => (
        <tbody key={item.key}>
          <tr>
            <td>{item.title}</td>
            <td>{item.value}</td>
            <td>{parse(checkUndefinedProperties(item))}</td>
          </tr>
        </tbody>
      ))}
    </table>
  </div>
);

export default Table;
