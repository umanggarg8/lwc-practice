import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ShowToastMisc extends LightningElement {
    title = 'Sample Title';
    message = 'Sample Message';
    variant = 'error';
    variantOptions = [
        { label: 'error', value: 'error' },
        { label: 'warning', value: 'warning' },
        { label: 'success', value: 'success' },
        { label: 'info', value: 'info' }
    ];


    handleTitle(event){
        this.title = event.target.value;
    }

    handleMessage(event){
        this.message = event.target.value;
    }

    handleVariant(event){
        this.variant = event.target.value;
    }

    showNotification(){
        const evt = new ShowToastEvent({
            title: this.title,
            message: this.message,
            variant: this.variant
        });
        this.dispatchEvent(evt);

    }
}