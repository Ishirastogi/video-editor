"use client";

import { useAppSelector } from "@/features/hooks";
import ReactPlayer from "react-player";

export default function PreviewPlayer() {
  const video = useAppSelector((state) => state.video.videoUrl);

  if (!video) return null;

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-2">Preview</h2>
      <div className="aspect-video rounded-lg overflow-hidden shadow-md">
        <ReactPlayer url={video} controls width="100%" height="100%" />
      </div>
    </div>
  );
}
