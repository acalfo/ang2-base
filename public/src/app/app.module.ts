import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TodoListComponent, TodoDetailComponent, TodoService } from './modules/todo';
import { routing } from './app.routes';

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
    bootstrap: [ AppComponent ]
})

export class AppModule { }