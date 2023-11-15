import {React, useState} from "react";
import './App.scss'

const App = () => {

  const InitBoard = [{id: 0, symbol:''},
                     {id: 1, symbol:''},
                     {id: 2, symbol:''},
                     {id: 3, symbol:''},
                     {id: 4, symbol:''},
                     {id: 5, symbol:''},
                     {id: 6, symbol:''},
                     {id: 7, symbol:''},
                     {id: 8, symbol:''}]

  const [pp1, setPp1] = useState(0)
  const [pp2, setPp2] = useState(0)
  const [pause, setPause] = useState(false)
  const [jogada, setJogada] = useState(true)
  const [board, setBoard] = useState(InitBoard)
    
    const UpdateBoard = (id) => {
      const NewBoard = board;

      if(NewBoard[id].symbol == '' && !pause){
        if(jogada) {
          NewBoard[id].symbol = 'X'
        }else{
          NewBoard[id].symbol = 'O'
        }
        
        setBoard(NewBoard)

        if(!CheckWin()){
          toggle()
        }
      }
    }

    const toggle = () => {
      if(jogada){
        setJogada(false)
        root.style.setProperty('--p1', 'transparent');
        root.style.setProperty('--p2', '#005b96');
      }else{
        setJogada(true)
        root.style.setProperty('--p1', '#005b96');
        root.style.setProperty('--p2', 'transparent');
      }
    }

    const Restart = () => {
      setBoard(InitBoard)
      setPause(false)
      toggle()
    }

    const CheckWin = () => {

      for(let i = 0, j = 0; i < 9; i=i+3, j++){
        if((board[i].symbol === 'X' && board[i+1].symbol === 'X' && board[i+2].symbol === 'X') ||        
           (board[j].symbol === 'X' && board[j+3].symbol === 'X' && board[j+6].symbol === 'X') ||
           (board[i].symbol === 'O' && board[i+1].symbol === 'O' && board[i+2].symbol === 'O') ||
           (board[j].symbol === 'O' && board[j+3].symbol === 'O' && board[j+6].symbol === 'O') ||
           (board[0].symbol === 'X' &&   board[4].symbol === 'X' &&   board[8].symbol === 'X') ||
           (board[2].symbol === 'X' &&   board[4].symbol === 'X' &&   board[6].symbol === 'X') ||
           (board[0].symbol === 'O' &&   board[4].symbol === 'O' &&   board[8].symbol === 'O') ||
           (board[2].symbol === 'O' &&   board[4].symbol === 'O' &&   board[6].symbol === 'O')) {
          
          setPause(true)
          if(jogada){
            setPp1(pp1+1)
          }else{
            setPp2(pp2+1)
          }

          return true
        }
      }
    }

  return(
    <div className="container">
      <div className="placarContainer">
        <div className="placar">
          
          <div className="pd">
            <p>Player 1 - X</p>
            <p>Vitorias: {pp1}</p>
          </div>
          <div className="pd">
            <p>Player 2 - O</p>
            <p>Vitorias: {pp2}</p>
          </div>
        </div>
        
        <div className="res" onClick={() => Restart()}>
          <img src="/arrow-rotate-left-solid.svg" alt="" />
          <p>Recomeçar</p>
        </div>
      </div>

      <div className="tabuleiro">
        {board.map((obj) => 
          <div className="local" onClick={() => UpdateBoard(obj.id)}>
            {obj.symbol}
          </div>
        )}
      </div>
    </div>
  )
}

export default App;