import { LightningElement, wire, track } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import {registerListener,unregisterAllListeners} from 'c/pubsub';

export default class ComponentSubscriber extends LightningElement {

 @wire(CurrentPageReference) pageRef;
 @track objNameInfo = {};

 connectedCallback(){
     registerListener("eventName",this.displayName,this);
 }

 displayName(nameDate){
      this.objNameInfo = nameDate;
 }

}