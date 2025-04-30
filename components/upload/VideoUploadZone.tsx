"use client";

import { useState, useEffect } from "react";

export default function VideoUploadZone() {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  }, 300);
  return () => clearInterval(interval);
}, []);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("video/")) {
      setVideoFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("video/")) {
      setVideoFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-8 text-center cursor-pointer">
      <div
        className="w-full h-48 flex items-center justify-center"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {previewUrl ? (
          <video
            src={previewUrl}
            controls
            className="w-full h-full object-contain"
          />
        ) : (
          <p className="text-gray-400">Drag and drop a video here or click to upload</p>
        )}
      </div>

      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        className="mt-4"
      />
    </div>
  );
}
