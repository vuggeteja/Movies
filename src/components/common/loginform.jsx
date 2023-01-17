// import React, { Component } from 'react';
// import Joi from 'joi-browser'
// import Form from './form';

// class Loginform extends Form {
//     state = {
//         data: { username:"", password:""},
//         errors: {}
//     }

//     schema = {
//         username : Joi.string.required,
//         password : Joi.string.required
//     }

//     doSubmit = () => {
//         console.log("Submitted")
//     }
    
//     render() { 
//         return (
//             <React.Fragment>
//             <div>
//                 <h1 style={{ paddingTop: '30px', textAlign: 'center', paddingBottom: '30px' }}>Login Form</h1>
//                 <form onSubmit={this.handleSubmit} style={{left: '42%', position: 'absolute'}}>
//                     {this.renderInput('username','Username')}
//                     {this.renderInput('password','Password')}
//                     {this.renderButton("Login")}
//                 </form>
//             </div> 
//             </React.Fragment>
//         );
//     }
// }
 
// export default Loginform;