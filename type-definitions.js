import React from 'react';

export type Component = {
    displayName: string,
    description: string,
    demos: { title: string, render: () => React.Element<*> }[],
    renderHeader?: ?() => React.Element<*>,
};
