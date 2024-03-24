export interface IColors {
  text: TextColors;
  general: GeneralColors;
  background: BackgroundColors;
}

type Colors = {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  accent: string;
};

type TextColors = {
  primary: string;
  secondary: string;
  tertiary: string;
};

type GeneralColors = {
  primary: string;
  secondary: string;
  accent: string;
};

type BackgroundColors = {
  primary: string;
};

export const Colors = {
  primary: '#27CE9C',
  secondary: '#DDDBFF',
  background: '#FBFBFE',
  text: '#040316',
  accent: '#443DFF',
  gray: '#939396',
  lightGray: '#F0F0F0',
};

export const LightColors: IColors = {
  text: {
    primary: '#040316',
    secondary: '#939396',
    tertiary: '#F0F0F0',
  },
  general: {
    primary: '#27CE9C',
    secondary: '#DDDBFF',
    accent: '#443DFF',
  },
  background: {
    primary: '#FBFBFE',
  },
};

export const DarkColors: IColors = {
  text: {
    primary: '#EAE9FC',
    secondary: '#939396',
    tertiary: '#040316',
  },
  general: {
    primary: '#31D8A6',
    secondary: '#020024',
    accent: '#004AC2',
  },
  background: {
    primary: '#010104',
  },
};
