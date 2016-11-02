import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent, TodoDetailComponent, DashboardComponent } from './modules';

// Route Configuration
export const routes: Routes = [
    { path: '',  component: DashboardComponent },
    { path: 'list', component: TodoListComponent },
    { path: 'detail', component: TodoDetailComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);