import React, {
    Component,
    PropTypes,
} from 'react';

import UserMenu from './userMenu';

require ('../../../styles/components/header/_user.scss')

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {isUserMenuVisible: false};

    }
    componentDidMount(){
        this.setState({isUserMenuVisible: false})
    }
    showUserMenu(e){
        e.preventDefault();
        this.setState(prevState => ({
            isUserMenuVisible: !prevState.isUserMenuVisible
        }));

    }
    render() {
        return (
            <div className="userContainer">
                <div onClick={(evt) => this.showUserMenu(evt)} className={this.state.isUserMenuVisible ? 'active' : ''}>
                    <img src={this.props.avatar} />
                    <span>{this.props.username}</span>
                </div>
                {
                    this.state.isUserMenuVisible ? <div className="userMenu"><UserMenu /> </div> : null
                }
            </div>
        );
    }
}

User.propTypes = {
    username: React.PropTypes.string,
    avatar: React.PropTypes.string,
    userMenu: React.PropTypes.node


};
User.defaultProps = {
    username : 'Mr A User',
    avatar : 'assets/avatar.png',
};

export default User;
