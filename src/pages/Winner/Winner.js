import React from 'react';
import { Text, StyleSheet } from 'react-native';
import StatusBarWinner from './StatusBar';
import AnimatedLottieView from 'lottie-react-native';
import youWin from '../../assets/animations/YouWin.json';
import youLose from '../../assets/animations/YouLose.json';
import draw from '../../assets/animations/Draw.json';

export default function Winner(props) {
    return (
        <>
            <StatusBarWinner />
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
