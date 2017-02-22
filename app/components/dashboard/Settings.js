import React, {
    Component,
    PropTypes,
} from 'react';
import Router from 'react-router'

class Settings extends Component {

    constructor(props) {
        super(props)
        console.log(props)


    }


    render() {
        return (
            <div>
                Settings
            </div>
        );
    }
}

Settings.propTypes = {
};
Settings.defaultProps = {

};

export default Settings;
