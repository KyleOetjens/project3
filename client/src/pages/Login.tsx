import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {
  //blanks out the login form on page load
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN);

    //updates the form state as data is entered
    const handleChange = (event: any) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    //tests the form state against Auth middleware
    const handleFormSubmit = async (event: any) => {
      event.preventDefault();
      console.log(formState);
      try {
        const { data } = await login({
          variables: { ...formState },
        });
  
        Auth.login(data.login.token, data.login.user.userName);
      } catch (e) {
        console.error(e);
      }
  
      setFormState({
        email: '',
        password: '',
      });
    };
  
    return (
      <main className="row justify-content-center align-items-center mb-4 login-cont">
          <div className="card col-4 login-card">
            <h4 className="card-header text-center mb-4 login-header">Login</h4>
            <div className="justify-content-center">
                {data ? (
                            <p>
                                Success!
                                <Link to="/profile">Your Profile</Link>
                            </p>
                        ) : (
                <form onSubmit={handleFormSubmit}>
                  <input
                    className="form-input col-12 p-2 mb-4 login-input"
                    placeholder="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input col-12 p-2 mb-4 login-input"
                    placeholder="password"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <div className='button-cont'>
                  <button
                    className="p-2 login-button button"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                  >
                    Submit
                  </button>
                  </div>
                </form>
    )}
              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
            </div>
          </div>
      </main>
    )};
  
  export default Login;
  