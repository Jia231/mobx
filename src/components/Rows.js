import React,{Component} from 'react';
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
class Rows extends Component{

    render(){
        const {store} = this.props;
        return(
            <>
            {
                store.person.map((ele,i)=><tr key={i}><td>{ele.name}</td><td>{ele.lastname}</td></tr>)
            }
            </>
        )
    }
}


export default Rows;