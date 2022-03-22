import { LightningElement } from 'lwc';

export default class ComponentChild2 extends LightningElement {
    cusMessage = 'Navigation From Child Component to Parent Component!!';
    handleClick(){
        const evt = new CustomEvent('cusevent',{
            detail : this.cusMessage
        });
        this.dispatchEvent(evt);
    }
}