import React from 'react'
import frameImage from "../assets/frame.png";
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import {FcGoogle} from "react-icons/fc"

function Template({title,desc1, desc2, image, formtype, setIsLoggedIn}) {
    // console.log("form type");
    // console.log(formtype);
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] mx-auto py-12 flex-col-reverse gap-y-12 md:gap-y-0 md:gap-x-12 md:flex-row'>


        <div className='w-11/12 max-w-[450px] mx-auto md:mx-0'>
            <h1 
            className='text-richblack-5 font-semibold text-[1.875rem]  leading-[2.375rem]'
            >
                {title}
            </h1>

            <p
            className='text-[1.125rem] leading[1.625rem] mt-4'
            >
                <span className='text-richblack-100'>{desc1}</span>
                <br/>
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>

            {formtype === "signup" ?
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
            }

            <div className='flex flex-row w-full items-center my-4 gap-x-2'>
                <div className='h-[1px] bg-richblack-700 w-full '> </div> 
                <p
                className='text-richblack-700 font-medium  leading-[1.375rem]'
                >OR</p>
                <div className='w-full h-[1px] bg-richblack-700 '></div>          
            </div>

            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle/>
                <p>Sign up with Google</p>
            </button>

        </div>

        <div className='relative w-11/12 max-w-[450px] mx-auto md:mx-0 '>
            <img src={frameImage}
            alt='Pattern'
            
            loading='lazy'
            className='h-[22rem] w-[100%]'
            />


            <img src={image}
            alt='Students'
            width={558}
            height={508}
            loading='lazy'
            className='absolute -top-4 right-4 h-[22rem] '
            
            
            />
        </div>




    </div>
  )
}

export default Template