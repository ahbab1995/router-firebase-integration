import React from 'react';

const Register = () => {
    return (
        <div>
            <h4>Register Form</h4>
            <div>
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
                     <button>Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;