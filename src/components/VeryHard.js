import React from 'react';
import { Text, StatusBar, StyleSheet } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import backgroundVeryHard from '../assets/img/BackgroundVeryHard.json';

export default function VeryHard() {
    return (
        <>
            <StatusBar backgroundColor="rgb(250, 91, 69)" />
                <AnimatedLottieView
                    source={backgroundVeryHard} autoPlay loop />
                <Text style={styles.title}>Very Hard</Text>
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