import { create } from 'zustand';
import { DarkColors, LightColors, type IColors } from '../lib/styles/colors';
import { useThemeStore } from './theme';

interface ColorsState {
  colors: IColors;
}

export const useColorsStore = create<ColorsState>(() => {
  return {
    colors:
      useThemeStore.getState().theme === 'dark' ? DarkColors : LightColors,
  };
});
