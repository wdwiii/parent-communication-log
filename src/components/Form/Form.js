import styles from './Form.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { useState } from 'react';
import useForm from './useForm';

const Form = (props) => {
  const { values, handleChange, handleSubmit } = useForm();

  return (
    <div>
      <Card background={'lightblue'}>
        <form className={styles['form']} onSubmit={handleSubmit}>
          <div className={styles['form__inputs']}>
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
            {/* ============================ */}
            <label className={styles['form__label']} htmlFor="grade">
              Grade:
            </label>
            <select
              className={styles['form__inputs']}
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
            {/* ============================ */}
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
            {/* ============================ */}
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
            {/* ============================ */}
            <label className={styles['form__label']} htmlFor="method">
              Method of Contact:
            </label>
            <select
              className={styles['form__inputs']}
              id="method"
              name="method"
              value={values.method}
              onChange={handleChange}
            >
              <option value="Choose method of contact">
                Choose method of contact
              </option>
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
