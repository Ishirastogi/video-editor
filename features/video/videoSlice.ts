import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VideoState {
  videoUrl: string | null;
}

const initialState: VideoState = {
  videoUrl: null,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setVideo(state, action: PayloadAction<string>) {
      state.videoUrl = action.payload;
    },
  },
});

export const { setVideo } = videoSlice.actions;
export default videoSlice.reducer;
