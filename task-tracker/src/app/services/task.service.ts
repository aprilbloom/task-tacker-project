import { Injectable } from '@angular/core';
import { Task } from 'app/Task';
import { TASKS } from 'app/mock-task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Task[] {
    return TASKS;
  }
}

/* Note: from video https://www.youtube.com/watch?v=3dHNOWTI7H8&t=4884s
This is just a class and does bring in @Injectable declaration
and it's being provided into application level
 ----- providedIn: 'root'
*/
