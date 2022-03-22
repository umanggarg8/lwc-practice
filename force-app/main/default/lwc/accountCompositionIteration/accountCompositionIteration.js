import { LightningElement } from 'lwc';

export default class AccountCompositionIteration extends LightningElement {
    accounts = [
        {
            Id: '003171931112854375',
            Name: 'Amy Taylor',
            Industry : 'Construction',
            Phone: '6172559632',
            Picture__c:
                'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/amy_taylor.jpg'
        },
        {
            Id: '003192301009134555',
            Name: 'Michael Jones',
            Industry : 'Construction',
            Phone: '6172551122',
            Picture__c:
                'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg'
        },
        {
            Id: '003848991274589432',
            Name: 'Jennifer Wu',
            Industry : 'Construction',
            Phone: '6172558877',
            Picture__c:
                'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg'
        }
    ];
}