import { Component } from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1 class="title"> Angular 2 Playground! </h1>'
})
export class AppComponent {
    message: string;

    constructor() { /* this.message = 'Hello World'; */ }
}
