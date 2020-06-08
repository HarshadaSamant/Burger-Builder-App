import React from 'react';
import burgerLogo from '../../assets/Images/logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} alt="BurgerLogo">
        <img src={burgerLogo} />
    </div>
);

export default logo;