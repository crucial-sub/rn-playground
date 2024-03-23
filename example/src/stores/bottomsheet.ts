import { create } from 'zustand';

interface BottomSheetState {
  isOpened: boolean;
  component: React.ReactNode | null;
  height: number;
  afterClose?: () => void;
  showBottomSheet: (
    component: React.ReactNode,
    height?: number,
    afterClose?: () => void
  ) => void;
  closeBottomSheet: () => void;
}

export const useBottomSheetStore = create<BottomSheetState>((set) => ({
  isOpened: false,
  component: null,
  height: 350,
  afterClose: () => {},
  showBottomSheet: (
    component: React.ReactNode,
    height?: number,
    afterClose?: () => void
  ) => set({ isOpened: true, component, afterClose, height: height || 350 }),
  closeBottomSheet: () =>
    set({
      isOpened: false,
      component: null,
      height: 350,
      afterClose: () => {},
    }),
}));
