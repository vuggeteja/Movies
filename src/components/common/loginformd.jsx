import React, { Component } from 'react';
import Inputd from './inputd';
import Joi from 'joi-browser'
import Form1 from './form1';
import auth from '../../services/authService';

class Loginformd extends Form1 {
    state = {
        data:{username:'', password:''},
        errors:{}
    }

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }

    doSubmit = async ()=>{
    try{
        const {data} = this.state;
        await auth.login(data.username, data.password)
        window.location = '/'
    }
    catch(ex){
        if(ex.response && ex.response.status===400){
            const errors = {...this.state.errors}
            errors.username=ex.response.data
            this.setState({errors})
        }
    }
}
    render() {   
        return (
            <React.Fragment>
                <h1 style={{ paddingTop: '30px', textAlign: 'center', paddingBottom: '30px' }}>Login Form</h1>
                <form onSubmit={this.handleSubmit} style={{left: '42%', position: 'absolute'}}>                
                {this.renderInput('username', "Login ID",'login', 'username')}
                {this.renderInput('password', "Password",'password', 'password')}
                {this.renderButton("Login")}
                </form>
            </React.Fragment>
        );
    }
}
 
export default Loginformd;