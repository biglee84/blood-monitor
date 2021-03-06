import React from 'react'
import Card from './Card'

class CardList extends React.Component{
    constructor(props){
        super(props);
    }


    render() {
         var cardInfo = this.props.cardReadings.map(function(data,index) {
              return  <Card key={index} {...data}  />
          });
         return(
            //<div></div>
            <div className="dashboardContainer">{cardInfo}</div>
             //<Card {...this.props.cardData[0]} />
            );
      }
}
export default CardList;
