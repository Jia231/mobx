import { observable, computed, action } from "mobx";

class Store{
   @observable person = [
        {name:"John" , lastname:"Doe"},
        {name:"Richard",lastname:"Roe"}
    ]

    @action
    addPerson = (n,l)=>{
        const name = n;
        const lastname = l;
        this.person.push({name,lastname})
    }

    @computed get PersonCount (){
        return this.person.length;
    }
}


const appStore = new Store();

export default appStore;