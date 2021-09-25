import React from 'react';
import { Text, StatusBar, StyleSheet } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import animationStart from '../assets/img/animationStart.json';

export default function Menu() {
    return (
        <>
            <StatusBar backgroundColor="rgb(19, 20, 31)" />
            <AnimatedLottieView
                source={animationStart} autoPlay loop />
            <Text style={styles.titleHome}>Tic Tac Toe</Text>
        </>
    );
};

const styles = StyleSheet.create({
    titleHome: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 210,
        marginTop: 40,
    },
});