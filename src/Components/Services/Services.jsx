import React from 'react'
import './Services.css'
import heart from '../../img/heartemoji.png'
import glass from '../../img/glasses.png'
import humble from '../../img/humble.png'
import Card from '../Card/Card'

const Services = () => {
  return (
    <div className='services'>
        {/* left side */}
        <div className='awesome'>
            <span>My Awesome</span>
            <span>Services</span>
            <span>Lorem, ipsum is simpley dummy text of printing of printing lorem
                <br />
                ipsum is simpley dummy text of printing</span>
            <button className='button s-button'>Download CV</button>
            <div className='blur s-blur1' style={{background:'#abf1ff94'}}></div>
        </div>

        {/* right side */}
        <div className='cards'>
            {/* first card */}
            <div style={{left:'14rem'}}>
                <Card
                emoji={heart}
                heading={'Design'}
                detail={'Figma, Sketch, Photoshop, Adobe, Adobe xd'}
                />
            </div>

            {/* second card */}
            <div style={{top:'12rem', left:'-4rem'}}>
                <Card
                emoji={glass}
                heading={'Developer'}
                detail={'HTML, CSS JAVASCRIPT, REACT'}
                />
            </div>

            {/* second card */}
            <div style={{top:'19rem', left:'12rem'}}>
                <Card
                emoji={humble}
                heading={'UI/UX'}
                detail={'Lorem, ipsum is simpley dummy text of printing of printing lorem'}
                />
            </div>

            <div className='blur s-blur2' style={{background:'var(--purple)'}}></div>
        </div>


    </div>
  )
}

export default Services