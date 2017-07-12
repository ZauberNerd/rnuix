// @flow
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { colors } from '../../../themes';
import Touchable from './';

export default {
    displayName: 'Touchable',
    description:
        'Renders a TouchableNativeFeedback on Android, otherwise a TouchableOpacity.',
    demos: [
        {
            title: 'Text content',
            render: () =>
                <Touchable onPress={() => {}}>
                    <Text>Touch me!</Text>
                </Touchable>,
        },
        {
            title: 'No onPress disables feedback',
            render: () =>
                <Touchable>
                    <Text>Can't touch this</Text>
                </Touchable>,
        },
        {
            title: 'Custom style',
            render: () =>
                <Touchable
                    onPress={() => {}}
                    activeOpacity={0.5}
                    rippleColor="#fff6"
                    style={styles.customWrapper}
                >
                    <Text style={styles.customText}>Touch me!</Text>
                </Touchable>,
        },
        {
            title: 'Custom style, disabled',
            render: () =>
                <Touchable
                    disabled
                    onPress={() => {}}
                    style={styles.customWrapper}
                >
                    <Text style={styles.customText}>Can't touch this</Text>
                </Touchable>,
        },
    ],
};

const styles = StyleSheet.create({
    customWrapper: {
        backgroundColor: colors.blue,
        borderRadius: 3,
        margin: 10,
        padding: 10,
    },
    customText: {
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
