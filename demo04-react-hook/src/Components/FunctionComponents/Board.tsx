import Square from './Square'
import './style.sass'
import { useState } from 'react'

const Board = () => {
  const [xIsNext, setxIsNext] = useState(true)
  const [square, setSquare] = useState(Array(9).fill(null))
  
  const handleClick = (i: number) => {
    const nextSquares = square.slice()
    if(square[i] || calculateWinner(square)) {
      return
    }

    if(xIsNext == true) 
     nextSquares[i] = 'X'
    else 
      nextSquares[i] = "O"

    setSquare(nextSquares)
    setxIsNext(!xIsNext)
  }

  const calculateWinner = (square: Array<string>) => {
    const line = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for(let i = 0; i < line.length; i++)
    {
      const [a, b, c] = line[i]
      if(square[a] && square[a] == square[b] && square[a] == square[c]) {
        return square[a]
      }
    }
    return null
  }

  const winner = calculateWinner(square)
  let status = (winner) ? "winner" + winner : "Next player " + (xIsNext ? 'X' : 'O') 
  return (
    <>
      <div className='status'>{status}</div>
      <div className="board-row">
        <Square value={square[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={square[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={square[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={square[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={square[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={square[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={square[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={square[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={square[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  )
}

export default Board