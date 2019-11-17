import React, { Component }  from 'react';

class Counter extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>                 
                <h1>Hello React</h1> 
                <button>Increment</button>
            </React.Fragment>        
            );
    }
}
 
export default Counter;