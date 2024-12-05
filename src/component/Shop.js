import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from "redux";
import {actionCreators} from '../state/index';


const Shop = () => {
  const dispatch= useDispatch();
  // const action = bindActionCreators(actionCreators, dispatch);
  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);
  const ammount = useSelector(state => state.ammount);
  return (
    <div className='container'>

      <h2>Deposit/Withdraw Money</h2>
      
      {/* <button className='btn btn-success mx-2' onClick={()=>{dispatch(actionCreators.depositMoney(200))}}> + </button>
      Add to card
      <button className='btn btn-success mx-2'onClick={()=>{dispatch(actionCreators.withdrawtMoney(200))}}> - </button> */}
    
      <button className='btn btn-success mx-2' onClick={()=>{depositMoney(200)}}> + </button>
      Update Balance ({ammount})
      <button className='btn btn-success mx-2'onClick={()=>{withdrawMoney(200)}}> - </button>
    
    </div>
  )
}

export default Shop
