/* An example of a Service */
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable()
export class TodoService {

    constructor () { }

    saySomething( something: string ) {
        console.log(something);
    }
}