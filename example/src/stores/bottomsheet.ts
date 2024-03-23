import { create } from 'zustand';

interface BottomSheetState {
  isOpened: boolean;
  onClose: () => void;
  setIsOpened: (isOpened: boolean) => void;
  setOnClose: (onClose: () => void) => void;
}

export const useBottomSheetStore = create<BottomSheetState>((set) => ({
  isOpened: false,
  onClose: () => {},
  setIsOpened: (isOpened: boolean) => set({ isOpened }),
  setOnClose: (onClose: () => void) => set({ onClose }),
}));
