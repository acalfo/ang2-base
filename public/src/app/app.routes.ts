import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TodoListComponent, TodoDetailComponent } from './modules/todo';

// Route Configuration
export const routes: Routes = [
    { path: '',  component: DashboardComponent },
    { path: 'list', component: TodoListComponent },
    { path: 'detail', component: TodoDetailComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);