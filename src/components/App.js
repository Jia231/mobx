import React from 'react';
import Table from './Table';
import Controls from './Controls';
import appStore from '../store/Store';

class App extends React.Component{
    constructor(){
        super();
    }

    render(){
        return <><Table store={appStore}/><Controls store={appStore}/></>
    }
}

export default App;