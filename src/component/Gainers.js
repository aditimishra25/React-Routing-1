import React from 'react'
import './gainers.css'
import { useEffect, useState } from 'react'

const Gainers = () => {
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
      <p className='heading-title-text'>Top Gainers</p>
      <text className='heading-sub-title-text-green'>Intraday Bullish</text>
    </div>
    {data.filter(item => item.id === 1).map((item,index) => (
      <div  className='res-text' key={index}>
        {item.criteria.map((item, i) => {
          return <p>{item.text} </p>
        })}
      </div>
    ))}
  </div>
);
}

export default Gainers