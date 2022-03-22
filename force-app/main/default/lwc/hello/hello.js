import { LightningElement } from 'lwc';

export default class Hello extends LightningElement {

    type; 

    handleDisplayName(event){
          this.type = event.target.value;
    }
}