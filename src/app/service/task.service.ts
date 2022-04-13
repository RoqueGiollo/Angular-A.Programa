import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http'; //nos permite hacer llamadas get-post 
import {Observable, observable, of} from 'rxjs';
import {TASKS} from '../mock-tasks';
import { Task } from 'src/app/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:5000/tasks "

  constructor(
    private http:HttpClient
  ) { }

  getTasks(): Observable<Task[]>{

    return this.http.get<Task[]>(this.apiUrl)  // el get nos devuelve la lista de tareas, a travez de apiUrl.
  }
}
