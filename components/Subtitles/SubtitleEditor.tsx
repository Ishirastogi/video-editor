'use client';

import React, { useState } from 'react';
import styles from './SubtitleEditor.module.css';

const SubtitleEditor = () => {
  const [subtitles, setSubtitles] = useState<string[]>([]);
  const [subtitleText, setSubtitleText] = useState('');

  const addSubtitle = () => {
    if (subtitleText.trim() !== '') {
      setSubtitles([...subtitles, subtitleText]);
      setSubtitleText('');
    }
  };

  return (
    <div className={styles.subtitleContainer}>
      <h3>Subtitles</h3>
      <input
        type="text"
        value={subtitleText}
        onChange={(e) => setSubtitleText(e.target.value)}
        placeholder="Enter subtitle text"
        className={styles.subtitleInput}
      />
      <button onClick={addSubtitle} className={styles.addButton}>
        ➕ Add Subtitle
      </button>
      <div className={styles.subtitleList}>
        {subtitles.map((text, idx) => (
          <div key={idx} className={styles.subtitleItem}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubtitleEditor;
