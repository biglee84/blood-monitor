import React from 'react';
import CardList from './CardList.js'

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }
    tempSetTime(){
        return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60000 ).toLocaleString()
    }

    getData(){
        return [
                {type: 'single', name : 'Last Reading', time : '22/02/2017, 18:48:37', reading : '5.5'},
                {type: 'average', name : '7 Day Average', reading : '8.4'},
                {type: 'average', name : 'Monthly Average', reading : '5.4', graphData : {
                    readings : ['3','5.5','6.3','6.0']
                    }
                }
            ]
    }
    render() {
        return(

                <CardList cardData={this.getData()}/>

        )
    }
}
Dashboard.propTypes = {
    type : React.PropTypes.string.isRequired,
    name : React.PropTypes.string.isRequired,
    time : React.PropTypes.string.isRequired,
    reading : React.PropTypes.string.isRequired,
    graphData : React.PropTypes.array

};
Dashboard.defaultProps = {
    type: 'Single',
    name : 'A Reading',
    time : new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60000 ).toLocaleString(),
    reading : '7.4',
    graphData : []

};

export default Dashboard;
