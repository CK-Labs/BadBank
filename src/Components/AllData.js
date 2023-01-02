import '../App.css';
import React from 'react';
import { UserContext } from './Context';

function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h5>All Data in Store</h5>
    {JSON.stringify(ctx)}<br/>
    </>
  );
}

export default AllData;