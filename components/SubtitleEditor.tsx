"use client";

export default function SubtitleEditor() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Subtitles</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Enter subtitle text"
          className="w-full p-2 bg-gray-700 rounded"
        />
        <button className="w-full bg-green-600 hover:bg-green-700 p-2 rounded font-semibold">
          Add Subtitle
        </button>
      </div>
    </div>
  );
}
