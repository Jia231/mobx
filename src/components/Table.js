import React from 'react';
import Rows from './Rows';
import {observer} from 'mobx-react';


class Table extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const appStore = this.props.store;
        return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Lastname</th>
                    </tr>
                </thead>
                <tbody>
                    <Rows store={appStore}/>
                </tbody>
            </table>
        </div>
        )
    }
}


export default Table;