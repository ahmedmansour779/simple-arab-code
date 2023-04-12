import { Component, React } from "react";

class ClassBasics extends Component {
    state = {
        count: 0
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({ count: this.state.count + 1 })
                }}>plus</button>
                <button onClick={() => {
                    this.setState({ count: this.state.count - 1 })
                }}>miens</button>
                <button onClick={() => {
                    this.setState({ count: 0 })
                }}>reset</button>
                {this.state.count}
            </div>
        )
    }
}

export default ClassBasics;