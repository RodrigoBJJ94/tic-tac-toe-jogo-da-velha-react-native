import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import backgroundVeryHard from '../../assets/animations/BackgroundVeryHard.json';

export default function AnimationVeryHard() {
    return (
        <AnimatedLottieView
            source={backgroundVeryHard} autoPlay loop />
    );
};
