// @flow
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../../themes';
import Icon from '../../atoms/icon';
import Touchable from '../../atoms/touchable';

export type DemoHeaderProps = {
    onEnterFullScreen?: () => void,
    title: string,
};

export default function DemoHeader(
    {
        onEnterFullScreen,
        title,
    }: DemoHeaderProps,
) {
    return (
        <View style={styles.header}>
            <View style={styles.title}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <View style={styles.buttons}>
                <Touchable style={styles.button} onPress={onEnterFullScreen}>
                    <Icon name="fullscreen" />
                </Touchable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'stretch',
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: colors.silverLight,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    titleText: {
        fontSize: 14,
        color: colors.black,
        fontWeight: 'bold',
    },
    buttons: {
        flexDirection: 'row',
    },
    button: {
        justifyContent: 'center',
        padding: 5,
    },
});
