// @flow
import React, { PureComponent } from 'react';
import { Image, ListView, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../../themes';
import DemoTile from '../../organisms/demo-tile';
import type { Component } from '../../../../type-definitions';

export type Props = {
    navigation: {
        navigate: (route: string, params?: any) => void,
        state: {
            params: {
                demos: Component[],
            },
        },
    },
};
type RenderRowProps = Component;
type DataSource = typeof ListView.DataSource;

export default class Demo extends PureComponent {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.displayName,
        headerBackTitle: null,
    });

    props: Props;

    state: { dataSource: DataSource };

    dataSource: DataSource;

    constructor(props: Props) {
        super(props);

        this.dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });

        const { state: { params } } = props.navigation;

        this.state = {
            dataSource: this.dataSource.cloneWithRows(params.demos),
        };
    }

    renderRow = (props: RenderRowProps) =>
        <DemoTile
            style={styles.demo}
            title={props.title}
            render={props.render}
            navigation={this.props.navigation}
            onEnterFullScreen={() =>
                this.props.navigation.navigate('fullScreen', props)}
        />;

    render() {
        return (
            <ListView
                contentContainerStyle={styles.content}
                dataSource={this.state.dataSource}
                enableEmptySections={true}
                renderRow={this.renderRow}
            />
        );
    }
}

const styles = StyleSheet.create({
    content: {
        padding: 6,
        paddingBottom: 0,
    },
    demo: {
        marginBottom: 6,
    },
});
