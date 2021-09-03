const Table = ({ data }) => (
  <div className="tableWrap">
    <table>
      {data.map((item) => (
        <tbody key={item.title}>
          <tr>
            <td>{item.title}</td>
            <td>{item.value}</td>
          </tr>
        </tbody>
      ))}
    </table>
  </div>
);

export default Table;
