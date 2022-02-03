import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  faTimesIcon = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  //emit this to parent component tasks component
  onDelete(task: Task){
    this.onDeleteTask.emit(task);
  }
}
