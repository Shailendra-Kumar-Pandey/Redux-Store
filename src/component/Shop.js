import React from 'react';
import { useDispatch } from 'react-redux';
// import { blindActionCreators } from "redux";
import {actionCreators} from '../state/index';

const Shop = () => {
  const dispatch= useDispatch();
  return (
    <div className='container'>

      <h2>Buy Addidas Shoes 50 Rs</h2>
      
      <button className='btn btn-success mx-2' onClick={()=>{dispatch(actionCreators.depositMoney(200))}}> + </button>
      Add to card
      <button className='btn btn-success mx-2'onClick={()=>{dispatch(actionCreators.withdrawtMoney(200))}}> - </button>
    </div>
  )
}

export default Shop
