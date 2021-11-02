import React, { useState } from 'react';
import ContactForm from './ContactForm';

function App() {
  const [logData, setLogData] = useState([]);

  return (
    <div>
      <ContactForm items={logData} />
    </div>
  );
}

export default App;
imp;
