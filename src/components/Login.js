import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData, nameValidation } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/store/userSlice';
import { BACKGROUND_IMAGE, AVATAR_IMAGE } from '../utils/constants';

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
          displayName: name.current.value, photoURL: AVATAR_IMAGE
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
        <img className='h-screen object-cover' src={BACKGROUND_IMAGE} alt='bg-logo'/>
      </div>
      <form className='absolute p-12 bg-black w-full md:w-4/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80' onSubmit={(e) => e.preventDefault()}>
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