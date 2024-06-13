import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate()
  const userDetails = useSelector(store => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });
  }
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
      <img className='w-44' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt='logo' />
      {
        userDetails && (<div className='flex p-2'>
                  <img className='w-8 h-8' src={userDetails?.photoURL} alt="user-icon"/>
                  <button className='font-bold text-white cursor-pointer' onClick={() => handleSignOut()}>(Sign Out)</button>
                </div>)
      }
      
    </div>
  )
}

export default Header