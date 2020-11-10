import React from 'react'
import Purchases from './Purchases'
import UserInfo from '../components/UserInfo'
export default class Profile extends React.Component {
  
  render(){
    const { user } = this.props
    console.log(user);
    return(
      <div>
        <h1>Hi {user.user.name}</h1>
        <Purchases user={user} />
        <UserInfo user={user} />
      </div>
    )
  }
}
