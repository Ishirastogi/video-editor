"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

export default function ExportModal() {
  const [open, setOpen] = useState(false);

  function handleExport() {
    setOpen(false);
    alert("🎉 Your video has been exported (mock)!");
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-full bg-yellow-600 hover:bg-yellow-700 p-2 rounded font-semibold mt-8">
        Export Video
      </DialogTrigger>
      <DialogContent className="bg-gray-900 border-gray-700 text-white">
        <h2 className="text-xl font-bold mb-4">Export Project</h2>
        <p>Simulating export process...</p>
        <button
          onClick={handleExport}
          className="w-full mt-6 bg-green-600 hover:bg-green-700 p-2 rounded font-bold"
        >
          Finish Export
        </button>
      </DialogContent>
    </Dialog>
  );
}
