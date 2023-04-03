import React from 'react'
import './reversal.css'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Reversal = () => {
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
      <p className='heading-title-text'>CCI Reversal</p>
      <text className='heading-sub-title-red'>Bearish</text>
    </div>
    {data.filter(item => item.id === 4).map((item,index) => (
      <div  className='res-text' key={index}>
        {item.criteria.map((item, i) => {
          const criteriaVal = {
            text : item.text,
            variable1: (Object.values(item.variable))[0].default_value,
            variable2: (Object.values(item.variable))[1].values[0]
          }
          
          const newCriteriaVal = {...criteriaVal, updatedVal: (criteriaVal.text.replace("$1",criteriaVal.variable1)).replace("$2",criteriaVal.variable2)}
          
          return <p className="res-updated-text">{newCriteriaVal.updatedVal}</p>
        })}
      </div>
    ))}
  </div>
);
}

export default Reversal