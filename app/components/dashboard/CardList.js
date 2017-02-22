import React from 'react'
import Card from './Card'

class CardList extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.cardData[0]);
    }

    render() {
         var cardInfo = this.props.cardData.map(function(data) {
             return <Card {...data} />
         });
         return(
                //{cardInfo}
             //<div></div>
             <Card {...this.props.cardData[0]} />
            );
      }
}
export default CardList;
