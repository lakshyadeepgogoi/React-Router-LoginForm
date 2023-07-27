import React from 'react';
import signupImg from "../assets/signup.png"
import Template from '../components/Template';
import loginImg from "../assets/login.png"; 

function Signup({setIsLoggedIn}) {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build  skills for today, tomorrow and beyond."
      desc2="Education to future-proof your career."
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    
    
    
    
    />
  )
}

export default Signup