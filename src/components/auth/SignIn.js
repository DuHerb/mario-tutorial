import React from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import useForm from "react-hook-form"

const SignIn = ({ signIn, authError, auth }) => {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => signIn(data)

  if(auth.uid) return <Redirect to='/'/>
  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)} className='white'>
        <h5 className='grey-text text-darken-3'>Sign In</h5>
        <div className='input-field'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name="email" ref={register({required: true})}/>
        </div>
        <div className='input-field'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' name="password" ref={register({required: true})}/>
        </div>
        <div className='input-field'>
          <button className='btn pink lighten-1 z-depth-0'>Login</button>
          <div className='red-text center'>
            { authError ? <p>{authError}</p> : null}
          </div>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

