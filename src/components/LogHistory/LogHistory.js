import styles from './LogHistory.module.css';
import LogItem from './LogItem';

const LogHistory = (props) => {
  const loggedItems = props.items.map((logItem) => {
    return <LogItem item={logItem} />;
  });

  return (
    <section className="log" style={{ 'margin-block': '5rem' }}>
      <table>
        <tr>
          <th>Student</th>
          <th>Student ID</th>
          <th>Grade</th>
          <th>Date</th>
          <th>Contact</th>
          <th>Method</th>
          <th>Concern</th>
        </tr>
        {loggedItems}
      </table>
    </section>
  );
};

export default LogHistory;
