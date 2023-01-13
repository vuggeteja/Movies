import React, { Component } from 'react';

class Surya extends Component {  

    state ={
        count : 0,
        item : [{name:"Surya", Age: '30'},{name:"Teja", Age:'20'}] 
    }
    
    // Inc() {
    //     count = this.state.count + 1
    // }

    render() {
        const { count, item, filter } = this.props
        const item1 = [{name:"Ravi", Age:'25'}]
        
        
        // const comb = [...item, ...item1]
        // const filter = item.filter(filt => filt.Age !== '30') 
        //        console.log(filter)

      
        
        // console.log(comb)
        // console.log(this.state.count)
        
        return (
            <React.Fragment>
            <div>
                <ul>
                    {this.state.item.map(arr=>(<li key={arr}>{arr}</li>))}
                </ul>
                {/* {comb} */}
               
                {/* <button onClick={ () => Inc() }>Count {count}</button> */}
            </div>
            <ul>
                {filter.map(fil=>{
                    return<li key={item.name}>
                        <p>{fil}</p>
                    </li>})}
            </ul>
            </React.Fragment>
        );
    }
}
 
export default Surya;