"use client";

import UploadDialog from "@/components/UploadDialog";
import Timeline from "@/components/Timeline";
import PreviewPlayer from "@/components/PreviewPlayer";
import SubtitleEditor from "@/components/SubtitleEditor";
import OverlayManager from "@/components/OverlayManager";
import ExportModal from "@/components/ExportModal";
import VideoUploadZone from '@/components/upload/VideoUploadZone'; // your drag-drop upload
import AudioWaveform from '@/components/AudioWaveform';
import AudioManagement from '@/components/AudioManagement';
import AddBackgroundMusic from '@/components/AddBackgroundMusic';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-black p-8 text-white">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-5xl font-extrabold text-white">🎬 Video Editor Pro</h1>
        <UploadDialog />
      </header>

      {/* Video Upload Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Upload Your Video</h2>
        <VideoUploadZone />
      </section>

      {/* Audio Management and Waveform Section */}
      <div className="space-y-12 mb-12">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Audio Waveform (Static/Mock)</h2>
          <AudioWaveform />
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4">Audio Management (Rearrange & Mute)</h2>
          <AudioManagement />
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4">Add Background Music</h2>
          <AddBackgroundMusic />
        </div>
      </div>

      {/* Main Editing Area (Video Preview & Timeline) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-2 space-y-6">
          {/* Video Preview Player */}
          <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto">
  <PreviewPlayer />
</div>


          {/* Video Timeline */}
          <div className="bg-gray-700 p-6 rounded-lg">
            <Timeline />
          </div>
        </div>

        {/* Right Sidebar with Editors & Export Options */}
        <div className="space-y-6">
          <div className="bg-gray-700 p-6 rounded-lg">
            <SubtitleEditor />
          </div>
          <div className="bg-gray-700 p-6 rounded-lg">
            <OverlayManager />
          </div>
          <div className="bg-gray-700 p-6 rounded-lg">
            <ExportModal />
          </div>
        </div>
      </div>
    </div>
  );
}
