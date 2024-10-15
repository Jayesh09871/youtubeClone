import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css'; 
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import SignInForm from './SignInForm';
import GoogleIcon from '@mui/icons-material/Google';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function Navbar() {
  const [isSignInVisible, setSignInVisible] = useState(false);
  const [user, setUser] = useState(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Array of profile picture URLs
  const profilePictures = [
    "https://th.bing.com/th/id/OIG.sP33ruYZogPwwN5z9CNL?pid=ImgDetMain",
    "https://th.bing.com/th/id/OIG.XIjFJW_po01FoxiWXvtv?pid=ImgDetMain",
    "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/659cd0b3-f522-4e7b-b545-ce02282287ae/9766483f-1925-4cbb-a836-1d706cd0ac69.png",
    "https://ucdn.simplified.com/usetldr/7860085/u/8087893/nCMkwGH29j6W/DI_out-0.png",
    "https://cdn.wallartmagic.com/cdn-cgi/imagedelivery/NUxCykvUpZt0_QpNFJWT3w/wallartmagic.com/2024/02/ai_images_gen_1707036180.png/w=800,h=800,fit=crop"
  ];

  useEffect(() => {
    // Check if user data exists in localStorage
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUser(JSON.parse(storedUserData));
    }
  }, []);

  const toggleSignIn = () => {
    setSignInVisible(!isSignInVisible);
  };

  const handleAccountCreated = () => {
    // Fetch user data from localStorage after account creation
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      
      // Randomly select a profile picture from the array
      const randomProfilePicture = profilePictures[Math.floor(Math.random() * profilePictures.length)];
      parsedUserData.profilePicture = randomProfilePicture; // Assign a random profile picture
      setUser(parsedUserData);
      localStorage.setItem('userData', JSON.stringify(parsedUserData)); // Update localStorage with new profile pic
      setSignInVisible(false); // Close the sign-in form
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userData');
    setUser(null); // Reset user state to null
    setDropdownVisible(false); // Close the dropdown when logged out
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className={styles.topBar}>
      <div className={styles.second}>
        <div className={styles.second2}>
          <input type="text" placeholder='Search' className={styles.search} />
        </div>
        <button className={styles.button}><SearchIcon className={styles.SearchIcon} /></button>
        <MicIcon className={styles.mic} />
      </div>
      <div className={styles.third}>
        <VideoCallIcon className={styles.video} />
        {user && <NotificationsIcon className={styles.notifications} />} {/* Conditionally render bell icon */}
        {user ? (
          <div className={styles.profile} onClick={toggleDropdown}>
            {/* Display user's profile picture */}
            <img
              src={user.profilePicture} // Use user's profile picture
              alt="Profile"
              className={styles.profileImage}
            />
            {isDropdownVisible && (
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownHeader}>
                  <img
                    src={user.profilePicture} // Use user's profile picture
                    alt="Profile"
                    className={styles.dropdownProfileImage}
                  />
                  <div>
                    <div className={styles.userName}>{user.name}</div>
                    <div className={styles.userEmail}>{user.email}</div>
                  </div>
                </div>
                <hr className={styles.divider} />
                <div className={styles.dropdownOption}>
  <GoogleIcon className={styles.toggleicon} />
  <span>Google Account</span>
</div>
<div className={styles.dropdownOption} onClick={toggleSignIn}>
  <SwitchAccountIcon className={styles.toggleicon} />
  <span>Switch Accounts</span>
</div>
<div className={styles.dropdownOption} onClick={handleLogout}>
  <ExitToAppIcon className={styles.toggleicon} />
  <span>Sign Out</span>
</div>

              </div>
            )}
          </div>
        ) : (
          <button className={styles.signinbtn} onClick={toggleSignIn}>
            <PermIdentityRoundedIcon className={styles.signinbtnicon} /> Sign In
          </button>
        )}
      </div>
      {isSignInVisible && <SignInForm onClose={toggleSignIn} onAccountCreated={handleAccountCreated} />}
    </div>
  );
}