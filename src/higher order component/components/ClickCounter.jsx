import React, { Component } from 'react'
import WithCounter from './WithCounter'

class ClickCounter extends Component {
    render() {
        const { count, handelIncrement } = this.props
        return (
            <div>
                <button onClick={handelIncrement}>
                    {this.props.name} clicked {count} times
                </button>
            </div>
        )
    }
}
export default WithCounter(ClickCounter, 1)