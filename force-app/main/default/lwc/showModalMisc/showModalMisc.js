import { LightningElement } from 'lwc';

export default class ShowModalMisc extends LightningElement {

    header = 'Modal Header';
    content = 'Modal Content';

    handleHeader(event){
        this.header = event.target.value;        
    }

    handleContent(event){
        this.content = event.target.value;

    }

    showModal(){
        const modal = this.template.querySelector('c-modal');
        modal.show();
    }

    handleCancelModal() {
        const modal = this.template.querySelector('c-modal');
        modal.hide();
    }

    handleCloseModal() {
        const modal = this.template.querySelector('c-modal');
        modal.hide();
    }



}