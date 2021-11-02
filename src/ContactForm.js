import styles from './ContactForm.module.css';

const ContactForm = (props) => {
  const logContactHandler = (event) => {
    //Prevents the page from refreshing when submit button is clicked.
    event.preventDefault();
  };

  return (
    <form
      action=""
      className={styles['contact-form']}
      onSubmit={logContactHandler}
    >
      <label htmlFor="form__fname">
        First Name:
        <input type="text" id="form__fname" placeholder="Willie" />
      </label>
      {/* ============================ */}
      <label htmlFor="form__lname">
        Last Name:
        <input type="text" id="form__lname" placeholder="Whitfield" />
      </label>
      {/* ============================ */}
      <label htmlFor="form__id">
        Student ID:
        <input type="number" id="form__id" placeholder="1234567" />
      </label>
      {/* ============================ */}
      <label htmlFor="form__grade">
        Grade:
        <select id="form__grade" name="grade">
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </label>
      {/* ============================ */}
      <label htmlFor="form__date">
        Date:
        <input type="date" id="form__date" />
      </label>
      {/* ============================ */}
      <label htmlFor="form__time">
        Time:
        <input type="time" id="form__time" />
      </label>
      {/* ============================ */}
      <label htmlFor="form__fname">
        Person Contacted:
        <input
          type="text"
          id="form__contact-with"
          placeholder="Mr. Whitfield"
        />
      </label>
      {/* ============================ */}
      <label htmlFor="form__method">
        Method of Contact:
        <select id="form__grade" name="method">
          <option value="email">Email</option>
          <option value="fax">Fax</option>
          <option value="in-person">In person Conversation</option>
          <option value="student-delivered">
            Student Notification Delivered
          </option>
          <option value="phone">Phone</option>
          <option value="virtual">Virtual Platform</option>
        </select>
      </label>
      {/* ============================ */}
      <label htmlFor="form__reason">
        Reason for Call:
        <input type="textarea" id="form__reason" placeholder="Optional" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
