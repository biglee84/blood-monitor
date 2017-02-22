import React from 'react';
import  {Link} from 'react-router';
import MainMenu from './menu';

require ('../../styles/components/header/_base.scss')

const Header = (props) => (
    <div className="headerContainer">
        <div className="container">
            <Link to="/"><img className="mainLogo" src="assets/logo.png" /></Link>
        </div>
        <div className="container">
            <MainMenu history={history}/>
        </div>

    </div>
);

export default Header