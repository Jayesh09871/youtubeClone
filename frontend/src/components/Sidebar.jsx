import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import logo from "../../src/assets/logo.png";

export default function Sidebar({ onShortsClick }) { 
  const sidebarItems = [
    { id: 1, icon: <HomeIcon /> },
    {
      id: 2,
      icon: (
        <img
          src="https://img.icons8.com/?size=100&id=5nyR2QmLDXKY&format=png&color=000000"
          alt="YouTube Shorts"
          className={styles.youtubeIcon}
          onClick={onShortsClick} 
        />
      ),
    },
    { id: 3, icon: <SubscriptionsIcon /> },
    { id: 4, icon: <VideoLibraryIcon /> },
    { id: 5, icon: <AccessTimeIcon /> },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.first}>
        <MenuIcon className={styles.icon} />
        <img src={logo} alt="Logo" className={styles.logo} />
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
