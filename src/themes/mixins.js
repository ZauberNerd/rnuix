import { Platform } from 'react-native';

// Calculate elevation shadow with values from here:
// https://github.com/alekhurst/react-native-elevated-view/blob/7fee91a2c879e88f9359582268c6d8ebee5b99a3/index.js#L32
export function elevation(elevation) {
    if (Platform.OS === 'android') {
        return { elevation };
    }

    return {
        shadowOpacity: 0.0015 * elevation + 0.18,
        shadowRadius: 0.54 * elevation,
        shadowOffset: {
            height: 0.6 * elevation,
        },
    };
}
