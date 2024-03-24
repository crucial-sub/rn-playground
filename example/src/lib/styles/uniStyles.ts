import { UnistylesRegistry } from 'react-native-unistyles';
import { DarkColors, LightColors, type IColors } from './colors';

type AppThemes = {
  light: IColors;
  dark: IColors;
};

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
  dark: DarkColors,
  light: LightColors,
});
