import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PreviewState {
  isPlaying: boolean;
  currentTime: number;
}

const initialState: PreviewState = {
  isPlaying: false,
  currentTime: 0,
};

const previewSlice = createSlice({
  name: 'preview',
  initialState,
  reducers: {
    playPreview: (state) => {
      state.isPlaying = true;
    },
    pausePreview: (state) => {
      state.isPlaying = false;
    },
    seekPreview: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
    resetPreview: (state) => {
      state.isPlaying = false;
      state.currentTime = 0;
    },
  },
});

export const { playPreview, pausePreview, seekPreview, resetPreview } = previewSlice.actions;
export default previewSlice.reducer;
