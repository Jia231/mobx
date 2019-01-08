import React from 'react';

const Rows = ({store})=>(store.person.map((ele,key)=><tr key={key}>
    <td>{ele.name}</td>
    <td>{ele.lastname}</td>
</tr>) 
)


export default Rows;