import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData, nameValidation } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/store/userSlice';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errMessage, setErrMessage] = useState(null)

  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
    setErrMessage("")
  }

  const handleSubmitClick = () => {
    let errMsg = ''
    if(!isSignInForm) {
      errMsg = nameValidation(name)
      if(errMsg) return setErrMessage(errMsg)
    }
    errMsg = checkValidData(email.current.value, password.current.value)
    if(errMsg) return setErrMessage(errMsg)
    
    if(!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        }).then(() => {
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          }));
        }).catch((error) => {
          setErrMessage(error.message)
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMessage(errorCode + "-" + errorMessage)
      });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage)
        });
    }
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/03bc4793-4207-4e21-aaec-671f5298b7cd/US-en-20240610-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt='bg-logo'/>
      </div>
      <form className='absolute p-12 bg-black w-4/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80' onSubmit={(e) => e.preventDefault()}>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {
          !isSignInForm ? <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/> : <></>
        }
        <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
        <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
        <p className='text-red-500 font-bold text-lg py-2'>{errMessage}</p>
        <button className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={() => handleSubmitClick()}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registerd, Login In Now"}</p>
      </form>
    </div>
  )
}

export default Login