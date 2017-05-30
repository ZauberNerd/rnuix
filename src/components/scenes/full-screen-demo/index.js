// @flow
import React from 'react';
import { StyleSheet } from 'react-native';

import DemoTile from '../../organisms/demo-tile';
import type { Component } from '../../../../type-definitions';

export type Props = {
    navigation: {
        goBack: () => void,
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
            isFullScreen
            hideHeader={props.hideHeader}
            onExitFullScreen={() => navigation.goBack()}
        />
    );
}

FullScreenDemo.navigationOptions = ({ navigation: { state: { params } } }) => {
    if (params.hideHeader) {
        return { header: null };
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
