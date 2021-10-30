import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import animationStart from '../../../assets/animations/animationStart.json';

export default function AnimationMenu() {
    return <AnimatedLottieView source={animationStart} autoPlay loop />
};
