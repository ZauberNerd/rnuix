// @flow
import React from 'react';
import { Text, View } from 'react-native';

import { colors, metrics } from '../../../themes';
import DemoTile from './';

import { ExitFullScreenFAB } from '../../../';

import type { HeaderProps } from 'react-navigation';

export default {
    displayName: 'DemoTile',
    description: 'Renders a demo.',
    demos: [
        {
            title: 'Normal mode',
            render: () =>
                <DemoTile
                    title="title"
                    render={() => <Text>Content</Text>}
                    navigation={{}}
                />,
        },
        {
            title: 'Full screen mode',
            render: () =>
                <DemoTile
                    title="title"
                    isFullScreen
                    style={{ height: 50 }}
                    render={() => <Text>Content</Text>}
                    navigation={{}}
                />,
        },
        {
            title: 'Full screen mode without header',
            render: () =>
                <DemoTile
                    title="title"
                    isFullScreen
                    render={() =>
                        <View
                            style={{
                                width: metrics.window.width,
                                height: metrics.window.height,
                                borderColor: colors.gray,
                                borderStyle: 'solid',
                                borderWidth: 10,
                                padding: 10,
                            }}
                        >
                            <Text>Large content</Text>
                        </View>}
                    navigation={{}}
                />,
            renderHeader: (props: HeaderProps) =>
                <ExitFullScreenFAB
                    style={{ left: null, right: 20 }}
                    {...props}
                />,
        },
    ],
};
