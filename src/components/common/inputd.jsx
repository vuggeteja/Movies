import React from 'react';

const Inputd = ({name, label, value, onChange, type, error, ...rest }) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                {...rest}
                value={value}
                onChange={onChange}
                name={name}
                type={type}
                className="form-control" 
                id={name}>
            </input>
            {error && 
            <div className="alert alert-danger">
                {error}
            </div>}
        </div>
     );
}
 
export default Inputd;