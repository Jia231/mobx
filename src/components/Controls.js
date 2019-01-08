import React from 'react';
import Store from '../store/Store';

class Controls extends React.Component {
    constructor(props){
        super(props)
    }
    addPerson = ()=>{
        const name = prompt("The name:");
        const lastname = prompt("The lastname:");
        this.props.store.person.push({name,lastname})
    }
    render(){
        return(<div><button onClick={this.addPerson}>Add Person</button></div>)
    }
}

export default Controls;