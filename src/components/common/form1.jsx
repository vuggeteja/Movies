import { result } from 'lodash';
import React, { Component } from 'react';
import Inputd from './inputd';
import Select from './select';
import Joi from 'joi-browser';

class Form1 extends Component {
    state = { 
        data:{},
        errors:{}
     } 

     validate=()=>{
        const result = Joi.validate(this.state.data, this.schema, { abortEarly: false} )
        if(!result.error) return null
        const errors = {}
        // const {data} = this.state;
        // if(data.username.trim()==='')
        //     errors.username = 'Username is required'
        // if(data.password.trim()==='')
        //     errors.password = 'Password is required'
        // return Object.keys(errors).length === 0 ? null:errors
        
        for(let item of result.error.details)
            errors[item.path[0]] = item.message
        return errors
    }

    validateProperty = ({name,value}) =>{
        const obj = { [name]:value}
        const schema = {[name]: this.schema[name]}
        const {error} = Joi.validate(obj,schema)
        return error ? error.details[0].message : null
        // if(name==='Name'){
        //     if(value.trim()==='') return 'Person Name is required'}
        // if(name==='username'){
        //     if(value.trim()==='') return 'Username is required'}
        // if(name==='password'){
        //     if(value.trim()==='') return 'Password is required'}
    }

    handleSubmit = e =>{
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors:errors || {}})
        if(errors) return
        this.doSubmit();
    }

    handleOnchange = ({currentTarget: input}) =>{
        const errorMessage = this.validateProperty(input);
        const errors = {...this.state.errors}
        if(errorMessage) errors[input.name]=errorMessage;
        else delete errors[input.name];
        const data = {...this.state.data}
        data[input.name] = input.value
        this.setState({data, errors})
    }

    renderButton(label){
        return(
            <button 
                disabled={this.validate()} 
                type="submit" 
                className="btn btn-primary">
                {label}
            </button>)
    }

    renderSelect(name, label, options){
        const {data, errors} = this.state
        return(
            <Select name={name} label={label} value={data[name]} options={options} onChange={this.handleOnchange} error={errors[name]}></Select> 
         )
    }

    renderInput(name, label, type){
        const { data, errors } = this.state;
        return(
            <Inputd 
                className="form-control"
                name={name} 
                label={label} 
                rvalue={data[name]} 
                onChange={this.handleOnchange}  
                type={type} 
                error={errors[name]}>
            </Inputd>)
    }
}
 
export default Form1;