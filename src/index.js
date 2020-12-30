import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//component is independent and reusable bit of code, does the same thing as JS functions but returns HTML via render

//Replaced with function component on 22

// class Square extends React.Component {
//     //Using "stat" to rEmEmBeR that it gets clicked via constructor (like java)
//     //Super is used when defining constructor, it calls it
//     render() {
//         return (
//             //Event listener, prompts in browser
//             //Setting the state to a char of X (for tic tac toe!)
//             <button className="square" onClick={() => this.props.onClick({value:'X'})}>
//                 {this.props.value}
//             </button>
//         );
//     }
// }

function Square(props){
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

class Board extends React.Component {
    //adding constructor and array for squares
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            //Setting x to default start
            xIsNext: true,
        };
    }
    //immutability, slice() allows us to copy the array and not change the original
    handleClick(i){
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }
    renderSquare(i) {
        return (
            <Square
                //passing to square
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
