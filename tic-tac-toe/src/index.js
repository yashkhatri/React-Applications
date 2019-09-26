/** 
 * @author [Yash Khatri] 
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/**
 * Square Function. 
 * We need not to retain values of squares in State
 * as it is being passed from Parent Component. Hence. Sqaure 
 * can be a function and not Component. 
 * @param {*} props 
 */
function Square(props)  {

      return (
        <button 
        className="square" 
        onClick={()=> props.onClick()} > 
          {props.value}
        </button>
      );
    }
  
  /**
   * Board Component.
   * Parent Component for Square Function. 
   * It passes props to be rendered in the squares in Square 
   * Function.
   */
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
      };
    }

    //On Clicking Square. This method is called.
    handleClick(i) {
      const squares = this.state.squares.slice();
      squares[i] = 'X';
      this.setState({squares : squares});
    }

    //For rendering Sqaure and passing props.
    renderSquare(i) {
      return (
      <Square 
      value={this.state.squares[i]}
      onClick={()=>this.handleClick(i)}
      />
  );
    }

    // Renders board.  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
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
  
  /**
   * Game Component.
   * Super Parent Component.
  */
  class Game extends React.Component {
    //Renders Game.
    render() {
      return (
        <div className="game">
          <div className="game-board">
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
  