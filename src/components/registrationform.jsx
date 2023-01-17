// import React, { Component } from 'react';
// import Joi from 'joi-browser'
// import Form from './common/form';


// class Regform extends Form {
//     state={
//         data:{personname:'', login:'', password:''},
//         errors:{}
//     }

//     schema = {
//         personname : Joi.string.required.label("Name"),
//         login : Joi.string.required.email.label("LoginID"),
//         password : Joi.string.required.min(5).label("Password")
//     }

//     doSubmit = () => {
//         console.log("Submitted")
//     }
//     render(){
//     return(
//         <React.Fragment>
//         <div>
//         <h1 style={{ paddingTop: '30px', textAlign: 'center', paddingBottom: '30px' }}>Registration Form</h1>
//         <form  onSubmit={this.handleSubmit} style={{left: '42%', position: 'absolute'}}>
//         {/* <div class="form-group">
//             <label for='Login'>Name</label>
//             <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"></input>
//         </div>
//         <div class="form-group">
//             <label for='Login'>Login ID</label>
//             <input type="login" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Login ID"></input>
//         </div>
//         <div class="form-group">
//             <label for='Login'>Password</label>
//             <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password"></input>
//         </div>
//         <button type="submit" class="btn btn-primary">Register</button> */}
                    
//                     {this.renderInput('personname','Enter Person Name')}
                    
//                     {this.renderInput('loginid','Enter LoginID')}
                    
//                     {this.renderInput('password','Enter Password', 'password')}
                    
//                     {this.renderButton("Register")}
//         </form>
//         </div>
//         </React.Fragment>
//     )
//     }
// }    
 
// export default Regform;

import React, { Component } from 'react';
import Joi from 'joi-browser'
import * as userService from '../services/userService'
import Form1 from '../components/common/form1';
import auth from '../services/authService';
class Login extends Form1 {
    state = {
        data:{Name:'', username:'', password:''},
        errors:{}
    }

    schema = {
        Name: Joi.string().min(3).max(50).required(),
        username: Joi.string().email().min(5).max(255).required(),
        password: Joi.string().required().min(5).max(255)
    }

    doSubmit = async ()=>{
        try{
        const response = await userService.register(this.state.data);
        auth.loginWithJwt("token", response.headers["x-auth-token"])
        // window.location="/"
    }
    catch (ex){
        
        if(ex.response && ex.response.status === 400){
            const errors = {...this.state.errors}
            errors.username=ex.response.data
            this.setState({errors})
        }
        }
    }
    render() { 
        return (
            <React.Fragment>
                <h1 style={{ paddingTop: '30px', textAlign: 'center', paddingBottom: '30px' }}>Registarion Form</h1>
                <form onSubmit={this.handleSubmit} style={{left: '42%', position: 'absolute'}}>                
                {this.renderInput('Name', "Person Name",'name', 'Name')}
                {this.renderInput('username', "Mail ID",'login', 'username')}
                {this.renderInput('password', "Password",'password', 'password')}
                {this.renderButton("Register")}
                </form>
            </React.Fragment>

        );
    }
}
 
export default Login;