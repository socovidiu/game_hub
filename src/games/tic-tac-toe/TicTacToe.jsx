import { useState } from 'react';
import { Link } from 'react-router-dom';
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import GameOver from './components/GameOver.jsx';
import { WINNING_COMBINATIONS } from './components/winning_combination.js';

import './TicTacToe.css';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
};

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }

  return currentPlayer;
}

function deriveGameBoard(gameTurns){
  const gameBoard = [...initialGameBoard.map((array) => [...array])];

  // dirive state from gameTurns object
  for(const turn of gameTurns){
      const {square, player} = turn;
      const {row, col} = square;

      gameBoard[row][col] = player;
  }

  return gameBoard;
}

function deriveWinner(gameBoard, players){

  let winner;

  for(const condition of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[condition[0].row][condition[0].column];
    const secondSquareSymbol = gameBoard[condition[1].row][condition[1].column];
    const thirdSquareSymbol = gameBoard[condition[2].row][condition[2].column];
  
    if(
      firstSquareSymbol && 
      firstSquareSymbol === secondSquareSymbol && 
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}


function TicTacToe() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;


  // Handels the state for the active player and Update the updated turs
  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: {row: rowIndex, col: colIndex }, player: currentPlayer},
          ...prevTurns,
      ];

      return updatedTurns;
    });

  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      };
    });
  }

  return (
    <main>
      <header>
        <img src="game-logo.png" alt="Hand drawn game logo"/>
        <h1>Tic-Tac-Toe</h1>
      </header>
      
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player 
            initialName="Player 1" 
            symbol="X" 
            isActive={activePlayer === 'X'} 
            onChangeName={handlePlayerNameChange}
          />
          <Player 
            initialName="Player 2" 
            symbol="O" 
            isActive={activePlayer === 'O'} 
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart}/>
        )}
        <GameBoard 
          onSelectSquare={handleSelectSquare} 
          board={gameBoard} 
        />
      </div>
      <Log  turns={gameTurns}/>
    </main>
  );
}

export default TicTacToe;
