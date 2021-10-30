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
            <Menu
                startGameEasy={startGameEasy} startGameMedium={startGameMedium}
                startGameHard={startGameHard} startGameVeryHard={startGameVeryHard} />
        );
    };

    function getScreenGame() {
        return (
            <Easy
                board={board} setBoard={setBoard} startGameEasy={startGameEasy}
                currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer}
                remainingMoves={remainingMoves} setRemainingMoves={setRemainingMoves}
                endGame={endGame} setScreen={setScreen} />
        );
    };

    function getScreenGameMedium() {
        return (
            <Medium
                board={board} setBoard={setBoard} startGameMedium={startGameMedium}
                currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer}
                remainingMoves={remainingMoves} setRemainingMoves={setRemainingMoves}
                endGameMedium={endGameMedium} setScreen={setScreen} />
        );
    };

    function getScreenGameHard() {
        return (
            <Hard
                board={board} setBoard={setBoard} startGameHard={startGameHard}
                currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer}
                remainingMoves={remainingMoves} setRemainingMoves={setRemainingMoves}
                endGameHard={endGameHard} setScreen={setScreen} />
        );
    };

    function getScreenGameVeryHard() {
        return (
            <VeryHard
                board={board} setBoard={setBoard} startGameVeryHard={startGameVeryHard}
                currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer}
                remainingMoves={remainingMoves} setRemainingMoves={setRemainingMoves}
                endGameVeryHard={endGameVeryHard} setScreen={setScreen} />
        );
    };

    function getScreenWinner() {
        return <Winner winner={winner} setScreen={setScreen} />
    };
};
