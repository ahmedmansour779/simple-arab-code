import React, { Component } from 'react'

const WithCounter = (OriginalComponent, incrementNumper) => {
    return class WithCounter extends Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0,
            }
        }

        handelIncrement = () => {
            this.setState((preState) => {
                return {
                    count: preState.count + incrementNumper
                }
            })
        }

        render() {
            return (
                <OriginalComponent
                    count={this.state.count}
                    handelIncrement={this.handelIncrement}
                    {...this.props}
                />
            )
        }
    }

}

export default WithCounter