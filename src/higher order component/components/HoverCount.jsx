import React, { Component } from 'react'
import WithCounter from './WithCounter'

class HoverCount extends Component {
    render() {
        const { count, handelIncrement } = this.props
        return (
            <div>
                <button onMouseOver={handelIncrement}>
                    clicked {count} times
                </button>
            </div>
        )
    }
}

export default WithCounter(HoverCount, 2)