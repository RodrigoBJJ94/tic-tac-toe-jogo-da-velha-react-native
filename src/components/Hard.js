import React from 'react';
import { Text, StatusBar, StyleSheet } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import backgroundHard from '../assets/img/BackgroundHard.json';

export default function Hard() {
    return (
        <>
            <StatusBar backgroundColor="rgb(121, 0, 255)" />
                <AnimatedLottieView
                    source={backgroundHard} autoPlay loop />
                <Text style={styles.title}>Hard</Text>
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