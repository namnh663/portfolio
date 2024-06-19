import React, { useEffect, useState } from 'react';
import './Notification.css';

const Notification = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`notification ${!visible ? 'hidden' : ''}`}>
      <p>The website is in the process of upgrading and migrating data from the old version so there may be a lot of posts missing.</p>
    </div>
  );
};

export default Notification;
