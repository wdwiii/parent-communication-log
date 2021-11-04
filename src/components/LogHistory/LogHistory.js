import styles from './LogHistory.module.css';
import Card from '../UI/Card';

const LogHistory = (props) => {
  const testData = ['test 1', 'test 2', 'test 3'];

  const loggedItems = testData.map((logItem) => {
    return <li className={styles['log-history__item']}>{logItem}</li>;
  });

  return (
    <Card>
      <h1>Recent Logs:</h1>
      <ul className={styles['log-history__list']}>{loggedItems}</ul>
    </Card>
  );
};

export default LogHistory;
