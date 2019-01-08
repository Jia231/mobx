import React from 'react';
import Table from './Table';
import Controls from './Controls';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {PersonStore} = this.props.store;
        return <><Table store={PersonStore}/><Controls/></>
    }
}

export default App;