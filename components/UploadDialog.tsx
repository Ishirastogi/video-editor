"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { useAppDispatch } from "@/features/hooks";
import { setVideo } from "@/features/video/videoSlice";

export default function UploadDialog() {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      dispatch(setVideo(videoURL));
      setOpen(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full font-bold">
        Upload Video
      </DialogTrigger>
      <DialogContent className="bg-gray-900 border-gray-700 text-white">
        <input
          type="file"
          accept="video/mp4,video/webm"
          onChange={handleUpload}
          className="block w-full p-2 bg-gray-800 rounded mt-4"
        />
      </DialogContent>
    </Dialog>
  );
}
