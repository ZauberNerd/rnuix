// @flow
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import type { Component as ComponentT } from '../type-definitions';

import ComponentList from './components/scenes/component-list';
import Demo from './components/scenes/demo';
import FullScreenDemo from './components/scenes/full-screen-demo';

export const App = StackNavigator(
    {
        list: { screen: ComponentList },
        demo: { screen: Demo },
        fullScreen: { screen: FullScreenDemo },
    },
    {
        initialRouteName: 'list',
    },
);

export {
    default as ExitFullScreenFAB,
} from './components/organisms/exit-full-screen-fab';

export default (components: ComponentT[] = []) =>
    () => <App screenProps={{ components }} />;
