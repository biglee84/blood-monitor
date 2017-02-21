import React, {
    Component,
    PropTypes,
} from 'react';

require ('../../styles/components/header/_user.scss')

class User extends Component {
    render() {
        return (
            <div className="userContainer">
                <img src={this.props.avatar} />
                <span>{this.props.username}</span>
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
