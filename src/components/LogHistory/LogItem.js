import './LogItem.module.css';

const LogItem = (props) => {
  return (
    <tr key={props.item.studentId}>
      <td>
        {props.item.lastName}, {props.item.firstName}
      </td>
      <td>{props.item.studentId}</td>
      <td>{props.item.grade}</td>
      <td>
        {props.item.date}
        <br></br>
        {props.item.time}
      </td>
      <td>{props.item.personContacted}</td>
      <td>{props.item.method}</td>
      <td>{props.item.concern}</td>
    </tr>
  );
};

export default LogItem;
