import React , { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const history = useHistory();

    const login = (event) => {
        event.preventDefault(); //this stops browser refress
        //do the login logic
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            //logged in redidrect to homepage
            history.push('/');
        })
        .catch((e) => alert(e.message))
    }
    const register = (event) => {
        event.preventDefault(); //this stops browser refress
        //do the register logic
        auth.createUserWithEmailAndPassword(email, password) 
        .then(auth => {
            //created user and logged in . redirect to the homepage
            history.push('/');
        })
        .catch(e => alert(e.message))
    }
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
      </Link>
      <div className='login__container'>
          <h1>sign in</h1>
          <form>
              <h5>Email</h5>
              <input value={email} onChange={e => setemail(e.target.value)} type='email' />
              <h5>Password</h5>
              <input value={password} onChange={e => setpassword(e.target.value)} type='password' />
              <button onClick={login} type='submit' className='login__signin__button'>sign in</button>
          </form>
          <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. </p>
          <button onClick={register} className='login__register__button'>create your amazon acount</button>
      </div>
    </div>
    
  );
};

export default Login;
