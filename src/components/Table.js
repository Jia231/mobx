import React from 'react';
import Rows from './Rows';

class Table extends React.Component{
    
    render(){
        const person = [
        {name:"John",lastname:"Doe"}
        ]
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
                    <Rows people={person}/>
                </tbody>
            </table>
        </div>
        )
    }
}

export default Table;