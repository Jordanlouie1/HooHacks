import React from "react";

const SignIn = () => {
    return (
        <div>
        <div className='sample-css'></div>
<ul> 
  <li> 
        <div className='signinbox'>
            <div className='signin'>
        <input class = "inputBox"  type="text" id="name" name="name" size="30" placeholder="Username" /> 
        <input  class = "inputBox" type="password" id="password" name="password"  size="30" placeholder="Password"/>
        <button>Continue</button>
          </div>
        </div></li>

  
</ul> 
</div> 
    );
};

export default SignIn;