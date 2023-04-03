import React from 'react'
import './overbought.css'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Overbought = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/aditimishra25/stocks-api/stocks")
      .then(res => res.json())
      .then(
        (result) => {
          setData(result);
        }
      )
}, []); 
return (
  <div className='list'>
    <div className='heading-sec'>
      <p className='heading-title-text'>RSI Reversal</p>
      <text className='heading-sub-title-red'>Bearish</text>
    </div>
    {data.filter(item => item.id === 5).map((item,index) => (
      <div  className='res-text' key={index}>
        {item.criteria.map((item, i) => {
          const criteriaVal = {
            text : item.text ,
          }
          const newCriteriaVal = {...criteriaVal, updatedVal: ((criteriaVal.text).replace("$1", "2").replace("$2", "10").replace("$3", "1.5").replace("$4", "14"))}
          
          return <p className="res-updated-text">{newCriteriaVal.updatedVal}</p>
        })}
      </div>
    ))}
  </div>
);
}

export default Overbought