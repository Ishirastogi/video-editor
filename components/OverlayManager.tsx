"use client";

import { useState } from "react";
import { Rnd } from "react-rnd";

export default function OverlayManager() {
  const [image, setImage] = useState<string | null>(null);
  const [showImageOverlay, setShowImageOverlay] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [border, setBorder] = useState("none");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setShowImageOverlay(true);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
      <h2 className="text-xl font-bold mb-4">Overlays</h2>

      <div className="space-y-4 mb-4">
        <button className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded font-semibold">
          Add Text Overlay
        </button>

        <label className="w-full bg-pink-600 hover:bg-pink-700 p-2 rounded font-semibold text-center cursor-pointer block">
          Add Image Overlay
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
      </div>

      {showImageOverlay && image && (
        <div className="mb-4 space-y-2">
          <div className="flex flex-col gap-2">
            <label>
              Opacity:
              <input
                type="range"
                min="0.1"
                max="1"
                step="0.1"
                value={opacity}
                onChange={(e) => setOpacity(Number(e.target.value))}
                className="w-full"
              />
            </label>

            <label>
              Border Style:
              <select
                value={border}
                onChange={(e) => setBorder(e.target.value)}
                className="w-full bg-gray-700 p-2 rounded"
              >
                <option value="none">None</option>
                <option value="solid">Solid</option>
                <option value="dashed">Dashed</option>
                <option value="dotted">Dotted</option>
              </select>
            </label>
          </div>

          <div className="relative h-[300px] w-full border border-white rounded">
            <Rnd
              default={{
                x: 50,
                y: 50,
                width: 150,
                height: 150,
              }}
              bounds="parent"
            >
              <img
                src={image}
                alt="Overlay"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  opacity,
                  border: `2px ${border} white`,
                }}
              />
            </Rnd>
          </div>
        </div>
      )}
    </div>
  );
}
