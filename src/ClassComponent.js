import React from "react";
import './App.css';

class MyClassComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.fullName = "Dinesh";
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        //return <h1>My first react heading</h1>
        //return <h1>Count: {this.state.count}</h1>
        return <div className="App-style">
            <h1>Count: {this.state.count}</h1>
            <h2>FullName: {this.fullName}</h2>
            <h3>Received through props: {this.props.text}</h3>
            <h3>Received through props: {this.props.number}</h3>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
        </div>
    }
}

export default MyClassComponent