import React from 'react';
import type { HeaderProps } from 'react-navigation';

export type Component = {
    displayName: string,
    description: string,
    demos: { title: string, render: () => React.Element<*> }[],
    renderHeader?: ?(props: HeaderProps) => React.Element<*>,
};
