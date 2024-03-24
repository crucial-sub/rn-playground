import { Dimensions, Platform } from 'react-native';

export const windowWidth = Dimensions.get('window').width;

export const windowHeight = Dimensions.get('window').height;

export const isIOS = Platform.OS === 'ios';
