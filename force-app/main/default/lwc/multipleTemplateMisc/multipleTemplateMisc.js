import { LightningElement } from 'lwc';
import multipleTemplateOne from './multipleTemplateOne.html';
import multipleTemplateTwo from './multipleTemplateTwo.html';

import trailheadLogo from '@salesforce/resourceUrl/trailhead_logo';
import trailheadCharacters from '@salesforce/resourceUrl/trailhead_characters';

export default class MultipleTemplateMisc extends LightningElement {

    showTemplateOne = true;

    trailheadLogoUrl = trailheadLogo;
    einsteinUrl = trailheadCharacters + '/images/einstein.png';

    render() {
        return this.showTemplateOne ? multipleTemplateOne : multipleTemplateTwo;
    }

    switchTemplate() {
        this.showTemplateOne = !this.showTemplateOne;
    }
}