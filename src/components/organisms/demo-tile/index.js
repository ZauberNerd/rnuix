// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';

import DemoHeader from '../../molecules/demo-header';
import DemoRenderer from '../../atoms/demo-renderer';
import type { DemoHeaderProps } from '../../molecules/demo-header';
import type { DemoRendererProps } from '../../atoms/demo-renderer';

export type DemoTileProps = DemoHeaderProps & DemoRendererProps & {
    style: StyleSheet.Style,
};

export default (
    {
        render,
        isFullScreen = false,
        onEnterFullScreen,
        onExitFullScreen,
        style,
        title,
    }: DemoTileProps
) => (
    <View style={[styles.container, style]}>
        <DemoHeader
            isFullScreen={isFullScreen}
            onEnterFullScreen={onEnterFullScreen}
            onExitFullScreen={onExitFullScreen}
            title={title}
        />
        <DemoRenderer render={render} isFullScreen={isFullScreen} />
    </View>
);

const styles = StyleSheet.create({
    container: {},
});
