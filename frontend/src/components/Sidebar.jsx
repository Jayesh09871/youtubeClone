import React from 'react';
import styles from './Sidebar.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import logo from "../../public/logo.png"; 

export default function Sidebar() {
  const sidebarItems = [
    { id: 1, icon: <HomeIcon /> },
    { id: 2, icon: <WhatshotIcon /> },
    { id: 3, icon: <SubscriptionsIcon /> },
    { id: 4, icon: <VideoLibraryIcon /> },
    { id: 5, icon: <AccessTimeIcon /> },
    { id: 6, icon: <ThumbUpIcon /> },
  ];

  return (
    <div className={styles.sidebar}>
       <div className={styles.first}>
        <MenuIcon className={styles.icon}/>
        <img src={logo} alt="" className={styles.logo} />
      </div>
      <div className={styles.sidebarItems}>
        {sidebarItems.map((item) => (
          <div key={item.id} className={styles.sidebarItem}>
            <div className={styles.sidebarIcon}>{item.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
