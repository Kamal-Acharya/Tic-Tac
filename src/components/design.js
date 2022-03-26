import React from 'react';
import '../App.css';
//val is the square value
const Square=({val,chooseSquare})=>{
    return(
        <>
        <div className='square' onClick={chooseSquare}>{val}</div>
        </>
    )
}
export default Square;