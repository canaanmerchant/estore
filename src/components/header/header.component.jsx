import React from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-containr' to="/">
            <Logo className='logo' />
        </Link>
        <Link className='option' to='/shop'>
            SHOP
        </Link>
        <Link className='option' to='/contact'>
            CONTACT
        </Link>

        {
            currentUser ?
            <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div>
            :
            <Link className='option' to='/signin'> SIGN IN </Link>
        }
    </div>
)

export default Header;