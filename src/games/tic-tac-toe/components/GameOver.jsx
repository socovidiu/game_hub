export default function GameOver({ winner, onRestart }){

    return (
        <div id="game-over">
            <p>GAME OVER!</p>
            {winner && <p>{winner} won!</p>}
            {!winner && <p>It's a draw!</p>}
            <p>
                <button onClick={onRestart}>Rematch!</button>
            </p>
        </div>
    );
}