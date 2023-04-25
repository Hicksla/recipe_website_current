import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div className="Contact">
        <form className="ContactForm">
          <div className="contactInput">
            <label htmlFor="name" id="name">
              Name:
            </label>
            <input type="text" name="name" className="form-control" id="name" />
          </div>
          <div className="contactInput">
            <label htmlFor="name" id="emailLabel">
              Email:
            </label>
            <input
              type="text"
              name="email"
              className="form-control"
              id="email"
            />
          </div>
          <div className="contactComment">
            <label htmlFor="name" id="comment">
              Comment:
            </label>
            <textarea
              name="email"
              className="form-control"
              id="comment"
              rows="3"
            />
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Contact;
