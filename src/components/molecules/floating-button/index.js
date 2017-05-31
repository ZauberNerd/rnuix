// @flow
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { colors, mixins } from '../../../themes';
import Icon from '../../atoms/icon';
import type { IconProps } from '../../atoms/icon';

export type FloatingButtonProps = typeof TouchableOpacity & IconProps;

export default function FloatingButton(
    { style, name, tintColor = colors.white, ...props }: FloatingButtonProps,
) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.container, style]}
            {...props}
        >
            <Icon name={name} tintColor={tintColor} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: colors.red,
        ...mixins.elevation(6),
    },
});
