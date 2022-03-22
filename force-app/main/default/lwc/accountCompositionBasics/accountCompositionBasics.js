import { LightningElement } from 'lwc';

export default class AccountCompositionBasics extends LightningElement {
   account = {
       Name : 'Phoebe Buffey',
       Industry : 'Construction',
       Phone : '1231231231',
       Picture__c : 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/amy_taylor.jpg'
   }

}