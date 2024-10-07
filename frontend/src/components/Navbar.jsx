import React from 'react';
import styles from './Navbar.module.css'; 
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import profile from "../../public/profile.png"
import { Avatar } from '@mui/material';
export default function Navbar() {
  return (
    <div className={styles.topBar}>
     
      <div className={styles.second}>
        <div className={styles.second2}><input type="text" placeholder='Search' className={styles.search}/></div>
        <button className={styles.button}><SearchIcon className={styles.SearchIcon}/></button>
        <MicIcon className={styles.mic}/>
      </div>
      <div className={styles.third}>
        <VideoCallIcon className={styles.video}/>
        <NotificationsNoneIcon className={styles.Notification}/>
         <Avatar src={profile} alt="" className={styles.avatar}/>
      </div>
    </div>
  );
}
