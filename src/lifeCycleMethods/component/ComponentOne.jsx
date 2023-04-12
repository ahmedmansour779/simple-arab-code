import React, { Component } from 'react';
import ComponentTwo from './ComponentTwo';

class ComponentOne extends Component {

    // ! Mounting

    constructor(props) {
        super(props)
        this.state = {
            name: "ahmed",
        }
        console.log("constructor methods from 1")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps methods from 1")
        return null;
    }
    componentDidMount() {
        console.log("componentDidMount methods from 1")
    }

    // ! updating

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate methods from 1")
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate methods from 1")
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate methods from 1")
    }

    changeState = () => {
        this.setState({
            name: "mansour",
        })
    }

    render() {
        console.log("render methods from 1")
        return (
            <div>
                ComponentOne
                <button onClick={this.changeState}>chang State</button>
                <ComponentTwo />
            </div>
        )
    }
}

export default ComponentOne