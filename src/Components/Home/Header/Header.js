import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navvybar from '../Navvybar/Navvybar';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container" >
            <Navvybar></Navvybar>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;