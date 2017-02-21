import React from 'react';
import User from './user/user';
import MainMenu from './menu';

require ('../../styles/components/header/_base.scss')

class Header extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return (
            <div className="headerContainer">
                <div className="container">
                     <img className="mainLogo" src="assets/logo.png" />
                    <User />
                </div>
                <div className="container">
                    <MainMenu history={history}/>
                </div>

            </div>
        )
    }
}

export default Header