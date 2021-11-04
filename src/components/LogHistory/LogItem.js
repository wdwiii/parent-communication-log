import styles from './LogItem.module.css';
import Card from '../UI/Card';

const LogItem = (props) => {
  return (
    <li className={styles['log__item']} key={props.item.studentid}>
      <Card background={'#fff'}>
        <ul>
          <li>
            <b>Student Name:</b> {props.item.firstname} {props.item.lastname}
          </li>
          <li>
            <b>Student ID:</b> {props.item.studentid}
          </li>
          <li>
            <b>Grade:</b> {props.item.grade}
          </li>
          <li>
            <b>Date Contacted:</b> 11/23/2021
          </li>
          <li>
            <b>Method of Contact:</b> {props.item.method}
          </li>
          <li>
            <b>Concern:</b> {props.item.concern}
          </li>
        </ul>
      </Card>
    </li>
  );
};

export default LogItem;
