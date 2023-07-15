import React from 'react'
import "./hero.css"
import {FaWhatsapp} from "react-icons/fa"; 
import logo from "../logo.svg"
const Hero = () => {

function handleClick(){
    window.open("https://www.whatsapp.com/")
}

function handleClick2(){
    window.open("https://www.whatsapp.com/")
}
  return (
    <div className='hero-div'>
      <div class="subhead">
        <h2 className='subhead-h'>
            <span className='c1'>Build, </span>
            <span className='c2'>Test, </span>
            <span className='c3'>and</span><br/>
            <span className='c4'>execute your</span> <br /><span className='c4'>ideas </span> 
            <span className='c3'>with our</span><br/>
            <span className='c5'>innovative <br /> solutions<span className='c2'>.</span></span>
            <div className='btn'>
            <button className='b1' onClick={handleClick}><span class="txt"><FaWhatsapp className='icon'/> Chat now on Whatsapp</span></button>
            <button className='b2' onClick={handleClick2}><span class="txt">Explore our Services</span></button>

            <div className="cube">
  

  <div className="box box1">
      <img src={logo} className='im'
          alt="image 1"/>
  </div>

  <div className="box box2">
      <img src={logo}
          alt="image 2" className='im'/>
  </div>

  <div className="box box3">
      <img src={logo}
          alt="image 3" className='im'/>
  </div>

  <div className="box box4">
      <img src={logo} alt="image 4" className='im'/>
  </div>

  <div className="box box5">
      <img src={logo}
          alt="image 5" className='im'/>
  </div>

  <div className="box box6">
      <img src={logo} alt="image 6" className='im'/>
  </div>
</div>

            </div>
            

        </h2>
      </div>
      <hr/>
    </div>
  )
}

export default Hero
