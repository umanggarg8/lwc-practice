import { LightningElement, wire } from 'lwc';
import {registerListener,unregisterAllListeners, fireEvent} from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';
import getAccountwithPicture from '@salesforce/apex/searchAccount.getAccountwithPicture';

export default class PubSubShowContacts extends LightningElement {
    name = '';
    @wire(CurrentPageReference) pageRef;
    @wire(getAccountwithPicture, {name :'$name'}) accounts;
    

    connectedCallback(){
        console.log('in doint');
        registerListener('searchKeyChange', this.handleSearchKeyChange, this);
    }

    handleSearchKeyChange(name){
        console.log(name);
        this.name = name;

    }

    disconnectedCallback() {
        unregisterAllListeners(this);
    }

    handleAccountSelect(event){
        console.log('account select');
        fireEvent(this.pageRef, 'accountSelected', event.target.account.Id);
    }


}