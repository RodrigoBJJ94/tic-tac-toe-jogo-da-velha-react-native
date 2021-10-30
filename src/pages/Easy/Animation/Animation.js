import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import backgroundEasy from '../../../assets/animations/BackgroundEasy.json';

export default function AnimationEasy() {
    return <AnimatedLottieView source={backgroundEasy} autoPlay loop />
};
