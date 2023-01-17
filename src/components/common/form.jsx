// import React, { Component } from 'react';
// import Input from './input';
// import { errors } from 'joi-browser';

// class Form extends Component {
//     state = { 
//         data: {},
//         errors:{}
//      } 

//      validate = () =>{       
//         const errors = {}
//         const { username, password } = this.state.data;
//         if(username.trim() === '')
//             errors.username = 'Username is requried';
//         if(password.trim() === '')
//             errors.password = 'Password is required';

//         return Object.keys(errors).length === 0 ? null:errors
//     }

//     validateProperty = ({name, value}) =>{
//         if(name ==='username'){
//             if(value.trim()==='') return 'Username is required'
//         }
//         if(name==='password'){
//             if(value.trim()==='') return 'Password is required'
//         }
//     }

//     handleChange = ({currentTarget:input}) =>{
//         const errors = {...this.state.errors}
//         const errorMessage = this.validateProperty(input)
//         if(errorMessage) errors[input.name] = errorMessage
//         else delete errors[input.name]
//         const data = {...this.state.data};
//         data[input.name] = input.value;
//         this.setState({data, errors});
//     }
    
//     handleSubmit = e =>{
//         e.preventDefault();
//         const errors = this.validate();
//         console.log(errors);
//         this.setState({errors: errors || {}});
//         if(errors) return;
//         this.doSubmit();
//     }

//     renderButton(label){
//         return(
//             <button disabled={this.validate()} 
//                 className='btn btn-primary'>{label}
//             </button> 
//         )
//     }

//     renderInput(name, label){
//         const {data, errors,} = this.state
//         return(<Input 
//             name={name}
//             value={data[name]} 
//             onChange={this.handleChange} 
//             User={label}
//             error={errors[name]} 
//         />)
//     }
    
// }
 
// export default Form;