import React, { useState } from 'react';
import styles from './CategoryBar.module.css';

const categories = [
  'All', 
  'Artificial Intelligence', 
  'Comedy', 
  'Gaming', 
  'Vlog', 
  'Beauty', 
  'Travel', 
  'Food', 
  'Fashion'
];

export default function CategoryBar() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles.categoryBar}>
      {categories.map((category) => (
        <button 
          key={category} 
          className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
