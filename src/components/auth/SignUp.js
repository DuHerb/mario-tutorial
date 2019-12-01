// import React, { Component } from 'react'
import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions'
import { Formik, Form, useField } from "formik"
import * as Yup from 'yup'

const TextInput = ({ label, ...props}) => {
  const [field, meta] = useField(props)
  return (
    <>
      {/* <label htmlFor={props.id || props.name}>{label}</label> */}
      <input className="input-field" {...field} {...props} />
      {meta.touched && meta.error ? (
      <div className="error">{meta.error}</div>) : null}
    </>
  )
}

const SignUp = ({auth, authError, signUp}) => {

  if(auth.uid) return <Redirect to='/'/>
    return (
      <div className='container'>
        <Formik
                initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  password: ''
                }}
                validationSchema={Yup.object({
                  firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required')
                })}
                onSubmit={(values, { setSubmitting }) => {
                  signUp(values)
                  setSubmitting(false)
                }}
        >
          <Form className='white'>
            <h5 className='grey-text text-darken-3'>Sign Up</h5>
            <TextInput
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
            />
              <TextInput
              label="password"
              name="password"
              type="password"
              placeholder="password"
            />
            <TextInput
              label="firstName"
              name="firstName"
              type="text"
              placeholder="firstName"
            />
              <TextInput
              label="lastName"
              name="lastName"
              type="text"
              placeholder="lastName"
            />
            <div className='input-field'>
              <button type="submit" className='btn pink lighten-1 z-depth-0'>Sign Up</button>
              <div className='red-text center'>
                { authError ? <p>{authError}</p> : null}
              </div>
            </div>
          </Form>
        </Formik>
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
