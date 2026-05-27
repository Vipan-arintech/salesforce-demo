import { LightningElement, wire } from 'lwc';
import getGreeting from '@salesforce/apex/HelloWorldController.getGreeting';
import getUserName from '@salesforce/apex/HelloWorldController.getUserName';

export default class HelloWorld extends LightningElement {
    message = 'Loading greeting...';
    userName = 'Loading user...';

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

    @wire(getUserName)
    wiredUserName({ data, error }) {
        if (data) {
            this.userName = data;
        } else if (error) {
            this.userName = 'Error loading user.';
            // eslint-disable-next-line no-console
            console.error(error);
        }
    }
}