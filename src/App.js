import React, { useState } from 'react';
import { View } from 'react-native';
import Styles from './Styles';
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
            <View style={Styles.containerHome}>
                <Menu />
                <MenuGame
                    startGameEasy={startGameEasy} startGameMedium={startGameMedium}
                    startGameHard={startGameHard} startGameVeryHard={startGameVeryHard}
                />
            </View>
        );
    };

    function getScreenGame() {
        return (
            <View style={Styles.container}>
                <Easy
                    board={board} setBoard={setBoard} startGameEasy={startGameEasy} currentPlayer={currentPlayer}
                    setCurrentPlayer={setCurrentPlayer} remainingMoves={remainingMoves} verifyWinner={verifyWinner}
                />
                <Back setScreen={setScreen} />
            </View>
        );
    };

    function getScreenGameMedium() {
        return (
            <View style={Styles.containerMedium}>
                <Medium
                    board={board} setBoard={setBoard} startGameMedium={startGameMedium} currentPlayer={currentPlayer}
                    setCurrentPlayer={setCurrentPlayer} remainingMoves={remainingMoves} verifyWinnerMedium={verifyWinnerMedium}
                />
                <Back setScreen={setScreen} />
            </View>
        );
    };

    function getScreenGameHard() {
        return (
            <View style={Styles.containerHard}>
                <Hard
                    board={board} setBoard={setBoard} startGameHard={startGameHard} currentPlayer={currentPlayer}
                    setCurrentPlayer={setCurrentPlayer} remainingMoves={remainingMoves} verifyWinnerHard={verifyWinnerHard}
                />
                <Back setScreen={setScreen} />
            </View>
        );
    };

    function getScreenGameVeryHard() {
        return (
            <View style={Styles.containerVeryHard}>
                <VeryHard
                    board={board} setBoard={setBoard} startGameVeryHard={startGameVeryHard} currentPlayer={currentPlayer}
                    setCurrentPlayer={setCurrentPlayer} remainingMoves={remainingMoves} verifyWinnerVeryHard={verifyWinnerVeryHard}
                />
                <Back setScreen={setScreen} />
            </View>
        );
    };

    function getScreenWinner() {
        return (
            <View style={Styles.containerWin}>
                <Winner winner={winner} />
                <Back setScreen={setScreen} />
            </View>
        );
    };
};
