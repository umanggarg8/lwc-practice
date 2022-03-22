import { LightningElement, api } from 'lwc';

export default class ChildToParentParam_child extends LightningElement {

@api account;

handleClick(event){
    event.preventDefault(); 
    const accEvent = new CustomEvent('showaccount',{detail : this.account.Id});
    this.dispatchEvent(accEvent);
}

}