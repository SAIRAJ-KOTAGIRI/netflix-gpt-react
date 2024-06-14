import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/store/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGPTSearchView } from '../utils/store/GPTSlice';
import { changeLanguage } from '../utils/store/configSlice';

const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const userDetails = useSelector(store => store.user)
  const showGPTSearch = useSelector(store => store.gpt.showGPTSearch)
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

  const handleGPTSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGPTSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e?.target?.value))
  }

  return (
    <div className='absolute px-6 py-2 bg-gradient-to-b from-black z-20 w-screen flex md:flex-row flex-col justify-between'>
      <img className='w-44 mx-auto md:mx-0' src={LOGO} alt='logo' />
      {
        userDetails && (<div className='flex p-2 justify-between'>
                {
                  showGPTSearch ? <select onChange={handleLanguageChange} className='p-2 bg-gray-900 text-white m-2'>
                  {
                    SUPPORTED_LANGUAGES.map((eachLanguage) => (
                      <option key={eachLanguage.identifier} value={eachLanguage.identifier}>{eachLanguage.name}</option>
                    ))
                  }
                  </select> : <></>
                }
                  <button className='py-2 mx-4 px-4 bg-purple-800 text-white rounded-lg' onClick={() => handleGPTSearchClick()}>{showGPTSearch ? "Home Page" : "GPT Search"}</button>
                
                  <img className='w-12 h-12 hidden md:block' src={userDetails?.photoURL} alt="user-icon"/>
                  <button className='py-2 m-2 rounded-lg font-bold text-black cursor-pointer bg-gray-50 p-2' onClick={() => handleSignOut()}>Sign Out</button>
                </div>)
      }
      
    </div>
  )
}

export default Header