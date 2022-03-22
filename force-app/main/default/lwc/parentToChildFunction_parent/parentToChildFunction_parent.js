import { LightningElement } from 'lwc';

export default class ParentToChildFunction_parent extends LightningElement {

handleClick(){
    this.template.querySelector('c-parent-to-child-function_child').getTime();
}
}