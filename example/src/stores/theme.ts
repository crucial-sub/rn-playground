import type { SkImage } from '@shopify/react-native-skia';
import type { ColorSchemeName, View } from 'react-native';
import { create } from 'zustand';

interface ThemeState {
  theme: ColorSchemeName;
  selectedSwitch: 'system' | 'light' | 'dark';
  setTheme: (theme: ColorSchemeName) => void;
  setSelectedSwitch: (selectedSwitch: 'system' | 'light' | 'dark') => void;
}

export const useThemeStore = create<ThemeState>((set) => {
  return {
    theme: undefined,
    selectedSwitch: 'system',
    setTheme: (theme: ColorSchemeName) => set({ theme }),
    setSelectedSwitch: (selectedSwitch: 'system' | 'light' | 'dark') =>
      set({ selectedSwitch }),
  };
});

type ThemeChangeAnimationProps = Pick<
  ThemeChangeAnimationState,
  'snapshot1' | 'snapshot2' | 'isAnimating' | 'ref'
>;

interface ThemeChangeAnimationState {
  ref?: React.RefObject<View>;
  snapshot1?: SkImage;
  snapshot2?: SkImage;
  isAnimating: boolean;
  setState: (state: ThemeChangeAnimationProps) => void;
}

export const useThemeAnimationStore = create<ThemeChangeAnimationState>(
  (set) => {
    return {
      ref: undefined,
      snapshot1: undefined,
      snapshot2: undefined,
      isAnimating: false,
      setState: (state: ThemeChangeAnimationProps) => set({ ...state }),
    };
  }
);
