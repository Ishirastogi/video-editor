'use client';

import React, { useState } from 'react';
import styles from './AudioManager.module.css';

const AudioManager = () => {
  const [muted, setMuted] = useState(false);

  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <div className={styles.audioContainer}>
      <h3>Audio Manager</h3>
      <img src="/audio-waveform.png" alt="Audio Waveform" className={styles.waveform} />
      <button onClick={toggleMute} className={styles.muteButton}>
        {muted ? '🔇 Muted' : '🔊 Mute'}
      </button>
      <input type="file" accept="audio/*" className={styles.uploadMusic} />
    </div>
  );
};

export default AudioManager;
