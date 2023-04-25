import React from "react";
import { MdAccountCircle } from "react-icons/md";

class Account extends React.Component {
  render() {
    return (
      <div className="account">
        <form className="CreateAccountForm">
          <div className="createRecipePhoto">
            <MdAccountCircle />
          </div>
          <div className="AccountName">
            <label htmlFor="AccountName">Name</label>
            <input
              type="text"
              className="form-control"
              id="AccountName"
              required
            />
          </div>
          <div className="AccountEmail">
            <label htmlFor="AccountEmail">Email</label>
            <input
              type="text"
              className="form-control"
              id="AccountEmail"
              required
            />
          </div>
          <div className="AccountPassword">
            <label htmlFor="AccountPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="AccountPassword"
              required
            />
          </div>
          <div className="CreateAccountInput">
            <label htmlFor="passwordVerify">VerifyPassword</label>
            <input
              name="passwordVerify"
              type="password"
              id="passwordVerify"
              required
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Account;
