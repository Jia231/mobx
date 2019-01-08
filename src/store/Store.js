import { observable } from "mobx";

class Store{
    person = [
        {name:"John" , lastname:"Doe"},
        {name:"Richard",lastname:"Roe"}
    ]
    constructor(){
        this.person = observable([])
    }
}



export const appStore = new Store();
