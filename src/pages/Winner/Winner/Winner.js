import React from 'react';
import { View, Text } from 'react-native';
import StatusBarWinner from '../StatusBar/StatusBar';
import AnimatedLottieView from 'lottie-react-native';
import youWin from '../../../assets/animations/YouWin.json';
import youLose from '../../../assets/animations/YouLose.json';
import draw from '../../../assets/animations/Draw.json';
import Styles from './Styles';
import Back from '../../Back/Back';

export default function Winner({ winner, setScreen }) {
    return (
        <View style={Styles.containerWin}>
            <StatusBarWinner />
            {
                winner === '' &&
                <>
                    <AnimatedLottieView source={draw} autoPlay loop />
                    <Text style={Styles.winner}>Draw</Text>
                </>
            }{
                winner === 'X' &&
                <>
                    <AnimatedLottieView source={youWin} autoPlay loop />
                    <Text style={Styles.winner}>You win!</Text>
                </>
            }{
                winner === 'O' &&
                <>
                    <AnimatedLottieView source={youLose} autoPlay loop />
                    <Text style={Styles.winner}>You lose!</Text>
                </>
            }
            <Back setScreen={setScreen} />
        </View>
    );
};
