import {React, useState, useEffect} from "react";
import './App.scss'

const App = () => {

  const [jogada, setJogada] = useState(1)
  const [board, setBoard] = useState([{id: 0, symbol:''},
                                      {id: 1, symbol:''},
                                      {id: 2, symbol:''},
                                      {id: 3, symbol:''},
                                      {id: 4, symbol:''},
                                      {id: 5, symbol:''},
                                      {id: 6, symbol:''},
                                      {id: 7, symbol:''},
                                      {id: 8, symbol:''}])
  
    //console.log(board);
    
    const UpdateBoard = (id) => {
      const NewBoard = board;

      if(NewBoard[id].symbol == ''){
        if((jogada % 2) == 0) {
          NewBoard[id].symbol = 'O'
        }else{
          NewBoard[id].symbol = 'X'
        }

        setJogada(jogada + 1)
        setBoard(NewBoard)
      }

      //console.log(jogada);
    }

  return(
    <div className="container">
      <div className="placarContainer">
        <div className="placar">
          <div className="pd">
            <p>Player 1 - X</p>
            <p>Vitorias: 10</p>
          </div>
          <div className="pd">
            <p>Player 2 - O</p>
            <p>Vitorias: 10</p>
          </div>
        </div>
        
        <div className="res">
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