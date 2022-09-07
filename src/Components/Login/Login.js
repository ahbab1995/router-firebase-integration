import React from 'react';

const Login = () => {
    return (
        <div>
            <h4>Login Form</h4>
            <form action="">
                    <input 
                    type="email"
                    placeholder='Enter Your Email'
                     />
                      <input 
                    type="password"
                    placeholder='Enter Your Password'
                     />
                     <br />
                     <button>Login</button>
                </form>
        </div>
    );
};

export default Login;