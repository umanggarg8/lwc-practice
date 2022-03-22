import { LightningElement } from 'lwc';

export default class ChildToParentComm_Child extends LightningElement {

    handlePrevious(){

        //this.dispatchEvent(new CustomEvent('previous'));
        const previousEvt = new CustomEvent('previousevnt');
        this.dispatchEvent(previousEvt);
    }

    handleNext(){
        this.dispatchEvent(new CustomEvent('next'));
        //const nextEvt = new CustomEvent('nextevnt');
        //this.dispatchEvent(nextEvt);
    }
}
