import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from './Styles';
import StatusBarMedium from '../StatusBar/StatusBar';
import AnimationMedium from '../Animation/Animation';
import TitleMedium from '../Title/Title';
import Back from '../../Back/Back';

export default function Medium({ board, setBoard, startGameMedium, currentPlayer, remainingMoves, setRemainingMoves, setCurrentPlayer, setScreen, setWinner }) {

    function playMedium(line, column) {
        board[line][column] = currentPlayer;
        setBoard([...board]);

        if (startGameMedium) {
            if (currentPlayer === 'X' && remainingMoves > 1) {
                if ((board[0][0] === 'X') && (board[0][1] === 'X') && (board[0][2] === '')) {
                    board[0][2] = 'O';
                } else if ((board[0][0] === 'X') && (board[0][2] === 'X') && (board[0][1] === '')) {
                    board[0][1] = 'O';
                } else if ((board[0][2] === 'X') && (board[0][1] === 'X') && (board[0][0] === '')) {
                    board[0][0] = 'O';
                } else if ((board[1][0] === 'X') && (board[1][1] === 'X') && (board[1][2] === '')) {
                    board[1][2] = 'O';
                } else if ((board[1][0] === 'X') && (board[1][2] === 'X') && (board[1][1] === '')) {
                    board[1][1] = 'O';
                } else if ((board[1][2] === 'X') && (board[1][1] === 'X') && (board[1][0] === '')) {
                    board[1][0] = 'O';
                } else if ((board[2][0] === 'X') && (board[2][1] === 'X') && (board[2][2] === '')) {
                    board[2][2] = 'O';
                } else if ((board[2][0] === 'X') && (board[2][2] === 'X') && (board[2][1] === '')) {
                    board[2][1] = 'O';
                } else if ((board[2][2] === 'X') && (board[2][1] === 'X') && (board[2][0] === '')) {
                    board[2][0] = 'O';
                } else if ((board[0][0] === 'X') && (board[1][0] === 'X') && (board[2][0] === '')) {
                    board[2][0] = 'O';
                } else if ((board[0][0] === 'X') && (board[2][0] === 'X') && (board[1][0] === '')) {
                    board[1][0] = 'O';
                } else if ((board[1][0] === 'X') && (board[2][0] === 'X') && (board[0][0] === '')) {
                    board[0][0] = 'O';
                } else if ((board[0][1] === 'X') && (board[1][1] === 'X') && (board[2][1] === '')) {
                    board[2][1] = 'O';
                } else if ((board[0][1] === 'X') && (board[2][1] === 'X') && (board[1][1] === '')) {
                    board[1][1] = 'O';
                } else if ((board[1][1] === 'X') && (board[2][1] === 'X') && (board[0][1] === '')) {
                    board[0][1] = 'O';
                } else if ((board[0][2] === 'X') && (board[1][2] === 'X') && (board[2][2] === '')) {
                    board[2][2] = 'O';
                } else if ((board[0][2] === 'X') && (board[2][2] === 'X') && (board[1][2] === '')) {
                    board[1][2] = 'O';
                } else if ((board[1][2] === 'X') && (board[2][2] === 'X') && (board[0][2] === '')) {
                    board[0][2] = 'O';
                } else if ((board[0][0] === 'X') && (board[1][1] === 'X') && (board[2][2] === '')) {
                    board[2][2] = 'O';
                } else if ((board[0][0] === 'X') && (board[2][2] === 'X') && (board[1][1] === '')) {
                    board[1][1] = 'O';
                } else if ((board[2][2] === 'X') && (board[1][1] === 'X') && (board[0][0] === '')) {
                    board[0][0] = 'O';
                } else if ((board[0][2] === 'X') && (board[1][1] === 'X') && (board[2][0] === '')) {
                    board[2][0] = 'O';
                } else if ((board[0][2] === 'X') && (board[2][0] === 'X') && (board[1][1] === '')) {
                    board[1][1] = 'O';
                } else if ((board[2][0] === 'X') && (board[1][1] === 'X') && (board[0][2] === '')) {
                    board[0][2] = 'O';
                } else {
                    do {
                        line = Math.round(Math.random() * 2);
                        column = Math.round(Math.random() * 2);
                    } while (board[line][column] !== '');
                    board[line][column] = 'O';
                };
                setCurrentPlayer('X');

                if (currentPlayer === 'O') {
                    setCurrentPlayer(currentPlayer === 'X');
                };
            };
            verifyWinnerMedium(board, line, column);
        };
    };

    function verifyWinnerMedium(board) {
        if (board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') {
            return endGameMedium(board[0][0]);
        };

        if (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') {
            return endGameMedium(board[1][0]);
        };

        if (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X') {
            return endGameMedium(board[2][0]);
        };

        if (board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') {
            return endGameMedium(board[0][0]);
        };

        if (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') {
            return endGameMedium(board[0][1]);
        };

        if (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') {
            return endGameMedium(board[0][2]);
        };

        if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') {
            return endGameMedium(board[0][0]);
        };

        if (board[2][0] === 'X' && board[1][1] === 'X' && board[0][2] === 'X') {
            return endGameMedium(board[2][0]);
        };
        
        if (board[0][0] !== '' && board[0][0] === board[0][1] && board[0][1] === board[0][2]) {
            return endGameMedium(board[0][0]);
        };

        if (board[1][0] !== '' && board[1][0] === board[1][1] && board[1][1] === board[1][2]) {
            return endGameMedium(board[1][0]);
        };

        if (board[2][0] !== '' && board[2][0] === board[2][1] && board[2][1] === board[2][2]) {
            return endGameMedium(board[2][0]);
        };

        if (board[0][0] !== '' && board[0][0] === board[1][0] && board[1][0] === board[2][0]) {
            return endGameMedium(board[0][0]);
        };

        if (board[0][1] !== '' && board[0][1] === board[1][1] && board[1][1] === board[2][1]) {
            return endGameMedium(board[0][1]);
        };

        if (board[0][2] !== '' && board[0][2] === board[1][2] && board[1][2] === board[2][2]) {
            return endGameMedium(board[0][2]);
        };

        if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            return endGameMedium(board[0][0]);
        };

        if (board[2][0] !== '' && board[2][0] === board[1][1] && board[1][1] === board[0][2]) {
            return endGameMedium(board[2][0]);
        };

        if ((remainingMoves - 1) === 0) {
            return endGameMedium('');
        };
        setRemainingMoves((remainingMoves - 1));
    };

    function endGameMedium(player) {
        setWinner(player);
        startGameMedium('X');
        setScreen('winner');
    };

    return (
        <View style={Styles.containerMedium}>
            <StatusBarMedium />
            <AnimationMedium />
            <TitleMedium />
            {board.map((line, numberLine) => {
                return (
                    <View key={numberLine} style={Styles.inlineItens}>
                        {line.map((column, numberColumn) => {
                            return (
                                <TouchableOpacity
                                    key={numberColumn}
                                    style={Styles.boxPlayer}
                                    onPress={() => playMedium(numberLine, numberColumn)}
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
