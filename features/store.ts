import { configureStore } from '@reduxjs/toolkit';
import videoReducer from '@/features/video/videoSlice';
import audioReducer from '@/features/audio/audioSlice';
import subtitleReducer from '@/features/subtitle/subtitleSlice';
import overlayReducer from '@/features/overlay/overlaySlice';
import previewReducer from '@/features/preview/previewSlice';

export const store = configureStore({
  reducer: {
    video: videoReducer,
    audio: audioReducer,
    subtitle: subtitleReducer,
    overlay: overlayReducer,
    preview: previewReducer,
  },
});

// Infer types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
