import React, { useState } from 'react';
import styles from './SignInForm.module.css';

export default function SignInForm({ onClose, onAccountCreated }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (formData.name && formData.email && formData.password) {
      // Save user data
      localStorage.setItem('userData', JSON.stringify(formData));
      setErrorMessage(''); // Clear any existing error message
      onAccountCreated(); // Notify parent component (Navbar) to update UI
    } else {
      setErrorMessage('Please fill in all fields.'); // Show error message
    }
  };

  return (
    <div className={styles.signInFormOverlay}>
      <div className={styles.signInForm}>
        <button className={styles.closeButton} onClick={onClose}>x</button>
        <h1 className={styles.h1}>Create Your Account</h1>
        <h5 className={styles.h6}>Unlock Your World of Entertainment, Join the YouTube Community</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text" 
            name="name" 
            placeholder="Name" 
            required 
            className={styles.nameInput} 
            value={formData.name}
            onChange={handleChange}
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email Address" 
            required 
            className={styles.emailInput} 
            value={formData.email}
            onChange={handleChange}
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            required 
            className={styles.passwordInput}
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit" className={styles.createAccountButton}>Create Your Account</button>
        </form>

        {/* Display error message if there's an issue with form submission */}
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

        <div className={styles.div1}>
          <div className={styles.div2}>Already have an account?</div>
          <div className={styles.div3}>Sign In</div>
        </div>
      </div>
    </div>
  );
}
