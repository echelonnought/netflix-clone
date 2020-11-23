import React from 'react';
import { render } from '@testing-library/react';
import { SigninForm } from '../../components';

jest.mock('react-router-dom');

describe('<SigninForm />', () => {
    it('renders the <SigninForm /> with populated data', () => {
       const { container, getByText, getByPlaceholderText } = render (
        <SigninForm >
        <SigninForm.Title>Sign In Now</SigninForm.Title>
        <SigninForm.Base >
              <SigninForm.Input 
              type="email" 
              placeholder="Email address" 
              onChange={() => {}}/>

              <SigninForm.Input 
              type="password" 
              placeholder="Password" 
              required 
              onChange={() => {}}/>
              
              <SigninForm.Submit disabled type="submit">
                  Sign In
              </SigninForm.Submit>
        </SigninForm.Base>
        <SigninForm.Text>
            New to Netflix? <SigninForm.Link to="/signup">Sign up now</SigninForm.Link>
        </SigninForm.Text>
        <SigninForm.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more</SigninForm.TextSmall>
      </SigninForm >
       )
    expect(getByText("This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more")).toBeTruthy();
    expect(getByText("Sign In Now")).toBeTruthy();
    expect(getByText("Sign In")).toBeTruthy();
    expect(getByText("Sign In").disabled).toBeTruthy();
    expect(getByPlaceholderText('Email address')).toBeTruthy();
    expect(getByPlaceholderText("Password")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
    });

    it('renders the <SigninForm /> with an error', () => {
        const { container, getByText, queryByText } = render(
            <SigninForm>
                <SigninForm.Error>Your email address is already being used</SigninForm.Error>
                <SigninForm.Submit type="submit">Sign In</SigninForm.Submit>
            </SigninForm>
        )
        expect(getByText('Your email address is already being used')).toBeTruthy();
        expect(queryByText('Sign In').disabled).toBeFalsy();
        expect(container.firstChild).toMatchSnapshot();
    })
    
});
