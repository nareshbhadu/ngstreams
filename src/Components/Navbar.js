import React, { useState } from 'react'
import logoS from '../Assets/logoS.png';
import down from '../Assets/Icon Down.png';
import nglogo from '../Assets/NGLogo.webp';

export default function Navbar() {
  const [hide, setHide] = useState(0);
  const handleEnter = (val) => {
    setHide(val);
  }
  const handleClick = (val) => {
    if (hide === 0)
      setHide(val)
    else
      setHide(0);
  }
  return (
    <>
      <nav>
        <div className='navd'>
          <div className='navleft'>
            <a href='/'><img className='Blog' src={logoS} alt='...' /></a>
            <ul className='navls'>
              <li className='navli' onMouseEnter={() => handleEnter(1)}>
                <a href='/products'>Products</a>
                <span><img className={`${hide === 1 ? 'rotate' : 'rotaterev'}`} onClick={() => handleClick(1)} src={down} alt='...' /></span>
                <div className={`dropdown ${hide === 1 ? '' : 'hid'}`}>
                  <ul>
                    <li>Ad Insertion and Targeting</li>
                    <li>Smart Meta Data</li>
                    <li>CRA</li>
                    <li>VR OTT WATCH</li>
                    <li>SetTop box</li>
                  </ul>
                </div>
              </li>
              <li className='navli'><a href='/'>Services</a></li>
              <li className='navli' onMouseEnter={() => handleEnter(2)}><a href='/'>Company</a>
                <span><img className={`${hide === 2 ? 'rotate' : 'rotaterev'}`} onClick={() => handleClick(2)} src={down} alt='...' /></span>
                <div className={`dropdown ${hide === 2 ? '' : 'hid'}`}>
                  <ul>
                    <li>About Us</li>
                    <li>Contact</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <a href='https://nexgentechsolutions.com/' target='_blank' rel='noreferrer'><img className="nglog" src={nglogo} alt="" /></a>
        </div>
      </nav>
    </>
  )
}
