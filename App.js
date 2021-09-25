import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Winner from './src/components/Winner';
import Menu from './src/components/Menu';
import Easy from './src/components/Easy';
import Medium from './src/components/Medium';
import Hard from './src/components/Hard';
import VeryHard from './src/components/VeryHard';

export default function App() {
    const [screen, setScreen] = useState('menu');
    const [currentPlayer, setCurrentPlayer] = useState('');
    const [board, setBoard] = useState([]);
    const [remainingMoves, setRemainingMoves] = useState(0);
    const [winner, setWinner] = useState('');

    function startGameEasy(player) {
        setCurrentPlayer(player);
        setRemainingMoves(5);
        setBoard([['', '', ''], ['', '', ''], ['', '', '']]);
        setScreen('game');
    };

    function startGameMedium(player) {
        setCurrentPlayer(player);
        setRemainingMoves(5);
        setBoard([['', '', ''], ['', '', ''], ['', '', '']]);
        setScreen('medium');
    };

    function startGameHard(player) {
        setCurrentPlayer(player);
        setRemainingMoves(5);
        setBoard([['', '', ''], ['', '', ''], ['', '', '']]);
        setScreen('hard');
    };

    function startGameVeryHard(player) {
        setCurrentPlayer(player);
        setRemainingMoves(5);
        setBoard([['', '', ''], ['', '', ''], ['', '', '']]);
        setScreen('veryHard');
    };

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

    function playVeryHard(line, column) {
        board[line][column] = currentPlayer;
        setBoard([...board]);

        if (startGameVeryHard) {
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
                } else if ((board[0][0] === 'X') && (board[0][1] === '') && (board[0][2] === '') && (board[1][0] === '') && (board[1][1] === '') && (board[1][2] === '') && (board[2][0] === '') && (board[2][1] === '') && (board[2][2] === '')) {
                    board[1][1] = 'O';
                } else if ((board[0][1] === 'X') && (board[0][0] === '') && (board[0][2] === '') && (board[1][0] === '') && (board[1][1] === '') && (board[1][2] === '') && (board[2][0] === '') && (board[2][1] === '') && (board[2][2] === '')) {
                    board[1][1] = 'O';
                } else if ((board[0][2] === 'X') && (board[0][1] === '') && (board[0][0] === '') && (board[1][0] === '') && (board[1][1] === '') && (board[1][2] === '') && (board[2][0] === '') && (board[2][1] === '') && (board[2][2] === '')) {
                    board[1][1] = 'O';
                } else if ((board[1][0] === 'X') && (board[0][1] === '') && (board[0][2] === '') && (board[0][0] === '') && (board[1][1] === '') && (board[1][2] === '') && (board[2][0] === '') && (board[2][1] === '') && (board[2][2] === '')) {
                    board[1][1] = 'O';
                } else if ((board[1][2] === 'X') && (board[0][1] === '') && (board[0][2] === '') && (board[1][0] === '') && (board[1][1] === '') && (board[0][0] === '') && (board[2][0] === '') && (board[2][1] === '') && (board[2][2] === '')) {
                    board[1][1] = 'O';
                } else if ((board[2][0] === 'X') && (board[0][1] === '') && (board[0][2] === '') && (board[1][0] === '') && (board[1][1] === '') && (board[1][2] === '') && (board[0][0] === '') && (board[2][1] === '') && (board[2][2] === '')) {
                    board[1][1] = 'O';
                } else if ((board[2][1] === 'X') && (board[0][1] === '') && (board[0][2] === '') && (board[1][0] === '') && (board[1][1] === '') && (board[1][2] === '') && (board[2][0] === '') && (board[0][0] === '') && (board[2][2] === '')) {
                    board[1][1] = 'O';
                } else if ((board[2][2] === 'X') && (board[0][1] === '') && (board[0][2] === '') && (board[1][0] === '') && (board[1][1] === '') && (board[1][2] === '') && (board[2][0] === '') && (board[2][1] === '') && (board[0][0] === '')) {
                    board[1][1] = 'O';
                } else if ((board[1][1] === 'X') && (board[0][1] === '') && (board[0][2] === '') && (board[1][0] === '') && (board[0][0] === '') && (board[1][2] === '') && (board[2][0] === '') && (board[2][1] === '') && (board[0][0] === '')) {
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
            verifyWinnerVeryHard(board, line, column);
        };
    };

    function verifyWinner(board) {
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

    function verifyWinnerMedium(board) {
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

    function verifyWinnerVeryHard(board) {
        if (board[0][0] !== '' && board[0][0] === board[0][1] && board[0][1] === board[0][2]) {
            return endGameVeryHard(board[0][0]);
        };

        if (board[1][0] !== '' && board[1][0] === board[1][1] && board[1][1] === board[1][2]) {
            return endGameVeryHard(board[1][0]);
        };

        if (board[2][0] !== '' && board[2][0] === board[2][1] && board[2][1] === board[2][2]) {
            return endGameVeryHard(board[2][0]);
        };

        if (board[0][0] !== '' && board[0][0] === board[1][0] && board[1][0] === board[2][0]) {
            return endGameVeryHard(board[0][0]);
        };

        if (board[0][1] !== '' && board[0][1] === board[1][1] && board[1][1] === board[2][1]) {
            return endGameVeryHard(board[0][1]);
        };

        if (board[0][2] !== '' && board[0][2] === board[1][2] && board[1][2] === board[2][2]) {
            return endGameVeryHard(board[0][2]);
        };

        if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            return endGameVeryHard(board[0][0]);
        };

        if (board[2][0] !== '' && board[2][0] === board[1][1] && board[1][1] === board[0][2]) {
            return endGameVeryHard(board[2][0]);
        };

        if ((remainingMoves - 1) === 0) {
            return endGameVeryHard('');
        };

        setRemainingMoves((remainingMoves - 1));
    };


    function endGame(player) {
        setWinner(player);
        startGameEasy('X');
        setScreen('winner');
    };

    function endGameMedium(player) {
        setWinner(player);
        startGameMedium('X');
        setScreen('winner');
    };

    function endGameHard(player) {
        setWinner(player);
        startGameHard('X');
        setScreen('winner');
    };

    function endGameVeryHard(player) {
        setWinner(player);
        startGameVeryHard('X');
        setScreen('winner');
    };

    switch (screen) {
        case 'menu':
            return getScreenMenu();
        case 'game':
            return getScreenGame();
        case 'medium':
            return getScreenGameMedium();
        case 'hard':
            return getScreenGameHard();
        case 'veryHard':
            return getScreenGameVeryHard();
        case 'winner':
            return getScreenWinner();
    };

    function getScreenMenu() {
        return (
            <View style={styles.containerHome}>
               <Menu />
                <View style={styles.inlineItensHome}>
                    <TouchableOpacity
                        onPress={() => startGameEasy('X')}
                        style={styles.boxPlayerHomeEasy}>
                        <Text style={styles.playerXEasy}>Easy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => startGameMedium('X')}
                        style={styles.boxPlayerHomeMedium}>
                        <Text style={styles.playerXEasy}>Medium</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => startGameHard('X')}
                        style={styles.boxPlayerHomeHard}>
                        <Text style={styles.playerXEasy}>Hard</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => startGameVeryHard('X')}
                        style={styles.boxPlayerHomeVeryHard}>
                        <Text style={styles.playerXEasy}>Very Hard</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    function getScreenGame() {
        return (
            <View style={styles.container}>
                <Easy />
                {board.map((line, numberLine) => {
                    return (
                        <View key={numberLine} style={styles.inlineItens}>
                            {line.map((column, numberColumn) => {
                                return (
                                    <TouchableOpacity
                                        key={numberColumn}
                                        style={styles.boxPlayer}
                                        onPress={() => playEasy(numberLine, numberColumn)}
                                        disabled={column !== ''}>
                                        <Text style={column === 'X' ? styles.playerX : styles.playerO}>{column}</Text>
                                    </TouchableOpacity>
                                )
                            })
                            }
                        </View>
                    )
                })
                }
                <TouchableOpacity
                    onPress={() => setScreen('menu')}
                    style={styles.buttonBackMenu}>
                    <Text style={styles.textBackMenu}>Back to menu</Text>
                </TouchableOpacity>
            </View>
        );
    };

    function getScreenGameMedium() {
        return (
            <View style={styles.containerMedium}>
                <Medium />
                {board.map((line, numberLine) => {
                    return (
                        <View key={numberLine} style={styles.inlineItens}>
                            {line.map((column, numberColumn) => {
                                return (
                                    <TouchableOpacity
                                        key={numberColumn}
                                        style={styles.boxPlayer}
                                        onPress={() => playMedium(numberLine, numberColumn)}
                                        disabled={column !== ''}>
                                        <Text style={column === 'X' ? styles.playerX : styles.playerO}>{column}</Text>
                                    </TouchableOpacity>
                                )
                            })
                            }
                        </View>
                    )
                })
                }
                <TouchableOpacity
                    onPress={() => setScreen('menu')}
                    style={styles.buttonBackMenu}>
                    <Text style={styles.textBackMenu}>Back to menu</Text>
                </TouchableOpacity>
            </View>
        );
    };

    function getScreenGameHard() {
        return (
            <View style={styles.containerHard}>
                <Hard />
                {board.map((line, numberLine) => {
                    return (
                        <View key={numberLine} style={styles.inlineItens}>
                            {line.map((column, numberColumn) => {
                                return (
                                    <TouchableOpacity
                                        key={numberColumn}
                                        style={styles.boxPlayer}
                                        onPress={() => playHard(numberLine, numberColumn)}
                                        disabled={column !== ''}>
                                        <Text style={column === 'X' ? styles.playerX : styles.playerO}>{column}</Text>
                                    </TouchableOpacity>
                                )
                            })
                            }
                        </View>
                    )
                })
                }
                <TouchableOpacity
                    onPress={() => setScreen('menu')}
                    style={styles.buttonBackMenu}>
                    <Text style={styles.textBackMenu}>Back to menu</Text>
                </TouchableOpacity>
            </View>
        );
    };

    function getScreenGameVeryHard() {
        return (
            <View style={styles.containerVeryHard}>
                <VeryHard />
                {board.map((line, numberLine) => {
                    return (
                        <View key={numberLine} style={styles.inlineItens}>
                            {line.map((column, numberColumn) => {
                                return (
                                    <TouchableOpacity
                                        key={numberColumn}
                                        style={styles.boxPlayer}
                                        onPress={() => playVeryHard(numberLine, numberColumn)}
                                        disabled={column !== ''}>
                                        <Text style={column === 'X' ? styles.playerX : styles.playerO}>{column}</Text>
                                    </TouchableOpacity>
                                )
                            })
                            }
                        </View>
                    )
                })
                }
                <TouchableOpacity
                    onPress={() => setScreen('menu')}
                    style={styles.buttonBackMenu}>
                    <Text style={styles.textBackMenu}>Back to menu</Text>
                </TouchableOpacity>
            </View>
        );
    };

    function getScreenWinner() {
        return (
            <View style={styles.containerWin}>
                <Winner winner={winner} />
                <TouchableOpacity
                    onPress={() => setScreen('menu')}
                    style={styles.buttonBackMenu}>
                    <Text style={styles.textBackMenu}>Back to menu</Text>
                </TouchableOpacity>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(0, 64, 128)',
    },
    containerWin: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(254, 213, 16)',
    },
    containerMedium: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(29, 188, 146)',
    },
    containerHard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(121, 0, 255)',
    },
    containerVeryHard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(250, 91, 69)',
    },
    containerHome: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(19, 20, 31)',
    },
    backgroundEasy: {
        flex: 1,
        resizeMode: 'cover'
    },
    playerX: {
        fontSize: 60,
        color: '#fff',
    },
    playerXEasy: {
        fontSize: 16,
        color: '#fff',
    },
    playerO: {
        fontSize: 60,
        color: '#fff'
    },
    boxPlayer: {
        width: 110,
        height: 110,
        backgroundColor: 'rgba(220, 220, 220,0.6)',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0.5,
        borderRadius: 1,

    },
    boxPlayerHomeEasy: {
        width: 81,
        height: 35,
        backgroundColor: 'rgb(0, 64, 128))',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 5,
        marginTop: 240,
    },
    boxPlayerHomeMedium: {
        width: 81,
        height: 35,
        backgroundColor: 'rgb(29, 188, 146)',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 5,
        marginTop: 240,
    },
    boxPlayerHomeHard: {
        width: 81,
        height: 35,
        backgroundColor: 'rgb(121, 0, 255)',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 5,
        marginTop: 240,
    },
    boxPlayerHomeVeryHard: {
        width: 81,
        height: 35,
        backgroundColor: 'rgb(250, 91, 69)',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 5,
        marginTop: 240,
    },
    inlineItens: {
        flexDirection: 'row',
    },
    inlineItensHome: {
        flexDirection: 'row',
    },
    buttonBackMenu: {
        marginTop: 30,
    },
    textBackMenu: {
        color: '#fff',
        fontSize: 20,
    },
});