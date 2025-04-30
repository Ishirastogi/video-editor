import { useState } from "react";

interface AudioSegment {
  id: string;
  title: string;
  timeStart: number;
  timeEnd: number;
}

export default function AudioManagement() {
  const [audioSegments, setAudioSegments] = useState<AudioSegment[]>([
    { id: "bg-music", title: "Background Music", timeStart: 0, timeEnd: 30 },
    { id: "voiceover", title: "Voice Over", timeStart: 30, timeEnd: 60 },
  ]);

  // Explicitly define the types for index and newTimeStart
  const moveSegment = (index: number, newTimeStart: number) => {
    const updatedSegments = [...audioSegments];
    updatedSegments[index].timeStart = newTimeStart;
    setAudioSegments(updatedSegments);
  };

  return (
    <div className="audio-management">
      {audioSegments.map((segment, index) => (
        <div key={segment.id} className="audio-segment">
          <p>{segment.title}</p>
          <div className="time-range">
            <span>{segment.timeStart}s</span>
            <input
              type="range"
              min="0"
              max="100"
              value={segment.timeStart}
              onChange={(e) => moveSegment(index, Number(e.target.value))}
            />
            <span>{segment.timeEnd}s</span>
          </div>
        </div>
      ))}
    </div>
  );
}
