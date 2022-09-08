import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
    const {singInGoogleAuth} = useFirebase()
  return (
    <div>
      <h4> Login Form </h4>
      <div style={{margin:10}}>
        <button onClick={singInGoogleAuth}>Google Sign In</button>
      </div>
      <form action="">
        <input style={{padding:5,margin:7}} type="email" placeholder="Enter Your Email" />
        <br />
        <input style={{padding:5,margin:7}} type="password" placeholder="Enter Your Password" />
        <br />
        <button style={{padding:5}}> Login </button>{" "}
      </form>{" "}
    </div>
  );
};

export default Login;
