/* An example of a component */
import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
    selector: 'todo-detail',
    providers: [ TodoService ],
    templateUrl: 'dist/templates/modules/todo/components/detail/todo-detail.component.html'
})

export class TodoDetailComponent {
    message: string;

    constructor(
        private todo: TodoService )  { }

    saySomething( something: string ){
        this.todo.saySomething(something);
    }
}
