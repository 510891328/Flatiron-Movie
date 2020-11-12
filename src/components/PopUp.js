import React from 'react'


const PopUp = (props) => {
  
  const buttonDisplay = () => {
    if (!props.user){
      return(
        <div className="popUpButton">
          <button onClick={() => clickHandler('login')}>Log in</button>
          <button onClick={() => clickHandler('signup')}>Sign up</button>
        </div>
      ) 
    } else {
      return null
    }
  }

  const clickHandler = (e) => {
    if (e === 'login'){
      console.log(props)
      props.routerProps.history.push('/login')
    } else {
      console.log(props)
      props.routerProps.history.push('/signup')
    }
  }

  return(
    
    <div className='modal-mask' onClick={() => {props.closePopUp()}}>
      {console.log(props)}
      <div className="modal-thing">
        <h1>
          {props.message}
        </h1>
        {buttonDisplay()}
      </div>
    </div>
  )
}

export default PopUp