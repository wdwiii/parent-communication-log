import React, { useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import LogHistory from './components/LogHistory/LogHistory';

function App() {
  const [logData, setLogData] = useState([]);

  return (
    <div>
      <h1 style={{ 'font-size': '24px', 'text-align': 'center' }}>
        Parent Communication Log
      </h1>
      <ContactForm items={logData} />
      <LogHistory />
    </div>
  );
}

export default App;
