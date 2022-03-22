import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationToHome extends NavigationMixin(LightningElement) {

    goToHome(){
            // Use the built-in 'Navigate' method
            this[NavigationMixin.Navigate]({
                // Pass in pageReference
                type: 'standard__namedPage',
                attributes: {
                    pageName: 'home'
                }
            });
     }


    goToChatterHome(){
        this[NavigationMixin.Navigate]({
            // Pass in pageReference
            type: 'standard__namedPage',
            attributes: {
                pageName: 'chatter'
            }
        });
    }

    goToFilesHome(){ 
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'ContentDocument',
                actionName: 'home'
            }
        });
        
    }
}