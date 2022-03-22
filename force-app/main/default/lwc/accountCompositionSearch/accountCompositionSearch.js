import { LightningElement, wire } from 'lwc';
import getAccountwithPicture from '@salesforce/apex/searchAccount.getAccountwithPicture';

export default class AccountCompositionSearch extends LightningElement {
accName;

@wire(getAccountwithPicture, {name : '$accName'}) accounts;

handleChange(event){
    this.accName = event.target.value;
}


}