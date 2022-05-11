import React, { useContext } from 'react'
import './Toogle.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from '../../Context'


const Toogle = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const handleDarkMode = () => {
        theme.dispatch({type: 'toogle'})
    }

  return (
    <div className='toogle' onClick={handleDarkMode}>
        <Moon></Moon>
        <Sun></Sun>
        <div className="t-button" style={darkMode ? {left: '2px'} : {right: '2px'}}>

        </div>
    </div>
  )
}

export default Toogle