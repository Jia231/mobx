import React from 'react';
import Rows from './Rows';
import {observer} from 'mobx-react';

@observer
class Table extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
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
                    <Rows/>
                </tbody>
            </table>
        </div>
        )
    }
}


export default Table;