import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { SigninForm } from "../components";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../components/constants/routes";

function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = firstName === "" || password === "" || emailAddress === "";

  const handleSignup = (event) => {
    event.preventDefault();

    firebase
    .auth()
    .createUserWithEmailAndPassword(emailAddress, password)
    .then((result) => {
        result.user
        .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
        })
        .then(() => 
            history.push(ROUTES.BROWSE)
        )
    })
    .catch((error)  => {
        setFirstName('');
        setEmailAddress('');
        setPassword('')
        setError(error.message);
    })
  };
  return (
    <>
      <HeaderContainer>
        <SigninForm>
          <SigninForm.Title>Sign Up</SigninForm.Title> 
          {error && <SigninForm.Error data-testid="error">{error}</SigninForm.Error>}
          <SigninForm.Base onSubmit={handleSignup} form="POST">
          <SigninForm.Input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <SigninForm.Input
              type="email"
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />

            <SigninForm.Input
              type="password"
              placeholder="Password"
              required
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />

            <SigninForm.Submit data-testid="sign-up" disabled={isInvalid} type="submit">
              Sign Up
            </SigninForm.Submit>
          </SigninForm.Base>
          <SigninForm.Text>
            Already a user?{" "}
            <SigninForm.Link to="/signin">Sign in now</SigninForm.Link>
          </SigninForm.Text>
          <SigninForm.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more
          </SigninForm.TextSmall>
        </SigninForm>
      </HeaderContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}

export default Signup;
