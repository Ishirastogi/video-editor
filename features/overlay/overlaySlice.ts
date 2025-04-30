import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Overlay {
  id: string;
  type: 'text' | 'image';
  content: string;
  startTime: number;
  endTime: number;
  position: { x: number; y: number };
}

interface OverlayState {
  overlays: Overlay[];
}

const initialState: OverlayState = {
  overlays: [],
};

const overlaySlice = createSlice({
  name: 'overlay',
  initialState,
  reducers: {
    addOverlay: (state, action: PayloadAction<Overlay>) => {
      state.overlays.push(action.payload);
    },
    removeOverlay: (state, action: PayloadAction<string>) => {
      state.overlays = state.overlays.filter(overlay => overlay.id !== action.payload);
    },
    updateOverlay: (state, action: PayloadAction<Overlay>) => {
      const index = state.overlays.findIndex(overlay => overlay.id === action.payload.id);
      if (index !== -1) {
        state.overlays[index] = action.payload;
      }
    },
    clearOverlays: (state) => {
      state.overlays = [];
    },
  },
});

export const { addOverlay, removeOverlay, updateOverlay, clearOverlays } = overlaySlice.actions;
export default overlaySlice.reducer;
