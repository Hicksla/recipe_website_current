import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Form";
import Row from "react-bootstrap/Form";
import Group from "react-bootstrap/Form";
import Label from "react-bootstrap/Form";
import Control from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  Auth,
  signInWithCustomToken
} from "firebase/auth";
import { MdAccountCircle } from "react-icons/md";
import { FirebaseApp, initializeApp } from "firebase/app";
//import firebase from "firebase/app";
//import "firebase/auth";

class Header extends React.Component<
  {
    app: FirebaseApp;
    email: string;
  },
  {
    loggedIn: boolean;
    uid: string;
    auth: Auth;
    loginEmail: string;
    loginPassword: string;
  }
> {
  constructor(props: any) {
    super(props);
    const authProp = getAuth(this.props.app);
    console.log("this.props.app:" + this.props.app.name.toString);
    console.log("Current user email: " + authProp.currentUser?.email);
    if (authProp.currentUser !== null) {
      this.state = {
        loggedIn: true,
        uid: "",
        auth: authProp,
        loginEmail: authProp.currentUser.email,
        loginPassword: ""
      };
    } else {
      this.state = {
        loggedIn: false,
        uid: "",
        auth: getAuth(this.props.app),
        loginEmail: "",
        loginPassword: ""
      };
    }
  }

  logOut() {
    const auth = getAuth();
    signOut(auth);
    this.setState({
      loggedIn: false,
      loginEmail: "",
      loginPassword: ""
    });
  }

  updateEmail(emailString: string) {
    this.setState({
      loginEmail: emailString
    });
  }

  updatePassword(passwordString: string) {
    this.setState({
      loginPassword: passwordString
    });
  }

  logIn(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        //        setLoggedIn(true);

        console.log("Login user: " + user);
        this.setState({
          loggedIn: true,
          uid: this.state.uid,
          auth: this.state.auth,
          loginEmail: this.state.loginEmail,
          loginPassword: this.state.loginPassword
        });
        sessionStorage.setItem("Auth Token", await user.getIdToken());
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error code: " + errorCode + " - Message:" + errorMessage);
      });
  }

  componentDidMount() {
    console.log("Logged In: " + this.state.loggedIn);
    const auth = getAuth();
    if (auth.currentUser !== null) {
      console.log("current User is NOT null");
      this.setState({
        loggedIn: true,
        uid: this.state.uid,
        auth: this.state.auth,
        loginEmail: this.state.loginEmail,
        loginPassword: this.state.loginPassword
      });
      return;
    } else {
      console.log("current User is null");
    }
    const token = sessionStorage.getItem("Auth Token");
    console.log("token: " + token);
    if (token !== null) {
      signInWithCustomToken(auth, token)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          this.setState({
            loggedIn: true,
            uid: this.state.uid,
            auth: this.state.auth,
            loginEmail: this.state.loginEmail,
            loginPassword: this.state.loginPassword
          });
          console.log("ComponentDidMount - Logged in: " + this.state.loggedIn);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(
            "Error code: " + errorCode + " - Message:" + errorMessage
          );
          // ...
        });
    } else {
      console.log("ComponentDidMount - token was null");
    }
  }

  render() {
    return (
      <div className="Header">
        <h2>
          <div className="headerMain">
            <div className="headerText">Cookbook Recipes</div>
            {!this.state.loggedIn && (
              <div className="login">
                <span>Login</span>
                <div className="dropdown-menu">
                  <Container style={{ maxWidth: "500px" }} fluid>
                    <Form className="mt-4">
                      <Group className="loginEmail">
                        <Label>Email</Label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="email"
                          onChange={(e) => this.updateEmail(e.target.value)}
                        />
                      </Group>
                      <Group className="loginPassword">
                        <Label>Password</Label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="password"
                          onChange={(e) => this.updatePassword(e.target.value)}
                        />
                      </Group>
                      <Row>
                        <Col xs={6}>
                          <Button
                            type="button"
                            onClick={() =>
                              this.logIn(
                                this.state.loginEmail,
                                this.state.loginPassword
                              )
                            }
                          >
                            Sign In
                          </Button>
                        </Col>
                        <small>Not have an account?</small>
                        <Col xs={6}>
                          <Button
                            type="button"
                            variant="secondary"
                            href="/account/create"
                          >
                            Sign Up
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </Container>
                </div>
              </div>
            )}
            {this.state.loggedIn && (
              <a href="/account">
                <div className="login">
                  <MdAccountCircle className="HeaderAccountPhoto" />
                  <span className="AccountHeaderText">Account</span>
                  <div className="dropdown-menu logged-in">
                    <Button
                      type="submit"
                      className="btn btn-primary"
                      variant="light"
                      id="profile"
                      href="/profile"
                    >
                      Profile
                    </Button>
                    <Button
                      type="submit"
                      className="btn btn-primary"
                      variant="light"
                      id="logOut"
                      onClick={() => this.logOut()}
                    >
                      Log out
                    </Button>
                  </div>
                </div>
              </a>
            )}
          </div>
        </h2>

        <Navbar bg="secondary" expand="lg" className="navBarPos">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavDropdown
                  title="Recipes by Category"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="/recipes/entrees">
                    Entrees
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/recipes/sides">
                    Sides
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/recipes/deserts">
                    Deserts
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/recipes/create">Create a recipe</Nav.Link>
                <Nav.Link href="/plan">Meal Planner</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
