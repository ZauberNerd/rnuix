// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors, mixins } from '../../../themes';
import DemoRenderer, {
    type DemoRendererProps,
} from '../../atoms/demo-renderer';
import DemoHeader, { type DemoHeaderProps } from '../../molecules/demo-header';
import FloatingButton from '../../molecules/floating-button';

export type DemoTileProps = DemoHeaderProps & DemoRendererProps & {
    onExitFullScreen?: () => void,
    hideHeader?: boolean,
    style?: StyleSheet.Style,
    exitButtonStyle?: StyleSheet.Style,
};

export default function DemoTile(
    {
        render,
        isFullScreen = false,
        hideHeader = false,
        onEnterFullScreen,
        onExitFullScreen,
        style,
        title,
        exitButtonStyle,
    }: DemoTileProps,
) {
    return (
        <View style={[isFullScreen ? null : styles.container, style]}>
            {isFullScreen
                ? hideHeader
                      ? <FloatingButton
                            onPress={onExitFullScreen}
                            style={[styles.exitButton, exitButtonStyle]}
                            name="arrow_back"
                        />
                      : null
                : <DemoHeader
                      onEnterFullScreen={onEnterFullScreen}
                      title={title}
                  />}
            <DemoRenderer render={render} isFullScreen={isFullScreen} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 3,
        ...mixins.elevation(2),
    },
    exitButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        zIndex: 1,
    },
});
