import React, { useState } from 'react';
import Form from './components/Form/Form';
import LogTable from './components/LogTable/LogTable';

function App() {
  const [logsData, setLogsData] = useState([
    {
      firstName: 'Bobby',
      lastName: 'Johnson',
      studentId: '0233459',
      grade: '09',
      date: '10/14/2021',
      time: '8:01',
      personContacted: 'James Johnson',
      method: 'Phone',
      concern: 'Bobby did not attend class for the sixth time in eight days.',
    },
    {
      firstName: 'Angela',
      lastName: 'Davis',
      studentId: '0456342',
      grade: '10',
      date: '10/12/2021',
      time: '9:11',
      personContacted: 'Monica Wallace',
      method: 'Student Notification Delivered',
      concern: 'Monthly progress report',
    },
    {
      firstName: 'Massai',
      lastName: 'Throton',
      studentId: '0234342',
      grade: '11',
      date: '10/12/2021',
      time: '10:26',
      personContacted: 'Monica Wallace',
      method: 'Email',
      concern:
        'Received complaints from other students of Angela verbally harassing them',
    },
    {
      firstName: 'LeBron',
      lastName: 'Williams',
      studentId: '0865612',
      grade: '09',
      date: '10/12/2021',
      time: '11:45',
      personContacted: 'Monica Wallace',
      method: 'Email',
      concern: 'Missing assignments',
    },
  ]);

  const addLogData = (enteredLogItem) => {
    setLogsData((prevState) => {
      return [enteredLogItem, ...prevState];
    });
  };

  return (
    <div>
      <h1 style={{ 'font-size': '24px', 'text-align': 'center' }}>
        Parent Communication Log
      </h1>
      <Form onSaveLogData={addLogData} />
      <LogTable items={logsData} />
    </div>
  );
}

export default App;
