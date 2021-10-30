import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import backgroundHard from '../../../assets/animations/BackgroundHard.json';

export default function AnimationHard() {
    return <AnimatedLottieView source={backgroundHard} autoPlay loop />
};
