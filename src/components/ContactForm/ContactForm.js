import styles from './ContactForm.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const ContactForm = (props) => {
  const logContactHandler = (event) => {
    //Prevents the page from refreshing when submit button is clicked.
    event.preventDefault();
  };

  return (
    <Card background={'lightblue'}>
      <form
        action=""
        className={styles['contact-form']}
        onSubmit={logContactHandler}
      >
        <div style={{ width: '100%' }}>
          <label htmlFor="fname">First Name:</label>
          <input type="text" id="fname" placeholder="Willie" />
          {/* ============================ */}
          <label htmlFor="lname">Last Name: </label>
          <input type="text" id="lname" placeholder="Whitfield" />
          {/* ============================ */}
          <label htmlFor="id">Student ID:</label>
          <input type="number" id="id" placeholder="1234567" />
          {/* ============================ */}
          <label htmlFor="grade"> Grade:</label>
          <select id="grade" name="grade">
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          {/* ============================ */}
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" />
          {/* ============================ */}
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" />
          {/* ============================ */}
          <label htmlFor="contact"> Person Contacted: </label>
          <input type="text" id="contact" placeholder="Mr. Whitfield" />
          {/* ============================ */}
          <label id="method">Method of Contact:</label>
          <select id="method" name="method">
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
          <label>Reason for Call:</label>
          <input
            type="textarea"
            id="concern"
            name="concern"
            placeholder="Optional"
          />
        </div>
        <Button type="submit" background="rgb(0, 0, 82)">
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;
