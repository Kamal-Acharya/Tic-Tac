import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import Square from './components/design';
import Patterns from './components/Pattern';

function App() {

const [board,setBoard]=useState(["","","","","","","","",""]);
const [player,setPlayer]=useState("X");
const [result,setResult]=useState({player:'',state:''});

const statement=result.player;

useEffect(()=>{
checkWin();
},[board]);
useEffect(()=>{
  if(result.player!='')
  alert(`winenr ${result.player}`);
  },[result]);
//Creating a state for player starting with x as player should changed afetr one move
const choose=(squareno)=>{
// alert(squareno);
//traversing through array board so we can acess the index value and change its value
setBoard(board.map((val,index)=>{
if(index==squareno && val=="")
{
  return player;
}
return val;
}));

//changing the  player one by one
if(player=='X')
{
  setPlayer('O');
}
if(player=='O')
{
  setPlayer('X');
}
}
const clearall=()=>{
setBoard(board.map((val)=>{
  if(val)
  {
    return "";
  }
  else
  {
    return ""
  }
}));
}
//the main logic where we can check who is the winner
const checkWin=()=>{
Patterns.forEach((curr)=>{
  const firstPlayer=board[curr[0]];
  if(firstPlayer=="")return;
  let found=true;
  curr.forEach((idx)=>{
if(board[idx]!=firstPlayer)
found=false;
  })
  if(found)
{
setResult({player:board[curr[0]],state:"won"});
setBoard(board.map((val)=>{
  if(val)
  {
    return "";
  }
  else
  {
    return ""
  }
}))
}
});

}
  return (
    <>
    <div className="App">
     <div className="board">
       <div className='row'>
         <Square val={board[0]} chooseSquare={()=>{choose(0)}}/>
         <Square val={board[1]} chooseSquare={()=>{choose(1)}}/>
         <Square val={board[2]} chooseSquare={()=>{choose(2)}}/>
       
       </div>
       <div className='row'>
       <Square val={board[3]} chooseSquare={()=>{choose(3)}}/>
         <Square val={board[4]} chooseSquare={()=>{choose(4)}}/>
         <Square val={board[5]} chooseSquare={()=>{choose(5)}}/>
       </div>
       <div className='row'>
       <Square val={board[6]} chooseSquare={()=>{choose(6)}}/>
         <Square val={board[7]} chooseSquare={()=>{choose(7)}}/>
         <Square val={board[8]} chooseSquare={()=>{choose(8)}}/>
       </div>
     </div>
     <button onClick={clearall}>Clear</button>
   
    </div> 
    <p>Winner is {statement}</p>
    </>
  );
}

export default App;
