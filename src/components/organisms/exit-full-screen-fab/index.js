// @flow
import React from 'react';
import { StyleSheet } from 'react-native';

import FloatingButton from '../../molecules/floating-button';

import type { HeaderProps } from 'react-navigation';

export type ExitFullScreenFABProps = HeaderProps;

export default function ExitFullScreenFAB(
    { navigation, style }: ExitFullScreenFABProps,
) {
    return (
        <FloatingButton
            onPress={() => navigation.goBack(null)}
            style={[styles.exitButton, style]}
            name="arrow_back"
        />
    );
}

const styles = StyleSheet.create({
    exitButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        zIndex: 1,
    },
});
