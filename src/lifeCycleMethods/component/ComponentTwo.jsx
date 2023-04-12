import React, { Component } from 'react';

class ComponentTwo extends Component {

    // ! mounting

    constructor(props) {
        super(props)

        this.state = {
            name: "ahmed",
        }
        console.log("constructor methods from 2")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps methods from 2")
        return null;
    }
    componentDidMount() {
        console.log("componentDidMount methods from 2")
    }

    // ! updating

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate methods from 2")
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate methods from 2")
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate methods from 2")
    }

    render() {
        console.log("render methods from 2")
        return (
            <div>ComponentTwo</div>
        )
    }
}

export default ComponentTwo

