import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/store/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const userDetails = useSelector(store => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // navigate('/')
    }).catch((error) => {
      navigate('/error')
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          }));
          navigate("/browse")
        } else {
          dispatch(removeUser());
          navigate("/")
        }
    });
    // UnSubscribe when component unmounts
    return () => unsubscribe();
}, [])

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
      <img className='w-44' src={LOGO} alt='logo' />
      {
        userDetails && (<div className='flex p-2'>
                <div className='flex'><p className='text-white'>{userDetails?.displayName}</p>
                  <img className='w-8 h-8 p-2' src={userDetails?.photoURL} alt="user-icon"/>
                  </div>
                  
                  <button className='font-bold text-black cursor-pointer bg-gray-50 p-2' onClick={() => handleSignOut()}>Sign Out</button>
                </div>)
      }
      
    </div>
  )
}

export default Header