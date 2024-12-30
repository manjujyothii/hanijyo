//Updating
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
class Test4 extends Component
{
    constructor(props)
    {
        super(props);
        this.state={favoriteColor : "red"};
    }
    static getDerivedStateFromProps(props,state)
    {
        return{favoriteColor : "blue"};
    }
    changeColor=()=>
    {
        this.setState({favoriteColor:"yellow"});
    }
        render()
        {
            return(
                <>
                <h1>My favoriteColor = {this.state.favoriteColor}</h1>
                <button type='button' onClick={this.changeColor}>Click to Change</button>
                </>
            );
        }
    }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render = <Test4/>
export default Test4