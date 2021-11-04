import React, { useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const [logData, setLogData] = useState([]);

  return (
    <div>
      <h1 style={{ 'font-size': '24px', 'text-align': 'center' }}>
        Parent Communication Log
      </h1>
      <ContactForm items={logData} />
    </div>
  );
}

export default App;
