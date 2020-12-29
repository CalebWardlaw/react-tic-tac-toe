import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//component is independent and reusable bit of code, does the same thing as JS functions but returns HTML via render
class Square extends React.Component {
    //Using "stat" to rEmEmBeR that it gets clicked via constructor (like java)
    //Super is used when defining constructor, it calls it
    constructor(props) {
        super(props);
        this.state = {
            //Null used because it is not expecting a return value, this is its starting state aka unmarked
            value: null,
        };
    }
    render() {
        return (
            //Event listener, prompts in browser
            //Setting the state to a char of X (for tic tac toe!)
            <button className="square" onClick={() => this.setState({value:'X'})}>
                {this.state.value}
            </button>
        );
    }
}

class Board extends React.Component {
    //adding constructor and array for squares
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }
    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                {/*Board is being made via css borders*/}
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    {/*What is this backslash at the end? Calling for the board tags and all children?*/}
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
