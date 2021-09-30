import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import backgroundMedium from '../../assets/animations/BackgroundMedium.json';

export default function AnimationMedium() {
    return (
        <AnimatedLottieView
            source={backgroundMedium} autoPlay loop />
    );
};
