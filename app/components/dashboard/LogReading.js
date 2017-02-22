import React, {
    Component,
    PropTypes,
} from 'react';
import Router from 'react-router'

class LogReading extends Component {

    constructor(props) {
        super(props)
        console.log(props)


    }
    submitReading(){
        this.props.router.transitionTo("/home/")
    }

    render() {
        return (
            <form  onSubmit={(e) => this.submitReading(e)}>
                <button type="submit"> Submit Reading </button>
            </form>
        );
    }
}

LogReading.propTypes = {
};
LogReading.defaultProps = {

};

export default LogReading;
