import { create } from 'zustand';

const DEFAULT_HEIGHT = 350;

interface ChangeBottomSheetProps {
  component: React.ReactNode;
  height?: number;
  afterClose?: () => void;
}

interface BottomSheetState {
  isOpened: boolean;
  component: React.ReactNode | null;
  height: number;
  afterClose?: () => void;
  showBottomSheet: (props: ChangeBottomSheetProps) => void;
  closeBottomSheet: () => void;
}

export const useBottomSheetStore = create<BottomSheetState>((set) => ({
  isOpened: false,
  component: null,
  height: DEFAULT_HEIGHT,
  afterClose: () => {},
  showBottomSheet: ({
    component,
    height,
    afterClose,
  }: ChangeBottomSheetProps) =>
    set({
      isOpened: true,
      component,
      height: height || DEFAULT_HEIGHT,
      afterClose,
    }),
  closeBottomSheet: () =>
    set({
      isOpened: false,
      component: null,
      height: DEFAULT_HEIGHT,
      afterClose: undefined,
    }),
}));
