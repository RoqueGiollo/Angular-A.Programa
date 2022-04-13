import { Injectable } from '@angular/core';
import {Observable, observable, of} from 'rxjs';
import {TASKS} from '../mock-tasks';
import { Task } from 'src/app/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  getTasks(): Observable<Task[]>{
    const tasks = of(TASKS);
    return tasks;
  }
}