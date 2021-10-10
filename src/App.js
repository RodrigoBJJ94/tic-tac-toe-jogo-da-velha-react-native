import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AppStyles from './AppStyles';
import Winner from './pages/Winner/Winner';
import Menu from './pages/Menu/Menu';
import Easy from './pages/Easy/Easy';
import Medium from './pages/Medium/Medium';
import Hard from './pages/Hard/Hard';
import VeryHard from './pages/VeryHard/VeryHard';
import Back from './pages/Menu/Back';
import MenuGame from './pages/Menu/MenuGame';



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
            <View style={AppStyles.containerHome}>
                <Menu />
                <MenuGame startGameEasy={startGameEasy} startGameMedium={startGameMedium}
                    startGameHard={startGameHard} startGameVeryHard={startGameVeryHard} />
            </View>
        );
    };

    function getScreenGame() {
        return (
            <View style={AppStyles.container}>
                <Easy />
                {board.map((line, numberLine) => {
                    return (
                        <View key={numberLine} style={AppStyles.inlineItens}>
                            {line.map((column, numberColumn) => {
                                return (
                                    <TouchableOpacity
                                        key={numberColumn}
                                        style={AppStyles.boxPlayer}
                                        onPress={() => playEasy(numberLine, numberColumn)}
                                        disabled={column !== ''}>
                                        <Text style={column === 'X' ? AppStyles.playerX : AppStyles.playerO}>{column}</Text>
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

    function getScreenGameMedium() {
        return (
            <View style={AppStyles.containerMedium}>
                <Medium />
                {board.map((line, numberLine) => {
                    return (
                        <View key={numberLine} style={AppStyles.inlineItens}>
                            {line.map((column, numberColumn) => {
                                return (
                                    <TouchableOpacity
                                        key={numberColumn}
                                        style={AppStyles.boxPlayer}
                                        onPress={() => playMedium(numberLine, numberColumn)}
                                        disabled={column !== ''}>
                                        <Text style={column === 'X' ? AppStyles.playerX : AppStyles.playerO}>{column}</Text>
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

    function getScreenGameHard() {
        return (
            <View style={AppStyles.containerHard}>
                <Hard />
                {board.map((line, numberLine) => {
                    return (
                        <View key={numberLine} style={AppStyles.inlineItens}>
                            {line.map((column, numberColumn) => {
                                return (
                                    <TouchableOpacity
                                        key={numberColumn}
                                        style={AppStyles.boxPlayer}
                                        onPress={() => playHard(numberLine, numberColumn)}
                                        disabled={column !== ''}>
                                        <Text style={column === 'X' ? AppStyles.playerX : AppStyles.playerO}>{column}</Text>
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

    function getScreenGameVeryHard() {
        return (
            <View style={AppStyles.containerVeryHard}>
                <VeryHard />
                {board.map((line, numberLine) => {
                    return (
                        <View key={numberLine} style={AppStyles.inlineItens}>
                            {line.map((column, numberColumn) => {
                                return (
                                    <TouchableOpacity
                                        key={numberColumn}
                                        style={AppStyles.boxPlayer}
                                        onPress={() => playVeryHard(numberLine, numberColumn)}
                                        disabled={column !== ''}>
                                        <Text style={column === 'X' ? AppStyles.playerX : AppStyles.playerO}>{column}</Text>
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

    function getScreenWinner() {
        return (
            <View style={AppStyles.containerWin}>
                <Winner winner={winner} />
                <Back setScreen={setScreen} />
            </View>
        );
    };
};
