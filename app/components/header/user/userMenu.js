import React from 'react';
import { Link } from 'react-router';

const UserMenu = (props) => (
    <ul>
        <li><Link to={`/settings`}><i className="fa fa-cog" aria-hidden="true"></i> Settings</Link></li>
        <li><i className="fa fa-sign-out" aria-hidden="true"></i>Log Out</li>
    </ul>
);

export default UserMenu;



