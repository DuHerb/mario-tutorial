// import React, { Component } from 'react'
import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions'
import useForm from "react-hook-form"

const SignUp = (props) => {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => props.signUp(data)
  const { auth, authError } = props;

  if(auth.uid) return <Redirect to='/'/>
    return (
      <div className='container'>
        <form onSubmit={handleSubmit(onSubmit)} className='white'>
          <h5 className='grey-text text-darken-3'>Sign Up</h5>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input name='email' type='email' id='email' ref={register({required: true})}/>
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name="password" ref={register({required: true})}/>
          </div>
          <div className='input-field'>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' id='firstName' name="firstName" ref={register({required: true})}/>
          </div>
          <div className='input-field'>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' id='lastName' name="lastName" ref={register({required: true})}/>
          </div>
          <div className='input-field'>
            <button className='btn pink lighten-1 z-depth-0'>Sign Up</button>
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
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
