import React from 'react';
import User from './user';

class Header extends React.Component {
    render(){
        return (
            <div className="headerContainer">
               <User />
            </div>
        )
    }
}

export default Header