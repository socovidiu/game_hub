export default function Log( { turns }) {

    console.log(turns);
    // dirive state from props
    for(const turn of turns){
        const {square, player} = turn;
        const {row, col} = square;
    }

    return (
        <ol id ="log"> 
            {turns.map( (turn) => (
                <li key={`${turn.square.row}${turn.square.col}`}>
                    <span>{turn.player} placed at {turn.square.row} and  {turn.square.col} </span>
                </li>
            ))} 

        </ol>
    );
}