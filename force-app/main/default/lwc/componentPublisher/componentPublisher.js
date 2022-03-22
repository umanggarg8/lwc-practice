import { LightningElement, wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import {fireEvent} from 'c/pubsub';

export default class ComponentPublisher extends LightningElement {
    firstName = '';
    lastName = '';
    objName = {};

    fetchFirstName(event){
        this.firstName = event.target.value;
    }

    fetchLastName(event){
        this.lastName = event.target.value;
    }

    @wire(CurrentPageReference) pageRef;
    handleClick(){
        this.objName.sFirst = this.firstName;
        this.objName.sLast = this.lastName;
        fireEvent(this.pageRef,"eventName",this.objName);
    }

}