import React from 'react';
import { Text, StatusBar, StyleSheet } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import youWin from '../assets/img/YouWin.json';
import youLose from '../assets/img/YouLose.json'
import draw from '../assets/img/Draw.json';

export default function Winner(props) {
    return (
        <>
            <StatusBar backgroundColor="rgb(254, 213, 16)" />
            {
                props.winner === '' &&
                <>
                    <AnimatedLottieView
                        source={draw} autoPlay loop />
                    <Text style={styles.winner}>Draw</Text>
                </>
            }
            {
                props.winner === 'X' &&
                <>
                    <AnimatedLottieView
                        source={youWin} autoPlay loop />
                    <Text style={styles.winner}>You win!</Text>
                </>
            }
            {
                props.winner === 'O' &&
                <>
                    <AnimatedLottieView
                        source={youLose} autoPlay loop />
                    <Text style={styles.winner}>You lose!</Text>
                </>
            }
        </>
    );
};

const styles = StyleSheet.create({
    winner: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 340,
    },
});