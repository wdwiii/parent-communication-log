import React, { useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import LogHistory from './components/LogHistory/LogHistory';

function App() {
  const [testData, setTestData] = useState([
    {
      firstName: 'Bobby',
      lastName: 'Johnson',
      studentId: '0233459',
      grade: '09',
      date: '10/14/2021 2:05PM',
      personContacted: 'James Johnson',
      method: 'Phone',
      concern: 'Bobby did not attend class for the sixth time in eight days.',
    },
    {
      firstName: 'Angela',
      lastName: 'Davis',
      studentId: '0456342',
      grade: '10',
      date: '10/12/2021 1:45PM',
      personContacted: 'Monica Wallace',
      method: 'Student Notification Delivered',
      concern: 'Monthly progress report',
    },
    {
      firstName: 'Massai',
      lastName: 'Throton',
      studentId: '0234342',
      grade: '11',
      date: '10/12/2021 1:45PM',
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
      date: '10/12/2021 1:45PM',
      personContacted: 'Monica Wallace',
      method: 'Email',
      concern: 'Missing assignments',
    },
  ]);

  return (
    <div>
      <h1 style={{ 'font-size': '24px', 'text-align': 'center' }}>
        Parent Communication Log
      </h1>
      <ContactForm />
      <LogHistory items={testData} />
    </div>
  );
}

export default App;
