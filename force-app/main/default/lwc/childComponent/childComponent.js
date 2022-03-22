import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api firstname='';
    @api lastname='';
    fullname = '';
    hasName = false;

    @api
    showFullName(){
        this.fullname = this.firstname + ' ' + this.lastname; 
        if(this.fullname !== null){
            this.hasName = true;
        }
    }
}