// @flow
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import type { StyleObj } from 'StyleSheetTypes';

import { colors } from '../../../themes';
import Touchable from '../../atoms/touchable';

export type ComponentRowProps = {
    title: string,
    description?: string,
    onPress?: () => void,
    style?: StyleObj,
};

export default function ComponentRow({
    title,
    description,
    onPress,
    style,
}: ComponentRowProps) {
    return (
        <Touchable onPress={onPress} style={[styles.row, style]}>
            <Text style={styles.displayName}>
                {title}
            </Text>
            <Text style={styles.description}>
                {description}
            </Text>
        </Touchable>
    );
}

const styles = StyleSheet.create({
    row: {
        backgroundColor: colors.white,
        borderBottomColor: colors.silver,
        borderBottomWidth: 1,
        padding: 16,
    },
    displayName: {
        color: colors.black,
        fontSize: 16,
        marginBottom: 2,
    },
    description: {
        color: colors.gray,
        fontSize: 14,
    },
});
