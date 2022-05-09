import React, {useState} from 'react';

function Checkbox(value){
  let updatedTotal = 0;
    const handleChange = () => {
        updatedTotal += value;
        console.log(updatedTotal);
    }


 }
  
  
  export {Checkbox};