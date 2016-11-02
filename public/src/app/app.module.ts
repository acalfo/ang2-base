import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { TodoListComponent, TodoDetailComponent, TodoService, DashboardComponent } from './modules/';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        TodoListComponent,
        TodoDetailComponent
    ],
    providers: [ TodoService ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }