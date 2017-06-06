export type Component = {
    displayName: string,
    description: string,
    demos: { title: string, render: () => React.Element<*> }[],
    hideHeader?: boolean,
};
