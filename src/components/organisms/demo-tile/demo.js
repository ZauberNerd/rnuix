// @flow
import React from 'react';
import { Text, View } from 'react-native';

import { colors, metrics } from '../../../themes';
import DemoTile from './';

export default {
    displayName: 'DemoTile',
    description: 'Renders a demo.',
    demos: [
        {
            title: 'Normal mode',
            render: () => (
                <DemoTile title="title" render={() => <Text>Content</Text>} />
            ),
        },
        {
            title: 'Full screen mode',
            render: () => (
                <DemoTile
                    title="title"
                    isFullScreen
                    style={{ height: 50 }}
                    render={() => <Text>Content</Text>}
                />
            ),
        },
        {
            title: 'Full screen mode without header',
            render: () => (
                <DemoTile
                    title="title"
                    isFullScreen
                    render={() => (
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
                        </View>
                    )}
                />
            ),
            hideHeader: true,
        },
    ],
};
