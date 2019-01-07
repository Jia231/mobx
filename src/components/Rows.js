import React from 'react';

const Rows = ({people})=>(people.map((ele,key)=><tr key={key}>
    <td>{ele.name}</td>
    <td>{ele.lastname}</td>
</tr>) 
)


export default Rows;