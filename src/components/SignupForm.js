import React, { useState } from 'react';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function SignupForm({setIsLoggedIn}) {
    const navigate = useNavigate();


    const[formData, setFormData] = useState({
        firstname:"", 
        lastname:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const[showPassword, setShowPassword]= useState(false);
    const[confirmPassword, setConfirmPassword] = useState(false);

    function changeHandler(event){
        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("Password doesn;t match");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };
        console.log("Printing Account data");
        console.log(accountData);

        navigate("/dashboard"); 

    }


  return (
    <div>
        {/* student-Instructor tab */}
        <div>
            <button>
                Student
            </button>
            <button>Instructor</button>
        </div>


        <form onSubmit={submitHandler}>
            {/* first name and last name  */}
            <div>
                <label>
                    <p>
                        First Name<sup>*</sup>
                    </p>
                    <input
                    required
                    type='text'
                    name='firstname'
                    onChange={changeHandler}
                    placeholder='Enter First Name'
                    value={formData.firstname}
                    />
                </label>
                <label>
                    <p>
                        Last Name<sup>*</sup>
                    </p>
                    <input
                    required
                    type='text'
                    name='lastname'
                    onChange={changeHandler}
                    placeholder='Enter Last Name'
                    value={formData.lastname}
                    />
                </label>
            </div>
            {/* email address  */}
            <label>
                    <p>
                        Email Address<sup>*</sup>
                    </p>
                    <input
                    required
                    type='email'
                    name='email'
                    onChange={changeHandler}
                    placeholder='Enter Email'
                    value={formData.email}
                    />
            </label>

            {/* create password and confirm password  */}
            <div>
                <label>
                        <p>
                            Create Password<sup>*</sup>
                        </p>
                        <input
                        required
                        type={showPassword ? ("text") : ("password")}
                        name='password'
                        onChange={changeHandler}
                        placeholder='Enter Password'
                        value={formData.password}
                        />
                <span onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                </span>                        
                </label>


                <label>
                        <p>
                            Confirm Password<sup>*</sup>
                        </p>
                        <input
                        required
                        type={confirmPassword ? ("text") : ("password")}
                        name='confirmPassword'
                        onChange={changeHandler}
                        placeholder='Confirm Password'
                        value={formData.confirmPassword}
                        />
                <span onClick={() => setConfirmPassword((prev) => !prev)}>
                    {confirmPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                </span>                        
                </label>
            </div>
            <button>
                Create Account
            </button>



        </form>
    </div>
  )
}

export default SignupForm