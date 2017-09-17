// @flow
import React from 'react';
import { StyleSheet } from 'react-native';

import FloatingButton from '../../molecules/floating-button';
import DemoTile from '../../organisms/demo-tile';
import type { Component } from '../../../../type-definitions';

export type Props = {
    navigation: {
        state: {
            params: Component,
        },
    },
};

export default function FullScreenDemo({ navigation }: Props) {
    const props = navigation.state.params;
    return (
        <DemoTile
            style={styles.demo}
            title={props.title}
            render={props.render}
            navigation={navigation}
            isFullScreen
        />
    );
}

FullScreenDemo.navigationOptions = props => {
    const { params } = props.navigation.state;
    const { renderHeader } = params;
    if (typeof renderHeader === 'function') {
        return {
            header: renderHeader(props),
        };
    }
    if (renderHeader === null || renderHeader === false) {
        return {
            header: null,
        };
    }
    return {
        title: params.title,
        headerBackTitle: null,
    };
};

const styles = StyleSheet.create({
    demo: {
        flex: 1,
    },
});
