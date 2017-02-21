import React, {
    Component,
    PropTypes,
} from 'react';

require ('../../styles/components/header/_user.scss')

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {isUserMenuVisible: false};

        // This binding is necessary to make `this` work in the callback
        this.showUserMenu = this.showUserMenu.bind(this);
    }
    showUserMenu(e){
        e.preventDefault();
        this.setState(prevState => ({
            isUserMenuVisible: !prevState.isToggleOn
        }));
        alert('I have been clicked')
    }
    render() {
        return (
            <div className="userContainer" onClick={this.showUserMenu}>
                <img src={this.props.avatar} />
                <span>{this.props.username}</span>
                {
                    this.state.isUserMenuVisible
                        ? <userMenu />
                        : null
                }
                {}
            </div>
        );
    }
}

User.propTypes = {
    username: React.PropTypes.string,
    avatar: React.PropTypes.string

};
User.defaultProps = {
    username : 'Mr A User',
    avatar : 'assets/avatar.png',
};

export default User;
