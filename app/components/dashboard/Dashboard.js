import React from 'react';
import getData from '../../utils/helpers';
import CardList from './CardList.js'

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardReadings: []
        }
    }
    componentDidMount(){
        getData().then(function(data){
            let formattedData = data.cardReadings[0].data.concat(data.cardReadings[1].data);
            this.setState({
                cardReadings: formattedData
            })
        }.bind(this))

    }


    render() {
        return(
           // <div></div>
            <CardList cardReadings={this.state.cardReadings}/>

        )
    }
}
Dashboard.propTypes = {
    cardReadings: React.PropTypes.array.isRequired,
};
Dashboard.defaultProps = {
    cardReadings: [],
};

export default Dashboard;
