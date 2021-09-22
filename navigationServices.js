import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationServices extends NavigationMixin(LightningElement) {

    openLwcdoc() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.use_navigate_page_types',
            }
        });
    }

    openAccount() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home'
            }
        });
    }

    createNewContact() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        });
    }

    oppListview() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Opportunity',
                actionName: 'list'
            }
        });
    }

    openCaserecord() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: "5005g00000CQEIhAAP",
                objectapiName: 'Case',
                actionName: 'view'
            }
        });
    }

    openApppage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'LWC'
            }
        });
    }

}