import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { Signup } from '../../pages';
import { FirebaseContext } from '../../context/firebase';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({}),
}));

const firebase = {
    auth: jest.fn(() => ({
        createUserWithEmailAndPassword: jest.fn(() => Promise.resolve({ user: {updateProfile: jest.fn(() => Promise.resolve('I am signed up'))}}))
    }))
}

describe('<Signup />', () => {
    it('renders the <Signup /> page with a form to submit ', () => {
        const { getByTestId, getByPlaceholderText, queryByTestId } = render (
            <Router>
                <FirebaseContext.Provider value={{firebase}}>
                    <Signup />
                </FirebaseContext.Provider>
            </Router>
        )

         act(async() => {
            await fireEvent.change(getByPlaceholderText('First name'), {
                target: { value: 'Ngole' }
            });
            await fireEvent.change(getByPlaceholderText('Email address'), {
                target: { value: 'ngole@gmail.com' }
            });
            await fireEvent.change(getByPlaceholderText('Password'), {
                target: { value: 'password' }
            });
            fireEvent.click(getByTestId('sign-up'))

            expect(getByPlaceholderText('First name').value).toBe('Ngole');
            expect(getByPlaceholderText('Email address').value).toBe('ngole@gmail.com');
            expect(getByPlaceholderText('Password').value).toBe('password');
            expect(queryByTestId('error')).toBeFalsy();
        })
    });
    
});
