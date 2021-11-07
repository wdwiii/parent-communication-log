import styles from './LogItem.module.css';
import Card from '../UI/Card';

const LogItem = (props) => {
  return (
    <tr>
      <td>
        {props.item.lastName}, {props.item.firstName}
      </td>
      <td>{props.item.studentId}</td>
      <td>{props.item.grade}</td>
      <td>{props.item.date}</td>
      <td>{props.item.personContacted}</td>
      <td>{props.item.method}</td>
      <td>{props.item.concern}</td>
    </tr>
  );
};

export default LogItem;
