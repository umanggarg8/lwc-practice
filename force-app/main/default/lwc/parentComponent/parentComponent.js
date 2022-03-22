import { LightningElement } from 'lwc';
import myLabel from '@salesforce/label/c.TestLWC';

export default class ParentComponent extends LightningElement {

    showFullNameInChild(){
        this.template.querySelector('c-child-component').showFullName();
    }

    label = {myLabel};
}