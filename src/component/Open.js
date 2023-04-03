import React from 'react'
import './open.css'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Open = () => {
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
      <p className='heading-title-text'>Open = High</p>
      <text className='heading-sub-title-text-green'>Bullish</text>
    </div>
    {data.filter(item => item.id === 3).map((item,index) => (
      <div  className='res-text' key={index}>
        {item.criteria.map((item, i) => {
          const criteriaVal = {
            text : item.text,
            variable: (Object.values(item.variable))[0].values[0]
          }

          const newCriteriaVal = {...criteriaVal, updatedVal: criteriaVal.text.replace("$1",criteriaVal.variable)}
          return <p className="res-updated-text">{newCriteriaVal.updatedVal}</p>
        })}
      </div>
    ))}
  </div>
);
}

export default Open