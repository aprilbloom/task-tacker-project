import { Injectable } from '@angular/core';
import { Task } from 'app/Task';
import { TASKS } from 'app/mock-task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }
}

/* Note: from video https://www.youtube.com/watch?v=3dHNOWTI7H8&t=4884s
This is just a class and does bring in @Injectable declaration
and it's being provided into application level
 ----- providedIn: 'root'


Get a full fake REST API

https://www.npmjs.com/package/json-server:
JSON Server tutorial : https://zetcode.com/javascript/jsonserver/

install - npm install -g json-server //global
npm install -i json-server   //local
start - json-server --watch db.json
npm run server

chrome - inspect find:
network -
tasks:
Request URL: http://localhost:5000/tasks
Request Method: GET
Status code: 200 OK
*/
