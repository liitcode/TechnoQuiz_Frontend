/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import { Link,useLocation } from 'react-router-dom'
import { FaBars,FaTimes } from 'react-icons/fa'
import { MdFingerprint } from 'react-icons/md'
import { IconContext } from 'react-icons/lib';
import { AvatarGenerator } from 'random-avatar-generator';
import Dropdown from './dropdown';
import MobilePane from './mobilePane';
import { Button } from '../Button';
import './navbar.scss';

function Navbar() {    
    const [profileImg,setProfileimg] = useState('');
    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);
    const [dropdown, setDropdown] = useState(false);


    const handledropClick = () => setDropdown(!dropdown);
    
    useEffect(() => {
        setProfileimg(new AvatarGenerator().generateRandomAvatar());
    }, []);
    
    const handleClick = () => setClick(!click); 
    const closeMobileMenu = () => setClick(false);
    const showButton = () => window.innerWidth <= 960 ? setButton(false) : setButton(true);
    const  log  = useSelector((state) => state.auth.isLoggedin);
    window.addEventListener('resize',showButton);
    const disableNav = ['/signin','/signup'];
    if (disableNav.includes(useLocation().pathname)) return null;

    const loggedIn = (
        <>
                {button ? (
                    <>
                    <li className='nav-menu' onClick={handledropClick}>
                    <Link className ='nav-profile'>
                    <img src={profileImg} alt = 'profile-pic' href='/category'/>
                    </Link>
                    {dropdown && <Dropdown />}
                    </li>
                    </>
                ): <MobilePane />
                }
        </>
    );

    const loggedOut = (
        <>
           <li className='nav-button'>
                {button ? (
                    <Link to='/signin' className='btn--link' >
                    <Button buttonStyle = 'btn--outline'>Sign In</Button></Link>
                ): (
                    <Link to='/signin' className='btn--link' onClick={closeMobileMenu} >
                    <Button buttonStyle = 'btn--outline' buttonSize ='btn--mobile'>Sign In</Button></Link>
                )}
            </li>
        </>
    );

    return (
        <>
        <IconContext.Provider value={{color:'#242424'}}>
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
                    {log ? loggedIn : loggedOut}
                </ul>
            </div>
        </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar; 