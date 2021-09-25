import React from 'react';
import { Text, StatusBar, StyleSheet } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import backgroundMedium from '../assets/img/BackgroundMedium.json';

export default function Medium() {
    return (
        <>
            <StatusBar backgroundColor="rgb(29, 188, 146)" />
                <AnimatedLottieView
                    source={backgroundMedium} autoPlay loop />
                <Text style={styles.title}>Medium</Text>
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