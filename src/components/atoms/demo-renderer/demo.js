// @flow
import React from 'react';
import { Text } from 'react-native';

import DemoRenderer from './';

export default {
    displayName: 'DemoRenderer',
    description: 'The canvas on which the demo content will be rendered.',
    demos: [
        {
            title: 'Normal mode',
            render: () =>
                <DemoRenderer
                    render={() => <Text>Content</Text>}
                    navigation={{}}
                />,
        },
        {
            title: 'Full screen mode',
            render: () =>
                <DemoRenderer
                    isFullScreen
                    render={() => <Text>Content</Text>}
                    navigation={{}}
                />,
        },
    ],
};
