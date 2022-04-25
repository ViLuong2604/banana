import React, { useState } from 'react'
import './index.css'
export default function Banana({fruit,setChange,change,fruits}) {
   
    const numHandel = (type)=>{
        if(type ==="add"){
            fruit.val= fruit.val+1;
            setChange(!change);
        }else{
            fruit.val <=1 ? fruit.val =1 : fruit.val = fruit.val-1;
            setChange(!change);
        }
    }
  const deleteHandle =()=>{
       fruits.current = fruits.current.filter(f=> f.name !== fruit.name);
       setChange(!change);
  }
  return (
      <>
      <div className='banana'>
            <p>{fruit.name}</p>
            <p>{fruit.val}</p>
            <p onClick={()=> numHandel('add')}>dấu cộng</p>
            <p onClick={()=> numHandel('del')}>dấu trừ</p>
             <p onClick={deleteHandle}>delete</p> 

        </div>
        
      </>
    
  )
}
