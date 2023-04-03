import React from 'react'
import './home.css'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <nav className='home-page'>
        <ul className='section-class'>
            <NavLink to={"/gainers"}>
            <li className='ordered-list'>
                <a href="#">
                    <span className='title-text'>Top gainers</span>
                    <p className='sub-title-text-green'>Intraday Bullish</p>
                </a>
            </li>
            </NavLink>
            <NavLink to={"/intraday"}>
            <li className='ordered-list'>
                <a href="#">
                    <span className='title-text'>Intraday buying seen in last 15 minutes</span>
                    <p className='sub-title-text-green'>Bullish</p>
                </a>
            </li>
            </NavLink>
            <NavLink to={"/open"}>
            <li className='ordered-list'>
                <a href="#">
                    <span className='title-text'>Open = High</span>
                    <p className='sub-title-text-green'>Bullish</p>
                </a>
            </li>
            </NavLink>
            <NavLink to={"/reversal"}>
            <li className='ordered-list'>
                <a href="#">
                    <span className='title-text'>CCI Reversal</span>
                    <p className='sub-title-text-red'>Bearish</p>
                </a>
            </li>
            </NavLink>
            <NavLink to={"/overbought"}>
            <li className='ordered-list'>
                <a href="#">
                    <span className='title-text'>RSI Overbought</span>
                    <p className='sub-title-text-red'>Bearish</p>
                </a>
            </li>
            </NavLink>
        </ul>
    </nav>
  )
}

export default Home