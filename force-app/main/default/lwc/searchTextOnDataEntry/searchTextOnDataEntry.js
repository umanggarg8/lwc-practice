import { LightningElement, wire, api } from 'lwc';
import fetchAccount from '@salesforce/apex/searchAccount.getAccount';

export default class SearchTextOnDataEntry extends LightningElement {

    searchAccount;
    searchAccount1;
    lstAccounts = [];
    @wire(fetchAccount, {name : '$searchAccount'}) accounts;

    fetchAccounts(event){
        this.searchAccount = event.target.value;
    }

    fetchAccounts1(event){
        this.searchAccount1 = event.target.value;
        console.log('value->',this.searchAccount1);
        fetchAccount({name : this.searchAccount1})
          .then(result => {
              console.log('result->', result);
              this.lstAccounts = result;
          })
          .catch(error =>  {
            console.log('error-->',error);
          })

    }
}