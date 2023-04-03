import React from 'react'
import './intraday.css'
import { useEffect, useState } from 'react'

const Intraday = () => {
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
      <p className='heading-title-text'>Intraday buying seen in last 15 minutes</p>
      <text className='heading-sub-title-text-green'>Bullish</text>
    </div>
    {data.filter(item => item.id === 2).map((item,index) => (
      <div  className='res-text' key={index}>
        {item.criteria.map((item, i) => {
          return <p>{item.text} <p className='and-class'>and</p></p>
        })}
      </div>
    ))}
  </div>
);
}

export default Intraday