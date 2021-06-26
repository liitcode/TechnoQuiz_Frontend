/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { MdFingerprint } from 'react-icons/md'
import { IconContext } from 'react-icons/lib';
import { AvatarGenerator } from 'random-avatar-generator';
import { Dropdown, Premium } from './dropdown';
import MobilePane from './mobilePane';
import { Button } from '../Button';
import './navbar.scss';

function Navbar() {
    const [profileImg, setProfileimg] = useState('');
    const [click, setClick] = useState(false);
    const [button, setButton] = useState();
    const [dropdown, setDropdown] = useState(false);
    const [premiumDetails, setPremiumDetails] = useState(false);

    useEffect(() => {
        setProfileimg(new AvatarGenerator().generateRandomAvatar());
        // eslint-disable-next-line no-unused-expressions
        window.innerWidth > 960 ? setButton(true) : setButton(false);
    }, []);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => window.innerWidth < 960 ? setButton(false) : setButton(true);
    const onMouseEnter = () => window.innerWidth < 960 ? setDropdown(false) : setDropdown(true);
    const onMouseLeave = () => window.innerWidth < 960 ? setDropdown(false) : setDropdown(false);

    const onmouseEnter = () => window.innerWidth < 960 ? setPremiumDetails(false) : setPremiumDetails(true);
    const onmouseLeave = () => window.innerWidth < 960 ? setPremiumDetails(false) : setPremiumDetails(false);

    const log = useSelector((state) => state.auth.isLoggedin);
    const premium = useSelector((state) => state.auth.isPremium);
    window.addEventListener('resize', showButton);

    const disableNav = ['/signin', '/signup'];
    if (disableNav.includes(useLocation().pathname)) return null;

    const loggedIn = (
        <>
            {button ? (
                <>
                    <li className='nav-menu' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link className='nav-profile'>
                            <img src={profileImg} alt='profile-pic' href='/category' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                </>
            ) : <MobilePane premium={premiumDetails} />
            }
        </>
    );

    const loggedOut = (
        <>
            <li className='nav-button'>
                {button ? (
                    <Link to='/signin' className='btn--link' >
                        <Button buttonStyle='btn--outline'>Sign In</Button></Link>
                ) : (
                    <Link to='/signin' className='btn--link' onClick={closeMobileMenu} >
                        <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>Sign In</Button></Link>
                )}
            </li>
        </>
    );

    const premiumMenu = (
        <>
            {!premium ?
                <li className='nav-item'>
                    <Link to='/premium' className='nav-links' onClick={closeMobileMenu}>Premium</Link>
                </li> :
                <li className='nav-item' onMouseEnter={onmouseEnter} onMouseLeave={onmouseLeave}>
                    <div className='nav-links' onClick={closeMobileMenu}>Premium</div>
                    {premiumDetails && <Premium />}
                </li>
            }
        </>
    );

    return (
        <>
            <IconContext.Provider value={{ color: '#242424' }}>
                <div className='navbar'>
                    <div className='navbar-container container'>
                        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                            <MdFingerprint className='navbar-icon' />TechnoQuiz
                        </Link>
                        <div className='nav-menu-icon' onClick={handleClick} onKeyDown={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                            {premiumMenu}
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