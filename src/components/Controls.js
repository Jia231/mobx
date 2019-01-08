import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Controls extends React.Component {
    addPerson = ()=>{
        const name = prompt("First name");
        const lastname = prompt("lastname");
        this.props.store.addPerson(name,lastname)
    }
    render(){
        return(<div><button onClick={this.addPerson}>Add Person</button></div>)
    }
}

export default Controls;