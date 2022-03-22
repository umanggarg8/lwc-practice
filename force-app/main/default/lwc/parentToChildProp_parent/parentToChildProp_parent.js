import { LightningElement, api } from 'lwc';

export default class ParentToChildProp_parent extends LightningElement {
     percentage = 50;

    handleChange(event){
        this.percentage = event.target.value;

    }
}