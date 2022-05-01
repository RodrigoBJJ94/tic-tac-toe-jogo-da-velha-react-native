import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from './Styles';
import StatusBarEasy from '../StatusBar/StatusBar';
import AnimationEasy from '../Animation/Animation';
import TitleEasy from '../Title/Title';
import Back from '../../Back/Back';

export default function Easy({ board, setBoard, startGameEasy, currentPlayer, setCurrentPlayer, remainingMoves, setRemainingMoves, setScreen, setWinner }) {

    function playEasy(line, column) {
        board[line][column] = currentPlayer;
        setBoard([...board]);

        if (startGameEasy) {
            if (currentPlayer === 'X' && remainingMoves > 1) {
                do {
                    line = Math.round(Math.random() * 2);
                    column = Math.round(Math.random() * 2);
                } while (board[line][column] !== '');
                board[line][column] = 'O';
                setCurrentPlayer('X');

                if (currentPlayer === 'O') {
                    setCurrentPlayer(currentPlayer === 'X');
                };
            };
            verifyWinner(board, line, column);
        };
    };

    function verifyWinner(board) {
        if (board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') {
            return endGame(board[0][0]);
        };

        if (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') {
            return endGame(board[1][0]);
        };

        if (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X') {
            return endGame(board[2][0]);
        };

        if (board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') {
            return endGame(board[0][0]);
        };

        if (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') {
            return endGame(board[0][1]);
        };

        if (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') {
            return endGame(board[0][2]);
        };

        if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') {
            return endGame(board[0][0]);
        };

        if (board[2][0] === 'X' && board[1][1] === 'X' && board[0][2] === 'X') {
            return endGame(board[2][0]);
        };
        
        if (board[0][0] !== '' && board[0][0] === board[0][1] && board[0][1] === board[0][2]) {
            return endGame(board[0][0]);
        };

        if (board[1][0] !== '' && board[1][0] === board[1][1] && board[1][1] === board[1][2]) {
            return endGame(board[1][0]);
        };

        if (board[2][0] !== '' && board[2][0] === board[2][1] && board[2][1] === board[2][2]) {
            return endGame(board[2][0]);
        };

        if (board[0][0] !== '' && board[0][0] === board[1][0] && board[1][0] === board[2][0]) {
            return endGame(board[0][0]);
        };

        if (board[0][1] !== '' && board[0][1] === board[1][1] && board[1][1] === board[2][1]) {
            return endGame(board[0][1]);
        };

        if (board[0][2] !== '' && board[0][2] === board[1][2] && board[1][2] === board[2][2]) {
            return endGame(board[0][2]);
        };

        if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            return endGame(board[0][0]);
        };

        if (board[2][0] !== '' && board[2][0] === board[1][1] && board[1][1] === board[0][2]) {
            return endGame(board[2][0]);
        };

        if ((remainingMoves - 1) === 0) {
            return endGame('');
        };
        setRemainingMoves((remainingMoves - 1));
    };

    function endGame(player) {
        setWinner(player);
        startGameEasy('X');
        setScreen('winner');
    };

    return (
        <View style={Styles.container}>
            <StatusBarEasy />
            <AnimationEasy />
            <TitleEasy />
            {board.map((line, numberLine) => {
                return (
                    <View key={numberLine} style={Styles.inlineItens}>
                        {line.map((column, numberColumn) => {
                            return (
                                <TouchableOpacity
                                    key={numberColumn}
                                    style={Styles.boxPlayer}
                                    onPress={() => playEasy(numberLine, numberColumn)}
                                    disabled={column !== ''}>
                                    <Text style={column === 'X' ? Styles.playerX : Styles.playerO}>{column}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                )
            })}
            <Back setScreen={setScreen} />
        </View>
    );
};
