'use client';

import React, { useState } from 'react';
import styles from './RenderControls.module.css';

const RenderControls = () => {
  const [rendering, setRendering] = useState(false);
  const [rendered, setRendered] = useState(false);

  const handleRender = () => {
    setRendering(true);
    setTimeout(() => {
      setRendering(false);
      setRendered(true);
    }, 3000);
  };

  return (
    <div className={styles.renderContainer}>
      <h3>Render & Export</h3>
      <button onClick={handleRender} disabled={rendering} className={styles.renderButton}>
        {rendering ? 'Rendering...' : 'Render Video'}
      </button>

      {rendered && (
        <a href="#" download className={styles.downloadLink}>
          📥 Download Exported Video
        </a>
      )}
    </div>
  );
};

export default RenderControls;
