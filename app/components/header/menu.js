import React from 'react';
import { Router, Link } from "react-router"

class MainMenu extends React.Component {

    render(){
        return (
            <ul>
               <li> <Link to={`/log`}>log Reading</Link></li>

       </ul>
        )
    }
}

export default MainMenu

