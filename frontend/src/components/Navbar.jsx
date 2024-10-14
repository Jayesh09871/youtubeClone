import React, { useState } from 'react';
import styles from './Navbar.module.css'; 
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import SignInForm from './SignInForm';

export default function Navbar() {
  const [isSignInVisible, setSignInVisible] = useState(false);
  
  const toggleSignIn = () => {
    setSignInVisible(!isSignInVisible);
  };

  return (
    <div className={`${styles.topBar} ${isSignInVisible ? styles.darkBackground : ''}`}>
      <div className={styles.second}>
        <div className={styles.second2}>
          <input type="text" placeholder='Search' className={styles.search}/>.  
         </div>
        <button className={styles.button}><SearchIcon className={styles.SearchIcon}/></button>
        <MicIcon className={styles.mic}/>
      </div>
      <div className={styles.third}>
        <VideoCallIcon className={styles.video}/>
        <button className={styles.signinbtn} onClick={toggleSignIn}>
          <PermIdentityRoundedIcon className={styles.signinbtnicon}/>Sign In
        </button>
      </div>
      {isSignInVisible && <SignInForm onClose={toggleSignIn} />}
    </div>
  );
}
