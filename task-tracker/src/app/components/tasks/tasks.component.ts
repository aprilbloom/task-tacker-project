import { Component, OnInit } from '@angular/core';
import { TaskService } from 'app/services/task.service';
import { Task } from 'app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
     this.taskService.getTasks()
      .subscribe((tasks) =>
      this.tasks = tasks)
  }
}

/*
//subscribe so observable so you can constantly watch it
using an arrow function at subscribe
.subscribe((returnvalue) => {})
*/
