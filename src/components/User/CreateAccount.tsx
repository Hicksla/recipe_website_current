import React from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  Auth,
  setLoggedIn,
  updateProfile
} from "firebase/auth";
import { MdAccountCircle } from "react-icons/md";
import { FirebaseApp, initializeApp } from "firebase/app";

class CreateAccount extends React.Component<
  {},
  {
    username: string;
    auth: Auth;
    loginEmail: string;
    loginPassword: string;
    profileImage: any;
  }
> {
  logIn(email: string, password: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setLoggedIn(true);
        updateProfile(auth.currentUser, { username });

        console.log(user);
        if (user.displayName !== null) {
          this.setState({ username: user.displayName });
        } else if (user.email !== null) {
          this.setState({ username: user.email });
        }
        sessionStorage.setItem("Auth Token", user.refreshToken);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  render() {
    return (
      <div className="CreateAccount">
        <form className="CreateAccountForm">
          <div className="createRecipePhoto">
            <MdAccountCircle className="AccountPicture" />
          </div>
          <div className="AccountName CreateAccountInput">
            <label htmlFor="AccountName">Name</label>
            <input
              type="text"
              className="form-control"
              id="AccountName"
              required
            />
          </div>
          <div className="AccountEmail CreateAccountInput">
            <label htmlFor="AccountEmail">Email</label>
            <input
              type="text"
              className="form-control"
              id="AccountEmail"
              required
            />
          </div>
          <div className="AccountPassword CreateAccountInput">
            <label htmlFor="AccountPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="AccountPassword"
              required
            />
          </div>
          <div className="AccountVerifyPassword CreateAccountInput">
            <label htmlFor="AccountVerifyPassword">VerifyPassword</label>
            <input
              type="password"
              className="form-control"
              id="AccountVerifyPassword"
              required
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateAccount;
