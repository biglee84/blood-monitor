import  React from 'react';

//
// const App = () => <h1>Hello</h1> //stateless function

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            txt: 'this is the state text',
            cat: 0
        }
    }
    update(e){
        this.setState({txt: e.target.value})
    }
    render(){
        return(
            <div>

                <h1>{this.state.txt}</h1>
                <Widget update={this.update.bind(this)}/>
             </div>
        )
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
    txt: "this is default text"
}

const Widget = (props) =>
    <input type="text" onChange={props.update} />

export default App;
