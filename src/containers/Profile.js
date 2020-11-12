import React from 'react'
import Purchases from './Purchases'
import UserInfo from './UserInfo'
export default class Profile extends React.Component {

  render(){
    const { user } = this.props

    return(
      <>
        <h1 class="h1pad">Hi {user.user.name}</h1>
        <Purchases user={user} />

      <div class="user-info">
        <UserInfo user={user} />
      </div>
      </>
    )
  }
}
