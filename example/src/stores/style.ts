import type { SkImage } from '@shopify/react-native-skia';
import { View, type ColorSchemeName } from 'react-native';
import { create } from 'zustand';
import { DarkColors, LightColors, type IColors } from '../lib/styles/colors';

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

interface ColorsState {
  colors: IColors;
}

export const useColorsStore = create<ColorsState>(() => {
  return {
    colors:
      useThemeStore.getState().theme === 'dark' ? DarkColors : LightColors,
  };
});

type SetChangeAnimationProps = Pick<
  ThemeChangeAnimationState,
  'snapshot1' | 'snapshot2' | 'isAnimating' | 'ref'
>;

interface ThemeChangeAnimationState {
  ref?: React.RefObject<View>;
  snapshot1?: SkImage;
  snapshot2?: SkImage;
  isAnimating: boolean;
  setState: (state: SetChangeAnimationProps) => void;
}

export const useThemeChangeAnimationStore = create<ThemeChangeAnimationState>(
  (set) => {
    return {
      ref: undefined,
      snapshot1: undefined,
      snapshot2: undefined,
      isAnimating: false,
      setState: (state: SetChangeAnimationProps) => set({ ...state }),
    };
  }
);
