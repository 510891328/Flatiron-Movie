import React from 'react'
import Purchases from './Purchases'
import UserInfo from './UserInfo'
export default class Profile extends React.Component {
  
  render(){
    const { user } = this.props

    return(
      <div className="stars twinkling clouds">
        <h1>Hi {user.user.name}</h1>
        <Purchases user={user} />
        <UserInfo user={user} />
      </div>
    )
  }
}
