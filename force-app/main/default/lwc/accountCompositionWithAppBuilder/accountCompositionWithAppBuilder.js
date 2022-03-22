import { LightningElement, api } from 'lwc';

export default class AccountCompositionWithAppBuilder extends LightningElement {
    @api picklistValue;
    @api stringValue;
    @api numberValue;
}