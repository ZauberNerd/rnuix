// @flow
import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

import { colors } from '../../../themes';

export type DemoRendererProps = {
    isFullScreen?: boolean,
    render: () => React.Element<*>,
    navigation: Object,
};

export default function DemoRenderer({
    isFullScreen,
    render,
    navigation,
}: DemoRendererProps) {
    return (
        <ScrollView
            style={isFullScreen && styles.fullScreen}
            contentContainerStyle={!isFullScreen && styles.tile}
        >
            {render({ navigation })}
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
