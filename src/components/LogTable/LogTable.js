import styles from './LogTable.module.css';
import LogItem from './LogItem';

const LogTable = (props) => {
  const loggedItems = props.items.map((logItem) => {
    return <LogItem item={logItem} />;
  });

  return (
    <section className={styles.log} style={{ 'margin-block': '5rem' }}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Student</th>
            <th>Student ID</th>
            <th>Grade</th>
            <th>Date</th>
            <th>Contact</th>
            <th>Method</th>
            <th>Concern</th>
          </tr>
        </thead>
        <tbody>{loggedItems}</tbody>
      </table>
    </section>
  );
};

export default LogTable;
