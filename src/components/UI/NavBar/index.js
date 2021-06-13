/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {useState} from 'react'
import { Link,useLocation } from 'react-router-dom'
import { FaBars,FaTimes } from 'react-icons/fa'
import { MdFingerprint } from 'react-icons/md'
import { IconContext } from 'react-icons/lib';
import { Button } from '../Button';
import './navbar.scss';

function Navbar() {
    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick = () => setClick(!click); 
    const closeMobileMenu = () => setClick(false);
    const showButton = () =>{
        if(window.innerWidth <= 960) {
            setButton(false);
        }else {
            setButton(true);
        }
    }
    window.addEventListener('resize',showButton);
    if (useLocation().pathname === '/signin' || useLocation().pathname === '/signup') return null;
    return (
        <>
        <IconContext.Provider value={{color:'black'}}>
        <div className = 'navbar'>
            <div className = 'navbar-container container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <MdFingerprint className='navbar-icon'/>TechnoQuiz
                </Link>
                <div className = 'nav-menu-icon' onClick={handleClick} onKeyDown={handleClick}>
                 {click ? <FaTimes/> : <FaBars/> }
                </div>
                <ul className={click?'nav-menu active' : 'nav-menu'} >
                    <li className='nav-item'>
                    <Link to='/quiz' className='nav-links' onClick={closeMobileMenu}>Premium</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/category' className='nav-links' onClick={closeMobileMenu}>Explore</Link>
                    </li>
                    <li className='nav-button'>
                        {button ? (
                            <Link to='/signin' className='btn--link' >
                            <Button buttonStyle = 'btn--outline'>Sign In</Button></Link>
                        ): (
                            <Link to='/signin' className='btn--link' onClick={closeMobileMenu} >
                            <Button buttonStyle = 'btn--outline' buttonSize ='btn--mobile'>Sign In</Button></Link>
                        )}
                    </li>
                </ul>
            </div>
        </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar; 