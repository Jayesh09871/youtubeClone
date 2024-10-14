// VideoList.jsx
import React from 'react';
import styles from './VideoList.module.css';

const videos = [
  {
    id: 1,
    title: 'Bhool Bhulaiyaa Title Track',
    views: '76M views',
    channel: 'T-Series',
    uploaded: '13 years ago',
    thumbnail: 'https://img.youtube.com/vi/B9_nql5xBFo/maxresdefault.jpg',
  },
  {
    id: 2,
    title: 'Hanumankind - Big Dawgs ',
    views: '142M views',
    channel: 'Hanumankind',
    uploaded: '1 week ago',
    thumbnail: 'https://img.youtube.com/vi/hOHKltAiKXQ/maxresdefault.jpg',
  },
  {
    id: 3,
    title: 'Paisa | Official Music Video',
    views: '2.3M views',
    channel: 'BB Ki Vines Productions',
    uploaded: '3 days ago',
    thumbnail: 'https://img.youtube.com/vi/Tb3x5I0ulCg/maxresdefault.jpg',
  },
  {
    id: 4,
    title: 'Jhoome Jo Pathaan Song | Shah Rukh Khan, Deepika ',
    views: '1B views',
    channel: 'YRF',
    uploaded: '1 year ago',
    thumbnail: 'https://img.youtube.com/vi/YxWlaYCA8MU/maxresdefault.jpg',
  },
  {
    id: 5,
    title: 'Angreji Beat - Gippy Grewal Feat. Honey Singh Full Song',
    views: '160M views',
    channel: 'Speed Punjabi',
    uploaded: '12 years ago',
    thumbnail: 'https://img.youtube.com/vi/Iu8210k9WQc/maxresdefault.jpg',
  },
  {
    id: 6,
    title: 'Paisa | Official Music Video',
    views: '2.3M views',
    channel: 'BB Ki Vines Productions',
    uploaded: '3 days ago',
    thumbnail: 'https://img.youtube.com/vi/Tb3x5I0ulCg/maxresdefault.jpg',
  },
  {
    id: 3,
    title: 'Paisa | Official Music Video',
    views: '2.3M views',
    channel: 'BB Ki Vines Productions',
    uploaded: '3 days ago',
    thumbnail: 'https://img.youtube.com/vi/Tb3x5I0ulCg/maxresdefault.jpg',
  },
  {
    id: 3,
    title: 'Paisa | Official Music Video',
    views: '2.3M views',
    channel: 'BB Ki Vines Productions',
    uploaded: '3 days ago',
    thumbnail: 'https://img.youtube.com/vi/Tb3x5I0ulCg/maxresdefault.jpg',
  },
  // Add more video objects here
];

export default function VideoList() {
  return (
    <div className={styles.videoList}>
      {videos.map((video) => (
        <div key={video.id} className={styles.videoCard}>
          <img src={video.thumbnail} alt={video.title} className={styles.thumbnail} />
          <div className={styles.videoDetails}>
            <h4 className={styles.title}>{video.title}</h4>
            <p className={styles.channel}>{video.channel}</p>
            <p className={styles.info}>{`${video.views} • ${video.uploaded}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
