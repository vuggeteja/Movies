import React, { Component } from 'react';


class New extends Component {
    state = { 
        count :0,
        name :['Surya', 'Teja','Vugge']
     } 
    render() { 
        return (
            <div>
                <ul>
                {this.state.name.map(nam=><li key={nam}>{nam}</li>)}
                </ul>
            </div>
            
        );
    }
}


 
export default New;