import styles from './Form.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { useState } from 'react';

const Form = (props) => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    studentId: '',
    grade: 'Choose grade',
    date: '',
    time: '',
    personContacted: '',
    method: 'Choose method of contact',
    concern: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    grade: '',
    studentId: '',
    date: '',
    time: '',
    personContacted: '',
    method: '',
  });

  const validateForm = (values) => {
    let allErrors = {};

    if (!values.firstName.trim()) {
      allErrors.firstName = 'Student first name required';
    }

    if (!values.lastName.trim()) {
      allErrors.lastName = 'Student last name required';
    }

    if (values.grade === 'Choose grade') {
      allErrors.grade = 'Student grade level required';
    }

    if (!values.studentId.trim()) {
      allErrors.studentId = 'Student ID number required';
    } else if (values.studentId.length !== 7) {
      allErrors.studentId =
        'Student ID must be 7 digits. Please enter a valid number.';
    }

    if (!values.date) {
      allErrors.date = 'Date of contact required';
    }

    if (!values.time) {
      allErrors.time = 'Time of contact required';
    }

    if (!values.personContacted.trim()) {
      allErrors.personContacted = 'Name of person contacted required';
    }

    if (values.method === 'Choose method of contact') {
      allErrors.method = 'Method of contact required';
    }

    return setErrors({ ...allErrors });
  };

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
    validateForm(values);
    // If there are zero errors in the errors object
    if (Object.keys(errors).length === 0) {
      props.onSaveLogData(values);
      setValues({
        firstName: '',
        lastName: '',
        studentId: '',
        grade: 'Choose grade',
        date: '',
        time: '',
        personContacted: '',
        method: 'Choose method of contact',
        concern: '',
      });
    }
  };

  return (
    <div>
      <Card background={'lightblue'}>
        <form className={styles['form']} onSubmit={handleSubmit}>
          <div className={styles['form__inputs']}>
            <h3 className={styles['form__subheading']}>Student Information</h3>
            <label className={styles['form__label']} htmlFor="firstName">
              First Name:
            </label>
            <input
              className={styles['form__input']}
              type="text"
              id="firstName"
              placeholder="Student First Name"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p>{errors.firstName}</p>}
            {/* ============================ */}
            <label className={styles['form__label']} htmlFor="lastName">
              Last Name:{' '}
            </label>
            <input
              className={styles['form__input']}
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Student Last Name"
              value={values.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p>{errors.lastName}</p>}
            {/* ============================ */}
            <label className={styles['form__label']} htmlFor="studentId">
              Student ID:
            </label>
            <input
              className={styles['form__input']}
              type="number"
              id="studentId"
              name="studentId"
              placeholder="Student ID No."
              value={values.studentId}
              onChange={handleChange}
            />
            {errors.studentId && <p>{errors.studentId}</p>}
            {/* ============================ */}
            <label className={styles['form__label']} htmlFor="grade">
              Grade:
            </label>
            <select
              className={styles['form__input']}
              id="grade"
              name="grade"
              value={values.grade}
              onChange={handleChange}
            >
              <option value="Choose grade">Choose grade</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            {errors.grade && <p>{errors.grade}</p>}
            {/* ============================ */}
            <h3 className={styles['form__subheading']}>Time of Contact</h3>
            <label className={styles['form__label']} htmlFor="date">
              Date:
            </label>
            <input
              className={styles['form__input']}
              type="date"
              id="date"
              name="date"
              value={values.date}
              onChange={handleChange}
            />
            {errors.date && <p>{errors.date}</p>}
            {/* ============================ */}
            <label className={styles['form__label']} htmlFor="time">
              Time:
            </label>
            <input
              className={styles['form__input']}
              type="time"
              id="time"
              name="time"
              value={values.time}
              onChange={handleChange}
            />
            {errors.time && <p>{errors.time}</p>}
            {/* ============================ */}
            <h3 className={styles['form__subheading']}>Contact Information</h3>
            <label className={styles['form__label']} htmlFor="personContacted">
              Person Contacted:
            </label>
            <input
              className={styles['form__input']}
              type="text"
              id="personContacted"
              name="personContacted"
              placeholder="Contact Name"
              value={values.personContacted}
              onChange={handleChange}
            />
            {errors.personContacted && <p>{errors.personContacted}</p>}
            {/* ============================ */}
            <label className={styles['form__label']} htmlFor="method">
              Method of Contact:
            </label>
            <select
              className={styles['form__input']}
              id="method"
              name="method"
              value={values.method}
              onChange={handleChange}
            >
              <option value="Choose method of contact">
                Choose method of contact
              </option>
              <option value="Email">Email</option>
              <option value="Fax">Fax</option>
              <option value="In person Conversation">
                In person Conversation
              </option>
              <option value="Student Notification Delivered">
                Student Notification Delivered
              </option>
              <option value="Phone">Phone</option>
              <option value="Virtual Platform">Virtual Platform</option>
            </select>
            {errors.method && <p>{errors.method}</p>}
            {/* ============================ */}
            <label className={styles['form__label']} htmlFor="concern">
              Concern:
            </label>
            <input
              className={styles['form__input']}
              type="textarea"
              id="concern"
              name="concern"
              placeholder="Optional"
              value={values.concern}
              onChange={handleChange}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
};

export default Form;
