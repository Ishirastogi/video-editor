import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Subtitle {
  id: string;
  startTime: number;
  endTime: number;
  text: string;
}

interface SubtitleState {
  subtitles: Subtitle[];
}

const initialState: SubtitleState = {
  subtitles: [],
};

const subtitleSlice = createSlice({
  name: 'subtitle',
  initialState,
  reducers: {
    addSubtitle: (state, action: PayloadAction<Subtitle>) => {
      state.subtitles.push(action.payload);
    },
    removeSubtitle: (state, action: PayloadAction<string>) => {
      state.subtitles = state.subtitles.filter(sub => sub.id !== action.payload);
    },
    updateSubtitle: (state, action: PayloadAction<Subtitle>) => {
      const index = state.subtitles.findIndex(sub => sub.id === action.payload.id);
      if (index !== -1) {
        state.subtitles[index] = action.payload;
      }
    },
    clearSubtitles: (state) => {
      state.subtitles = [];
    },
  },
});

export const { addSubtitle, removeSubtitle, updateSubtitle, clearSubtitles } = subtitleSlice.actions;
export default subtitleSlice.reducer;
