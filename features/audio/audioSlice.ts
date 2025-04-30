import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AudioClip {
  id: string;
  startTime: number;
  endTime: number;
  src: string;
}

interface AudioState {
  clips: AudioClip[];
}

const initialState: AudioState = {
  clips: [],
};

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    addAudioClip: (state, action: PayloadAction<AudioClip>) => {
      state.clips.push(action.payload);
    },
    removeAudioClip: (state, action: PayloadAction<string>) => {
      state.clips = state.clips.filter(clip => clip.id !== action.payload);
    },
    updateAudioClip: (state, action: PayloadAction<AudioClip>) => {
      const index = state.clips.findIndex(clip => clip.id === action.payload.id);
      if (index !== -1) {
        state.clips[index] = action.payload;
      }
    },
    clearAudioClips: (state) => {
      state.clips = [];
    },
  },
});

export const { addAudioClip, removeAudioClip, updateAudioClip, clearAudioClips } = audioSlice.actions;
export default audioSlice.reducer;
