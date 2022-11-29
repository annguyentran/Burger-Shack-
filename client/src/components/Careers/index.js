import React, { useState } from "react";

// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../utils/helpers";

function Careers() {

  // Create starter as empty string for variables in the contact form
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [error, seterror] = useState("");

  const handleInputChange = (event) => {
    // get input data from users
    const { target } = event;
    const type = target.name;
    const data = target.data;

    //  we set the state of either email, username, and message based on input type
    if (type === "email") {
      setEmail(data);
    } else if (type === "userName") {
      setUserName(data);
    } else {
      setMessage(data);
    }
  };

  const handleFormSubmit = (event) => {

    event.preventDefault();

    // check if the email is valid of empty. set an error messae to be displayed to users on screen
    if (!validateEmail(email) || !userName) {
      seterror("Email or Name is invalid");
      return;    
    }
    // check if there is a message
    if (!setMessage(message)) {
      seterror(`Message is required.`);
      return;
    }

    // clear out the input form after submission
    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <section id="reach-out" className="contact">
      <div className="contact-info">
        <div>
          <h3>CONTACT INFO</h3>
          <address>
            Located In Philadelphia, PA<br />
            Phone: <a href="tel:267.957.6807">+(1) 267- 957-6800</a>
            <br />
            Email:{" "}
            <a href="mailto://tengfai97@gmail.com">
              tengfai97@gmail.com
            </a>
          </address>
        </div>

        {/* contact form */}
        <div className="contact-form">
          <h3>Contact Me</h3>
          <form className="form">
            {/* Name */}
            <label for="contact-name"></label>
            <input
              data={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              id="contact-name"
              placeholder="YOUR NAME"
            />

            {/* Email */}
            <label for="contact-email"></label>
            <input
              data={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="contact-email"
              placeholder="YOUR EMAIL ADDRESS"
            />

            {/* Message */}
            <label for="contact-message"></label>
            <textarea
              data={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              id="contact-message"
              placeholder="Enter Message"
            />
            <button type="button" onClick={handleFormSubmit}>
              SEND
            </button>
          </form>
        </div>
        {error && (
          <div>
            <p className="error-text">{error}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Careers;