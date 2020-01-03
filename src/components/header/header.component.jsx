import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';


import './header.styles.scss';
import { HeaderContainer, LogoContainer, OptionContainer, OptionLink } from './header.styles';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
            <LogoContainer to="/"> 
                <Logo className='logo' />
            </LogoContainer>
        <OptionContainer>
            <OptionLink as='div'  to='/shop'>
                SHOP
         </OptionLink>
            <OptionLink as='div'  to='/contact'>
                CONTACT
         </OptionLink>

        {
            currentUser ?
        <OptionLink onClick={() => auth.signOut()}> SIGN OUT </OptionLink>
            :
             <OptionLink to='/signin'> SIGN IN </OptionLink>
        }
        
            <CartIcon />
        </OptionContainer>
        {  hidden ? null :
        <CartDropdown />}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header);