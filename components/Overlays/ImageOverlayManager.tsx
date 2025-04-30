'use client';

import React, { useState } from 'react';
import styles from './ImageOverlayManager.module.css';

const ImageOverlayManager = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className={styles.overlayContainer}>
      <h3>Image Overlay</h3>
      <input type="file" accept="image/*" onChange={handleImageUpload} className={styles.uploadInput} />
      {imageUrl && (
        <div className={styles.overlayPreview}>
          <img src={imageUrl} alt="Overlay" className={styles.imageOverlay} />
        </div>
      )}
    </div>
  );
};

export default ImageOverlayManager;
