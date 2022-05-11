import React from 'react'
import './Intro.css';
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import instagram from '../../img/instagram.png'
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';



const Intro = () => {
  return (
    <div className='intro'>
        <div className='i-left'>
        <div className='i-name'>
        <span>Hy! I Am</span>
        <span>Mehedi Hassan</span>
        <span>Frontend Developer with high level of experience in web designing and development, producting the quality work.</span>
        </div>
        <button className='button i-button'>Hire me</button>

<div className='i-icons'>
    <a href="https://www.google.com/"><img src={github} alt="" /></a>
    <a href="https://www.google.com/"><img src={linkedin} alt="" /></a>
    <a href="https://www.google.com/"><img src={instagram} alt="" /></a>
</div>

        </div>
        <div className='i-right'>
            <img src={vector1} alt="" />
            <img src={vector2} alt="" />
            <img src={boy} alt="" />
            <img src={glassesimoji} alt="" />
            <div style={{top:'-4%', left:'68%'}}>
            <FloatingDiv
            image={crown} 
            txt1='Web' 
            txt2='Developer'></FloatingDiv>
            </div>
            <div style={{top:'18rem', left:'0rem'}}>
            <FloatingDiv
            image={thumbup} 
            txt1='Best Design' 
            txt2='Award'></FloatingDiv>
            </div>

            {/* blur divs */}
            <div className='blur' style={{background:'rgb(238 210 255'}}></div>

            <div className='blur' 
            style={{
                background:'#c1f5ff',
                width:'21rem',
                height:'11rem',
                top:'17rem',
                left:'-9rem'
        }}
            ></div>
        </div>
    </div>
  )
}

export default Intro