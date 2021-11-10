import styles from './ContactForm.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { useState } from 'react';

const ContactForm = (props) => {
  const [enteredFirstName, setEnteredFirstName] = useState('');
  const [enteredLastName, setEnteredLastName] = useState('');
  const [enteredStudentId, setEnteredStudentId] = useState('');
  const [enteredGrade, setEnteredGrade] = useState('09');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredTime, setEnteredTime] = useState('');
  const [enteredPersonContacted, setEnteredPersonContacted] = useState('');
  const [enteredMethod, setEnteredMethod] = useState('Email');
  const [enteredConcern, setEnteredConcern] = useState('');

  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const studentIdChangeHandler = (event) => {
    setEnteredStudentId(event.target.value);
  };

  const gradeChangeHandler = (event) => {
    setEnteredGrade(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const timeChangeHandler = (event) => {
    setEnteredTime(event.target.value);
  };

  const personContactedChangeHandler = (event) => {
    setEnteredPersonContacted(event.target.value);
  };

  const contactMethodChangeHandler = (event) => {
    setEnteredMethod(event.target.value);
  };

  const concernChangeHandler = (event) => {
    setEnteredConcern(event.target.value);
  };

  const submitHandler = (event) => {
    //Prevents the page from refreshing when submit button is clicked.
    event.preventDefault();

    const loggedData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      studentId: enteredStudentId,
      grade: enteredGrade,
      date: new Date(enteredDate).toDateString(),
      time: enteredTime,
      personContacted: enteredPersonContacted,
      method: enteredMethod,
      concern: enteredConcern,
    };
    props.onSaveLogData(loggedData);

    setEnteredFirstName('');
    setEnteredLastName('');
    setEnteredStudentId('');
    setEnteredGrade('09');
    setEnteredDate('');
    setEnteredTime('');
    setEnteredPersonContacted('');
    setEnteredMethod('Email');
    setEnteredConcern('');

    // const enteredData = {
    //   firstName: '',
    //   lastName: '',
    //   studentId: '',
    //   grade: '',
    //   date: '',
    //   time: '',
    //   personContacted: '',
    //   method: '',
    //   concern: '',
    // };
  };

  return (
    <Card background={'lightblue'}>
      <form className={styles['contact-form']} onSubmit={submitHandler}>
        <div style={{ width: '100%' }}>
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            id="fname"
            placeholder="Willie"
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
          />
          {/* ============================ */}
          <label htmlFor="lname">Last Name: </label>
          <input
            type="text"
            id="lname"
            placeholder="Whitfield"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
          />
          {/* ============================ */}
          <label htmlFor="id">Student ID:</label>
          <input
            type="number"
            id="id"
            placeholder="1234567"
            value={enteredStudentId}
            onChange={studentIdChangeHandler}
          />
          {/* ============================ */}
          <label htmlFor="grade"> Grade:</label>
          <select
            id="grade"
            name="grade"
            value={enteredGrade}
            onChange={gradeChangeHandler}
          >
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          {/* ============================ */}
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
          {/* ============================ */}
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={enteredTime}
            onChange={timeChangeHandler}
          />
          {/* ============================ */}
          <label htmlFor="contact"> Person Contacted: </label>
          <input
            type="text"
            id="contact"
            placeholder="Mr. Whitfield"
            value={enteredPersonContacted}
            onChange={personContactedChangeHandler}
          />
          {/* ============================ */}
          <label id="method">Method of Contact:</label>
          <select
            id="method"
            name="method"
            value={enteredMethod}
            onChange={contactMethodChangeHandler}
          >
            <option value="email">Email</option>
            <option value="fax">Fax</option>
            <option value="in-person">In person Conversation</option>
            <option value="student-delivered">
              Student Notification Delivered
            </option>
            <option value="phone">Phone</option>
            <option value="virtual">Virtual Platform</option>
          </select>
          {/* ============================ */}
          <label>Concern:</label>
          <input
            type="textarea"
            id="concern"
            name="concern"
            placeholder="Optional"
            value={enteredConcern}
            onChange={concernChangeHandler}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default ContactForm;
