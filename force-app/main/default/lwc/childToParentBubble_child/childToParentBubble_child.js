import { LightningElement, api } from 'lwc';

export default class ChildToParentBubble_child extends LightningElement {
    @api account;

    handleSelect(event){

        event.preventDefault();
        const newEvnt = new CustomEvent('selectchange',{
            bubbles : true
        });
        this.dispatchEvent(newEvnt);
    }

}

