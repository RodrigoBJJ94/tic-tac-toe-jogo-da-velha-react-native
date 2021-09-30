import React from 'react';
import StatusBarMenu from './StatusBar';
import AnimationMenu from './Animation';
import TitleMenu from './Title';

export default function Menu() {
    return (
        <>
            <StatusBarMenu />
            <AnimationMenu />
            <TitleMenu />
        </>
    );
};
