import { LightningElement } from 'lwc';
import fetchDataHelper from './fetchDataHelper';

export default class DatatableBasic extends LightningElement {

    data = [];
    columns = columns;

    // eslint-disable-next-line @lwc/lwc/no-async-await
    async connectedCallback() {
        const data = await fetchDataHelper({ amountOfRecords: 100 });
        this.data = data;
    }
    
}