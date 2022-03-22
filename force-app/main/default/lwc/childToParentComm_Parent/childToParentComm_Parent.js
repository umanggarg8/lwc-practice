import { LightningElement } from 'lwc';

export default class ChildToParentComm_Parent extends LightningElement {

 page = 1;

handlePreviousEvent(){
  if(this.page > 1){
      this.page = this.page - 1;
  }
} 

handleNextEvnt(){
        this.page = this.page + 1; 
}

}