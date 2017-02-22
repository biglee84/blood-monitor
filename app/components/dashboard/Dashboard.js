import React from 'react';
import getData from '../../utils/helpers';
import CardList from './CardList.js'

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lastReading: [],
            weeklyAverage: []
        }
    }
    componentDidMount(){
        var data = getData()
            this.setState({
                lastReading: data.lastReading,
                weeklyAverage: data.weeklyAverage
            })
    }

    render() {
        return(
            <CardList cardData={this.state}/>

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
