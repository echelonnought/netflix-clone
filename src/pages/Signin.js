import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { SigninForm } from "../components";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../components/constants/routes";

function Signin({ children, ...restProps }) {
	const history = useHistory();
	const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === '' || emailAddress === '';
  const handleSignin = (event) => {
			event.preventDefault();
			
			firebase
			.auth()
			.signInWithEmailAndPassword(emailAddress, password)
			.then(() => {
				history.push(ROUTES.BROWSE);
			})
			.catch((error) => {
				setEmailAddress('');
				setPassword('');
				setError(error.message);
			})
  }
  return (
    <>
      <HeaderContainer>
        <SigninForm >
          <SigninForm.Title>Sign In</SigninForm.Title>
          {error && <SigninForm.Error data-testid="error">{error}</SigninForm.Error>}
          <SigninForm.Base onSubmit={handleSignin} form="POST">
                <SigninForm.Input 
                type="email" 
                placeholder="Email address" 
                value={emailAddress} 
                onChange={({ target }) => setEmailAddress(target.value)}/>

                <SigninForm.Input 
                type="password" 
                placeholder="Password" 
                required 
                autoComplete="off" 
                value={password} onChange={({ target }) => setPassword(target.value)}/>
                
                <SigninForm.Submit data-testid="sign-in" disabled={isInvalid} type="submit">
                    Sign In
                </SigninForm.Submit>
          </SigninForm.Base>
          <SigninForm.Text>
              New to Netflix? <SigninForm.Link to="/signup">Sign up now</SigninForm.Link>
          </SigninForm.Text>
          <SigninForm.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more</SigninForm.TextSmall>
        </SigninForm >
      </HeaderContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}

export default Signin;
