import React, { useEffect } from 'react'
import './LoginForm.css'
import { useState } from 'react'
import {BASE_URL} from '../utils/constants/constants.js'

function LoginForm(props) {
	const [userInfo, setUserInfo] = useState({
		username: '',
		email: '',
		password: '',
	})
	const [isValidUserName, setIsValidUserName] = useState(null)
	const [isValidEmail, setisValidEmail] = useState(null)
	const [isValidPassword, setIsValidPassword] = useState(null)
	const [isValid, setIsValid] = useState(false)

	const onChangeUserInfoHandler = (e) => {
		const currentData = e.target.name
		setUserInfo((prevState) => {
			return {
				...prevState,
				[currentData]: e.target.value,
			}
		})
	}

	const validEmailRegex = RegExp(
		/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
	)
	const validateUserName = RegExp(/[0-9]/)
	const validatPassword = RegExp(/[0-9]/)

	const onBlurUserNameHandler = () => {
		if (validateUserName.test(userInfo.username)) {
			setIsValidUserName(true)
		} else {
			setIsValidUserName(false)
		}
	}

	const onBlurUserEmailHandler = () => {
		if (validEmailRegex.test(userInfo.email)) {
			setisValidEmail(true)
		} else {
			setisValidEmail(false)
		}
	}

	const onBlurUserPasswordHandler = () => {
		if (validatPassword.test(userInfo.password)) {
			setIsValidPassword(true)
		} else {
			setIsValidPassword(false)
		}
	}
	useEffect(() => {
		setIsValid(isValidEmail && isValidPassword && isValidUserName)
	}, [isValidEmail, isValidPassword, isValidUserName])

	const onLoginHandler = (e) => {
		e.preventDefault()
		props.setIsValidet(true)
		fetch(`${BASE_URL}/users.json`,{
			method: 'POST',
			body:JSON.stringify(userInfo),
			headers:{
				'Content-type':'aplication/json'
			}
		})
	}

	return (
		<form className='Form' onSubmit={onLoginHandler}>
			<h3 className='H3'>Login Here</h3>

			<label className='Label'>Username</label>
			<input
				className='Input'
				type='text'
				placeholder='Username or Nickname'
				id='username'
				name='username'
				value={userInfo.username}
				onChange={onChangeUserInfoHandler}
				onBlur={onBlurUserNameHandler}
			/>
			{isValidUserName === false&& (
				<label className='warning'>UserName must have digits</label>
			)}
			<label className='Label'>User Email</label>
			<input
				className='Input'
				type='text'
				placeholder='Email or Phone'
				id='userEmail'
				value={userInfo.email}
				name='email'
				onChange={onChangeUserInfoHandler}
				onBlur={onBlurUserEmailHandler}
			/>
			{isValidEmail === false&& (
				<label className='warning'>UserEmail is not valid</label>
			)}

			<label className='Label'>Password</label>
			<input
				className='Input'
				type='password'
				placeholder='Password'
				id='password'
				value={userInfo.password}
				name='password'
				onChange={onChangeUserInfoHandler}
				onBlur={onBlurUserPasswordHandler}
			/>
			{isValidPassword === false&& (
				<label className='warning'>UserPassword is not valid</label>
			)}

			<button disabled={!isValid} type='sumbit' className='Login__button'>
				Login
			</button>
		</form>
	)
}

export default LoginForm
