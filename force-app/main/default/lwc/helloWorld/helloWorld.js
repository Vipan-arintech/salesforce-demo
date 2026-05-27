import { LightningElement, wire } from 'lwc';
import getGreeting from '@salesforce/apex/HelloWorldController.getGreeting';

export default class HelloWorld extends LightningElement {
    message = 'Loading greeting...';

    @wire(getGreeting)
    wiredGreeting({ data, error }) {
        if (data) {
            this.message = data;
        } else if (error) {
            this.message = 'Error loading greeting.';
            // eslint-disable-next-line no-console
            console.error(error);
        }
    }
}
