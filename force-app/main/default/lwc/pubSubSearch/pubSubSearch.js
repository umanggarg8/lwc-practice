import { LightningElement, wire } from 'lwc';
import {fireEvent} from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';

export default class PubSubSearch extends LightningElement {

    @wire(CurrentPageReference) pageRef;

    handleSearchKey(event){
        fireEvent(this.pageRef, 'searchKeyChange', event.target.value);
    }
}