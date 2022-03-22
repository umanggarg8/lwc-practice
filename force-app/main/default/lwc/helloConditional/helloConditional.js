import { LightningElement } from 'lwc';

export default class HelloConditional extends LightningElement {
    
    booleanValue = false;

    //for each example
    contacts = [
        {
            Id: '003171931112854375',
            Name: 'Amy Taylor',
            Title: 'VP of Engineering'
        },
        {
            Id: '003192301009134555',
            Name: 'Michael Jones',
            Title: 'VP of Sales'
        },
        {
            Id: '003848991274589432',
            Name: 'Jennifer Wu',
            Title: 'CEO'
        }
    ];

    handlevalue(event){
     this.booleanValue = event.target.checked;
    }

}