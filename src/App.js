import React, { useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import LogHistory from './components/LogHistory/LogHistory';

function App() {
  const [testData, setTestData] = useState([
    {
      firstname: 'Bobby',
      lastname: 'Johnson',
      studentid: '0233459',
      grade: '09',
      personContacted: 'James Johnson',
      method: 'Phone',
      concern: 'Bobby did not attend class for the sixth time in eight days.',
    },
    {
      firstname: 'Angela',
      lastname: 'Davis',
      studentid: '0456342',
      grade: '12',
      personContacted: 'Monica Wallace',
      method: 'Email',
      concern:
        'Received complaints from other students of Angela verbally harassing them',
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
