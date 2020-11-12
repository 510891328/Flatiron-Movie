import React from 'react'
import Purchases from './Purchases'
import UserInfo from './UserInfo'
export default class Profile extends React.Component {

  render(){
    const { user } = this.props

    return(
      <>
        <h1 style={{textAlign: "center"}}>{user.user.name}'s Profile</h1>
        <h2 class="h1pad">Your Purchases </h2>
        <div class="cardContainer">
          <Purchases user={user} />
        </div>
      <div class="user-info">
        <UserInfo user={user} />
      </div>
      </>
    )
  }
}
