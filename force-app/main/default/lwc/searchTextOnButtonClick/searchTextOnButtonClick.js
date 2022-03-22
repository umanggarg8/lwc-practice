import { LightningElement, wire } from 'lwc';
import fetchAccount from '@salesforce/apex/searchAccount.getAccount';

export default class SearchTextOnButtonClick extends LightningElement {

    searchAccount;
    searchAccount1;
    lstAccounts = [];
    showAccounts = false;
    showAccounts1 = false;
    accounts;
    @wire(fetchAccount, {name : '$searchAccount'}) accounts;
    fetchAccounts(event){
        this.showAccounts = true;
    }

    getText1(event){
        this.searchAccount = event.target.value;
        this.showAccounts = false;

    }

    getText(event){
        this.searchAccount1 = event.target.value;
    }

    fetchAccounts1(event){
        console.log('value->',this.searchAccount1);
        fetchAccount({name : this.searchAccount1})
          .then(result => {
              console.log('result->', result);
              this.lstAccounts = result;
              this.showAccounts1 = true;
          })
          .catch(error =>  {
            console.log('error-->',error);
          })

    }
}