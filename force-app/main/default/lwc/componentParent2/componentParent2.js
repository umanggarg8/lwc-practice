import { LightningElement } from 'lwc';

export default class ComponentParent2 extends LightningElement {
    showMessage;
    hasEventOccured = false;
    handlePress(event){
     this.hasEventOccured = true;
     this.showMessage = event.detail;
    }
}