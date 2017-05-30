// @flow
import React from 'react';
import { Image } from 'react-native';

export type IconProps = {
    name: string,
    tintColor?: string,
};

export default function Icon({ name, tintColor }: IconProps) {
    return <Image source={icons[name]} style={{ tintColor }} />;
}

const icons = {
    fullscreen: require('./assets/ic_fullscreen.png'),
    close: require('./assets/ic_close.png'),
};
