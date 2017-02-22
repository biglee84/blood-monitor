import React from 'react';
import CardList from './CardList.js'

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    getData(){
        return [{name : 'A Reading', reading : '7.4'}]
    }
    render() {
        return(
            <div className="dashboardContainer">
                <CardList cardData={this.getData()}/>
            </div>
        )
    }
}
Dashboard.propTypes = {
    name : React.PropTypes.string,
    value : React.PropTypes.string,
    graphData : React.PropTypes.array

};
Dashboard.defaultProps = {
    name : 'A Reading',
    reading : '7.4',
    graphData : []

};

export default Dashboard;
