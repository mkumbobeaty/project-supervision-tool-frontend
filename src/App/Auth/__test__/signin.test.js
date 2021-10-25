import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import SignIn from '../components/SignIn';
import { renderAuthConnected, fireEvent, screen, cleanup } from '../../../testUtils/auth'

let emailInput;
let passwordInput;
let signInButton;

describe("Signin form", () => {

  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });
  });

  const onFinish = jest.fn(() => Promise.resolve());

  beforeEach(() => {
    renderAuthConnected(<SignIn login={onFinish} />)
    emailInput = screen.getByTestId('email');
    passwordInput = screen.getByTestId('password');
    signInButton = screen.getByRole('button', {name: 'Log In'})
  })

  afterEach(() => {
    cleanup()
  })

  const loginUser = (email, password) => {
      fireEvent.change(emailInput, {target: { value : email}});
      fireEvent.change(passwordInput, { target: { value: password}});
  }
  
      it('should render the component title', () => {
          const titleEl = screen.getByText(/Projects Supervison tool/i)
        expect(titleEl).toBeInTheDocument();
      });

      it('should render the compoent sub-title', () => {
        const subTittleEl = screen.getByText(/Please Login to your account/i)
        expect(subTittleEl).toBeInTheDocument()
      });

      it('Should render Email element', () => {
          const emailEl = screen.getByPlaceholderText(/Email/);
          expect(emailEl).toBeInTheDocument()
      });


      it('Should render Password element', () => {
        const passwordEl = screen.getByPlaceholderText(/Password/);
        expect(passwordEl).toBeInTheDocument()
    });

    it('should be able to change when type input', () => {
      const emailInput = screen.getByPlaceholderText(/Email/);
      const passwordInput = screen.getByPlaceholderText(/Password/);
      loginUser('charsbeaty@gmail.com', 'password');
      expect(emailInput.value).toBe("charsbeaty@gmail.com");
      expect(passwordInput.value).toBe('password')
  });

  it('should submit the username and password', () => {
    
  }
  )



})