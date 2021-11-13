import { useState, useEffect } from 'react';

const useForm = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    studentId: '',
    grade: '',
    date: '',
    time: '',
    personContacted: '',
    method: '',
    concern: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log({ [name]: value });
  };

  const handleSubmit = (e) => {
    //Prevents the page from refreshing when submit button is clicked.
    e.preventDefault();
  };

  return { handleChange, values, handleSubmit };
};

export default useForm;
