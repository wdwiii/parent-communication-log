import styles from './LogHistory.module.css';
import Card from '../UI/Card';
import LogItem from './LogItem';

const LogHistory = (props) => {
  const loggedItems = props.items.map((logItem) => {
    return <LogItem item={logItem} />;
  });

  return (
    <section className="log" style={{ 'margin-block': '5rem' }}>
      <Card background={'lightblue'}>
        <h1>Recent Logs:</h1>
        <ul className={styles['log__history']}>{loggedItems}</ul>
      </Card>
    </section>
  );
};

export default LogHistory;
