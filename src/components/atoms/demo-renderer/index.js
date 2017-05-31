// @flow
import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

import { colors } from '../../../themes';

export type DemoRendererProps = {
    isFullScreen?: boolean,
    render: () => React.Element<*>,
};

export default function DemoRenderer(
    {
        isFullScreen,
        render,
    }: DemoRendererProps,
) {
    return (
        <ScrollView style={isFullScreen ? styles.fullScreen : styles.tile}>
            {render()}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
    },
    tile: {
        padding: 10,
    },
});
