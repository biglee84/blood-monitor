import React from 'react';
import User from './user';

require ('../../styles/components/header/_base.scss')

class Header extends React.Component {
    render(){
        return (
            <div className="headerContainer">
                <div className="container">
                    <img className="mainLogo" src="assets/logo.png" />
                    <User />
                </div>
            </div>
        )
    }
}

export default Header