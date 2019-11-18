import React, { Component }  from 'react';

class Counter extends Component {
    state = {  
        count : 0,
        imageUrl:'https://picsum.photos/50',
        tags : ['tag1','tag2','tag3']
    }
    constructor(){
        super();
        //this.onIncremenClick = this.onIncremenClick.bind(this);
    }
    onIncremenClick ()  {
        /*this.state.count = this.state.count + 1
        this.setState(this.state);*/
        console.log("this = ", this);
    }
    onIncrementHandler = () => {
        const newState= {imageUrl:'https://picsum.photos/100',
                        count:this.state.count + 1,
                        other:122};
        this.setState(newState);
        console.log("this = ", this);
    }
    render() { 
        return ( 
            <div>    
                <img src={this.state.imageUrl}></img>
                <span className={this.getBadgeClasses()}> {this.formatCount()}</span> 
                {this.renderTags()}
                <button className="btn btn-secondary btn-sm" onClick={this.onIncrementHandler}>Increment</button>
            </div>        
            );
    }
    renderTags() {
        if (this.state.tags.length === 0) return 'There are no Tags!' 
        return <ul>
                {this.state.tags.map(tag => <li key={tag}>tag</li>)}
                </ul>;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;