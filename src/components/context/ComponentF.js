import React from 'react'
import {UserContext, ChannelContext} from '../../App'

function ComponentF() {
  return (
    <div>
     <ChannelContext.Consumer>
       {
         channel=>{
           return(<UserContext.Consumer>
            {
              user => {

                return(<div>I am {user} from  {channel}</div>);
              }
            }

           </UserContext.Consumer>)
         }
       }
     </ChannelContext.Consumer>
    </div>
  )
}

export default ComponentF
