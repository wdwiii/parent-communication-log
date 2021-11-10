import './LogHistory.module.css';
import LogItem from './LogItem';

const LogHistory = (props) => {
  const loggedItems = props.items.map((logItem) => {
    return <LogItem item={logItem} />;
  });

  return (
    <section className="log" style={{ 'margin-block': '5rem' }}>
      <table>
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

export default LogHistory;
