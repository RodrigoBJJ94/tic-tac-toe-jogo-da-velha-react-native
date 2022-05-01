import React, { useState } from 'react';
import Menu from './pages/Menu/Menu/Menu';
import Easy from './pages/Easy/Easy/Easy';
import Medium from './pages/Medium/Medium/Medium';
import Hard from './pages/Hard/Hard/Hard';
import VeryHard from './pages/VeryHard/VeryHard/VeryHard';
import Winner from './pages/Winner/Winner/Winner';

export default function App() {
    const [screen, setScreen] = useState('menu');
    const [currentPlayer, setCurrentPlayer] = useState('');
    const [board, setBoard] = useState([]);
    const [remainingMoves, setRemainingMoves] = useState(0);
    const [winner, setWinner] = useState('');

    function gameStart(player) {
        setCurrentPlayer(player);
        setRemainingMoves(5);
        setBoard([['', '', ''], ['', '', ''], ['', '', '']]);
    };

    function startGameEasy(player) {
        gameStart(player);
        setScreen('game');
    };

    function startGameMedium(player) {
        gameStart(player);
        setScreen('medium');
    };

    function startGameHard(player) {
        gameStart(player);
        setScreen('hard');
    };

    function startGameVeryHard(player) {
        gameStart(player);
        setScreen('veryHard');
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
            <Menu startGameEasy={startGameEasy} startGameMedium={startGameMedium}
                startGameHard={startGameHard} startGameVeryHard={startGameVeryHard} />
        );
    };

    function getScreenGame() {
        return (
            <Easy board={board} startGameEasy={startGameEasy} setBoard={setBoard}
                remainingMoves={remainingMoves} currentPlayer={currentPlayer}
                setCurrentPlayer={setCurrentPlayer} setScreen={setScreen}
                setRemainingMoves={setRemainingMoves} setWinner={setWinner} />
        );
    };

    function getScreenGameMedium() {
        return (
            <Medium board={board} startGameMedium={startGameMedium} setBoard={setBoard}
                remainingMoves={remainingMoves} currentPlayer={currentPlayer}
                setCurrentPlayer={setCurrentPlayer} setScreen={setScreen}
                setRemainingMoves={setRemainingMoves} setWinner={setWinner} />
        );
    };

    function getScreenGameHard() {
        return (
            <Hard board={board} startGameHard={startGameHard} setBoard={setBoard}
                remainingMoves={remainingMoves} currentPlayer={currentPlayer}
                setCurrentPlayer={setCurrentPlayer} setScreen={setScreen}
                setRemainingMoves={setRemainingMoves} setWinner={setWinner} />
        );
    };

    function getScreenGameVeryHard() {
        return (
            <VeryHard board={board} setBoard={setBoard} setScreen={setScreen}
                remainingMoves={remainingMoves} currentPlayer={currentPlayer}
                startGameVeryHard={startGameVeryHard} setWinner={setWinner}
                setRemainingMoves={setRemainingMoves} setCurrentPlayer={setCurrentPlayer} />
        );
    };

    function getScreenWinner() {
        return <Winner winner={winner} setScreen={setScreen} />
    };
};
