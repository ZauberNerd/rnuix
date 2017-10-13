// @flow
import * as React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

import { colors } from '../../../themes';

export type DemoRendererProps = {
    isFullScreen?: boolean,
    render: () => React.Element<any>,
};

export default function DemoRenderer({
    isFullScreen,
    render,
}: DemoRendererProps) {
    return (
        <ScrollView
            style={isFullScreen && styles.fullScreen}
            contentContainerStyle={!isFullScreen && styles.tile}
        >
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
