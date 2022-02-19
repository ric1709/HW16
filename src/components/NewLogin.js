import React from 'react';
import LoginForm from './LoginForm';
import './NewLogin.css'

function NewLogin(props) {

    return (
        <div>
            <div className='background'>
				<div className='shape'></div>
				<div className='shape'></div>
			</div>
            <LoginForm  setIsValidet={props.setIsvalidet}/>
        </div>
    );
}

export default NewLogin;