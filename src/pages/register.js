// pages/register.js

import React from "react";
import SignIn from "./signin";

const Register = () => {
	return (
        <div>
        <div className='sample-css'></div>
<ul> 
  <li> 
        <div className='signinbox'>
            <div className='signin'>
        <input class = "inputBox" type="text" id="name" name="name" size="30" placeholder="Full Name" /> 
        <input class = "inputBox" type="text" id="password" name="password"  size="30" placeholder="Username"/>
		<input class = "inputBox" type="password" id="name" name="name" size="30" placeholder="Password" /> 
        <input class = "inputBox" type="password" id="password" name="password"  size="30" placeholder="Confirm password"/>

		<button>Create Account</button>
          </div>

		  
        </div></li>

</ul> 
</div> 
    );
};

export default Register;
