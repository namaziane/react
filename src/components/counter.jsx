import React, { Component }  from 'react';

class Counter extends Component {
    state = {  
        count : 0,
        imageUrl:'https://picsum.photos/50',
        tags : [{
            name :  "tag0",
            count :0
        },{
            name :  "tag1",
            count :0
        }]
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
    handleIncrement = (product) => {
        console.log(product);
        this.setState({
                imageUrl:'https://picsum.photos/100',
                count: this.state.count + 1
        });
    }
    doHandleIncrement = () => {
        this.handleIncrement ({id : 1});
    }
    render() { 
        return ( 
            <div>    
                <img src={this.state.imageUrl}></img>
                <span className={this.getBadgeClasses()}> {this.formatCount()}</span> 
                {this.renderTags()}
                <button className="btn btn-secondary btn-sm" onClick={() => this.handleIncrement ({id : 1})}>Increment</button>
            </div>        
            );
    }
    onTagClick =  (tag) => {
            let ta = [];
            this.state.tags.forEach(a => {
                if(a.name === tag.name){
                    ta.push({
                        name :  tag.name,
                        count : a.count +1
                    });
                }else{
                    ta.push(a);
                }
            });
            this.setState({tags : ta})

    }
    renderTags() {
        if (this.state.tags.length === 0) return 'There are no Tags!' 
        return <ul>
                {this.state.tags.map(tag => <li key={tag.name} onClick = {() => this.onTagClick(tag)} >{tag.name} {tag.count}</li>)}
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