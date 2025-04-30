'use client';

import React, { useState } from 'react';
import styles from './TimelineEditor.module.css';

const TimelineEditor = () => {
  const [scenes, setScenes] = useState<string[]>(['Scene 1', 'Scene 2']);

  const addScene = () => {
    setScenes([...scenes, `Scene ${scenes.length + 1}`]);
  };

  const removeScene = (index: number) => {
    const newScenes = [...scenes];
    newScenes.splice(index, 1);
    setScenes(newScenes);
  };

  return (
    <div className={styles.timelineContainer}>
      <h3>Video Timeline</h3>
      <div className={styles.timeline}>
        {scenes.map((scene, idx) => (
          <div key={idx} className={styles.scene}>
            {scene}
            <button onClick={() => removeScene(idx)}>❌</button>
          </div>
        ))}
      </div>
      <button onClick={addScene} className={styles.addButton}>
        ➕ Add Scene
      </button>
    </div>
  );
};

export default TimelineEditor;
