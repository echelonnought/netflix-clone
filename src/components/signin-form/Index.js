import React from 'react';
import { Container, Base, Error, Title, Text, TextSmall, Link, Input, Submit } from './styles/signin-form';

function SigninForm({ children, ...restProps}) {
    return (
        <Container { ...restProps }>
            {children}
        </Container>
    )
}

export default SigninForm;

SigninForm.Base = function SigninFormBase({ children, ...restProps }) {
    return (<Base { ...restProps }>{children}</Base>)
    }

SigninForm.Error = function SigninFormError({ children, ...restProps }) {
return (<Error { ...restProps }>{children}</Error>)
}

SigninForm.Title = function SigninFormTitle({ children, ...restProps }) {
    return (<Title { ...restProps }>{children}</Title>)
    }

SigninForm.Text = function SigninFormText({ children, ...restProps }) {
    return (<Text { ...restProps }>{children}</Text>)
    }

SigninForm.TextSmall = function SigninFormTextSmall({ children, ...restProps }) {
    return (<TextSmall { ...restProps }>{children}</TextSmall>)
    }

SigninForm.Link = function SigninFormLink({ children, ...restProps }) {
        return (<Link { ...restProps }>{children}</Link>)
        } 

SigninForm.Input = function SigninFormInput({ children, ...restProps }) {
    return (<Input { ...restProps }>{children}</Input>)
        }  
        
SigninForm.Submit = function SigninFormSubmit({ children, ...restProps }) {
    return (<Submit { ...restProps }>{children}</Submit>)
        }        