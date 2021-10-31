import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from './Styles';
import StatusBarHard from '../StatusBar/StatusBar';
import AnimationHard from '../Animation/Animation';
import TitleHard from '../Title/Title';
import Back from '../../Back/Back';

export default function Hard({ board, setBoard, startGameHard, currentPlayer, remainingMoves, setRemainingMoves, setCurrentPlayer, setScreen, setWinner }) {

    function playHard(line, column) {
        board[line][column] = currentPlayer;
        setBoard([...board]);

        if (startGameHard) {
            if (currentPlayer === 'X' && remainingMoves > 1) {
                if ((board[0][0] === 'O') && (board[0][1] === 'O') && (board[0][2] === '')) {
                    board[0][2] = 'O';
                } else if ((board[0][0] === 'O') && (board[0][2] === 'O') && (board[0][1] === '')) {
                    board[0][1] = 'O';
                } else if ((board[0][2] === 'O') && (board[0][1] === 'O') && (board[0][0] === '')) {
                    board[0][0] = 'O';
                } else if ((board[1][0] === 'O') && (board[1][1] === 'O') && (board[1][2] === '')) {
                    board[1][2] = 'O';
                } else if ((board[1][0] === 'O') && (board[1][2] === 'O') && (board[1][1] === '')) {
                    board[1][1] = 'O';
                } else if ((board[1][2] === 'O') && (board[1][1] === 'O') && (board[1][0] === '')) {
                    board[1][0] = 'O';
                } else if ((board[2][0] === 'O') && (board[2][1] === 'O') && (board[2][2] === '')) {
                    board[2][2] = 'O';
                } else if ((board[2][0] === 'O') && (board[2][2] === 'O') && (board[2][1] === '')) {
                    board[2][1] = 'O';
                } else if ((board[2][2] === 'O') && (board[2][1] === 'O') && (board[2][0] === '')) {
                    board[2][0] = 'O';
                } else if ((board[0][0] === 'O') && (board[1][0] === 'O') && (board[2][0] === '')) {
                    board[2][0] = 'O';
                } else if ((board[0][0] === 'O') && (board[2][0] === 'O') && (board[1][0] === '')) {
                    board[1][0] = 'O';
                } else if ((board[1][0] === 'O') && (board[2][0] === 'O') && (board[0][0] === '')) {
                    board[0][0] = 'O';
                } else if ((board[0][1] === 'O') && (board[1][1] === 'O') && (board[2][1] === '')) {
                    board[2][1] = 'O';
                } else if ((board[0][1] === 'O') && (board[2][1] === 'O') && (board[1][1] === '')) {
                    board[1][1] = 'O';
                } else if ((board[1][1] === 'O') && (board[2][1] === 'O') && (board[0][1] === '')) {
                    board[0][1] = 'O';
                } else if ((board[0][2] === 'O') && (board[1][2] === 'O') && (board[2][2] === '')) {
                    board[2][2] = 'O';
                } else if ((board[0][2] === 'O') && (board[2][2] === 'O') && (board[1][2] === '')) {
                    board[1][2] = 'O';
                } else if ((board[1][2] === 'O') && (board[2][2] === 'O') && (board[0][2] === '')) {
                    board[0][2] = 'O';
                } else if ((board[0][0] === 'O') && (board[1][1] === 'O') && (board[2][2] === '')) {
                    board[2][2] = 'O';
                } else if ((board[0][0] === 'O') && (board[2][2] === 'O') && (board[1][1] === '')) {
                    board[1][1] = 'O';
                } else if ((board[2][2] === 'O') && (board[1][1] === 'O') && (board[0][0] === '')) {
                    board[0][0] = 'O';
                } else if ((board[0][2] === 'O') && (board[1][1] === 'O') && (board[2][0] === '')) {
                    board[2][0] = 'O';
                } else if ((board[0][2] === 'O') && (board[2][0] === 'O') && (board[1][1] === '')) {
                    board[1][1] = 'O';
                } else if ((board[2][0] === 'O') && (board[1][1] === 'O') && (board[0][2] === '')) {
                    board[0][2] = 'O';
                } else if ((board[0][0] === 'X') && (board[0][1] === 'X') && (board[0][2] === '')) {
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
            verifyWinnerHard(board, line, column);
        };
    };

    function verifyWinnerHard(board) {
        if (board[0][0] !== '' && board[0][0] === board[0][1] && board[0][1] === board[0][2]) {
            return endGameHard(board[0][0]);
        };

        if (board[1][0] !== '' && board[1][0] === board[1][1] && board[1][1] === board[1][2]) {
            return endGameHard(board[1][0]);
        };

        if (board[2][0] !== '' && board[2][0] === board[2][1] && board[2][1] === board[2][2]) {
            return endGameHard(board[2][0]);
        };

        if (board[0][0] !== '' && board[0][0] === board[1][0] && board[1][0] === board[2][0]) {
            return endGameHard(board[0][0]);
        };

        if (board[0][1] !== '' && board[0][1] === board[1][1] && board[1][1] === board[2][1]) {
            return endGameHard(board[0][1]);
        };

        if (board[0][2] !== '' && board[0][2] === board[1][2] && board[1][2] === board[2][2]) {
            return endGameHard(board[0][2]);
        };

        if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            return endGameHard(board[0][0]);
        };

        if (board[2][0] !== '' && board[2][0] === board[1][1] && board[1][1] === board[0][2]) {
            return endGameHard(board[2][0]);
        };

        if ((remainingMoves - 1) === 0) {
            return endGameHard('');
        };
        setRemainingMoves((remainingMoves - 1));
    };

    function endGameHard(player) {
        setWinner(player);
        startGameHard('X');
        setScreen('winner');
    };

    return (
        <View style={Styles.containerHard}>
            <StatusBarHard />
            <AnimationHard />
            <TitleHard />
            {board.map((line, numberLine) => {
                return (
                    <View key={numberLine} style={Styles.inlineItens}>
                        {line.map((column, numberColumn) => {
                            return (
                                <TouchableOpacity
                                    key={numberColumn}
                                    style={Styles.boxPlayer}
                                    onPress={() => playHard(numberLine, numberColumn)}
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
