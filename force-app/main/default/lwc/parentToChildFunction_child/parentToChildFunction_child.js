import { LightningElement, api } from 'lwc';

export default class ParentToChildFunction_child extends LightningElement {
    time = new Date();
    @api getTime(){
        console.log('in method');
       this.time = new Date();  
    }
}