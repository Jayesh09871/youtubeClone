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
    profileImage: 'https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s800-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 2,
    title: 'Hanumankind - Big Dawgs',
    views: '142M views',
    channel: 'Hanumankind',
    uploaded: '1 week ago',
    thumbnail: 'https://img.youtube.com/vi/hOHKltAiKXQ/maxresdefault.jpg',
    profileImage: 'https://yt3.ggpht.com/_rO8IOjqWOx-nB8q3TX0Wag1McsdxxNgT2CF9m-oLU5U7H-p0QdEuPkDC37Hjldu7pjzd0X4Og=s800-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 3,
    title: 'Haye Mera DIL (Full Video)',
    views: '17M views',
    channel: 'Being Punjabi',
    uploaded: '6 months ago',
    thumbnail: 'https://img.youtube.com/vi/I2uPSqNqrqU/maxresdefault.jpg',
    profileImage: 'https://yt3.ggpht.com/wJE-L3qzUAxOzv1i_wV5stQEY7a97G8ddYBn1ffRlDcemZ4zn-WDW1RtoBOORJstlJHFu03S=s800-c-k-c0x00ffffff-no-rj', 
  },
  {
    id: 4,
    title: 'Jhoome Jo Pathaan Song | Shah Rukh Khan, Deepika',
    views: '1B views',
    channel: 'YRF',
    uploaded: '1 year ago',
    thumbnail: 'https://img.youtube.com/vi/YxWlaYCA8MU/maxresdefault.jpg',
    profileImage: 'https://yt3.ggpht.com/jr9v2DMoIyyvVjFFWKt5Q3ySvKhMo83owEQoAUsuxmPPkPaP3q_qoAaw06T65kd9pwjx36B3=s800-c-k-c0x00ffffff-no-rj', 
  },
  {
    id: 5,
    title: 'Angreji Beat - Gippy Grewal Feat. Honey Singh Full Song',
    views: '160M views',
    channel: 'Speed Punjabi',
    uploaded: '12 years ago',
    thumbnail: 'https://img.youtube.com/vi/Iu8210k9WQc/maxresdefault.jpg',
    profileImage: 'https://yt3.ggpht.com/0-xvYz1wLosJdIP_KyZX_PKNfisUpRXzx9OdhImH-I7RKGyEhK6nEzIHiCmGhhmWMIf_hZvj_Q=s800-c-k-c0x00ffffff-no-rj', 
  },
  {
    id: 6,
    title: 'Paisa | Official Music Video',
    views: '2.3M views',
    channel: 'BB Ki Vines Productions',
    uploaded: '3 days ago',
    thumbnail: 'https://img.youtube.com/vi/Tb3x5I0ulCg/maxresdefault.jpg',
    profileImage: 'https://yt3.ggpht.com/TIAkjYaTWw6bvfRLjF3Q05MdVelP-P8qvZRuytN2i3uZY2aCwM3Oy-ITmYGNi0SFbCJ8ZJqmpw=s800-c-k-c0x00ffffff-no-rj', 
  },
  {
    id: 7,
    title: 'Illuminati | Aavesham',
    views: '186M views',
    channel: 'Think Music India',
    uploaded: '6 months ago',
    thumbnail: 'https://img.youtube.com/vi/tOM-nWPcR4U/maxresdefault.jpg',
    profileImage: 'https://yt3.ggpht.com/dzgLCjRr-jI96sRdV8Ovl6F3LafGEh3a777hPBBwkN5VL2pixr98frJJwFL8fZQKBg289O574A=s800-c-k-c0x00ffffff-no-rj', 
  },
  {
    id: 8,
    title: 'Tauba Tauba | Bad Newz | Vicky Kaushal | Triptii Dimri | Karan Aujla',
    views: '301M views',
    channel: 'Saregama Music',
    uploaded: '3 months ago',
    thumbnail: 'https://img.youtube.com/vi/LK7-_dgAVQE/maxresdefault.jpg',
    profileImage: 'https://yt3.ggpht.com/dxED1O-r5cRS73JBlUk4VS3pZHDfiHcuRjRbFMcf6KgYhxP4NUlD7x0h4TR1XTXkl-JGjTPTYQ=s800-c-k-c0x00ffffff-no-rj', // Saregama profile
  },
];

export default function VideoList() {
  return (
    <div className={styles.videoList}>
      {videos.map((video) => (
        <div key={video.id} className={styles.videoCard}>
          <img src={video.thumbnail} alt={video.title} className={styles.thumbnail} />
          <div className={styles.videoDetails}>
            <div className={styles.profileTitle}>
              <img src={video.profileImage} alt={`${video.channel} profile`} className={styles.profileImage} />
              <h4 className={styles.title}>{video.title}</h4>
            </div>
            <p className={styles.channel}>{video.channel}</p>
            <p className={styles.info}>{`${video.views} • ${video.uploaded}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
