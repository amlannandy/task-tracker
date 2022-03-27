import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/models/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
