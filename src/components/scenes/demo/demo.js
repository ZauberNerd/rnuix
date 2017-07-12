// @flow
import React from 'react';
import { Alert, Text } from 'react-native';

const navigate = (route: string, params?: any) => {
    Alert.alert(
        `Navigation to: ${route}`,
        `Route: ${route}\nParams: ${JSON.stringify(params)}`,
    );
};

const noDemos = {
    navigate,
    state: {
        params: {
            demos: [],
        },
    },
};
const oneDemo = {
    navigate,
    state: {
        params: {
            demos: [
                {
                    title: 'This is a demo',
                    render: () => <Text>Demo</Text>,
                },
            ],
        },
    },
};
const manyDemos = {
    navigate,
    state: {
        params: {
            demos: Array.from({ length: 8 }).map((_, i) => ({
                title: `A demo #${i}`,
                render: () =>
                    <Text>
                        Demo #{i}
                    </Text>,
            })),
        },
    },
};

import Demo from './';

export default {
    displayName: 'Demo',
    description: 'This scene renders a component in multiple variations',
    demos: [
        {
            title: 'No demos',
            render: () => <Demo navigation={noDemos} />,
        },
        {
            title: 'One demo',
            render: () => <Demo navigation={oneDemo} />,
        },
        {
            title: 'Many demos',
            render: () => <Demo navigation={manyDemos} />,
        },
    ],
};
