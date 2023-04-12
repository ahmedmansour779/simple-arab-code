import { React, useContext } from 'react';
import { ChannelContext, UserContext } from '../../App';

const CompontentC = () => {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    return (
        <>
            <div>                           {/* this first way */}
                <UserContext.Consumer>
                    {(user) => {
                        return (
                            <ChannelContext.Consumer>
                                {(channel) => {
                                    return <h1>my name is {user}, channel is {channel}</h1>
                                }}
                            </ChannelContext.Consumer>
                        )
                    }}
                </UserContext.Consumer>
            </div><br />
            <div>                   {/* this second way */}
                <h1>my name is {user}, channel is {channel}</h1>
            </div>
        </>
    )
}

export default CompontentC