import { useState } from 'react';

export default function AddBackgroundMusic() {
  const [selectedMusic, setSelectedMusic] = useState("");

  // Correct event type for <select> element
  const handleMusicChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMusic(event.target.value);
  };

  return (
    <div className="add-music">
      <label htmlFor="bg-music">Select Background Music</label>
      <select
        id="bg-music"
        value={selectedMusic}
        onChange={handleMusicChange}  // Handles the change event for <select>
        className="bg-gray-700 text-white p-2 rounded-md"
      >
        <option value="">Select Music</option>
        <option value="track1">Track 1</option>
        <option value="track2">Track 2</option>
      </select>
    </div>
  );
}
