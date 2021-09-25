import React from 'react';
import { Text, StatusBar, StyleSheet } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import backgroundEasy from '../assets/img/BackgroundEasy.json';

export default function Easy() {
    return (
        <>
            <StatusBar backgroundColor="rgb(0, 64, 128)" />
                <AnimatedLottieView
                    source={backgroundEasy} autoPlay loop />
                <Text style={styles.title}>Easy</Text>          
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 70,
    },
});