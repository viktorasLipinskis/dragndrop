import { Component } from '@angular/core';
import { DragndropService, Task } from './dragndrop.service';

@Component({
  selector: 'app-root',
  providers: [DragndropService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  preserveWhitespaces: true,
})
export class AppComponent {
  title = 'dragndrop';

  doingTasks: Task[];
  plannedTasks: Task[];

  constructor(service: DragndropService) {
    this.doingTasks = service.getDoingTasks();
    this.plannedTasks = service.getPlannedTasks();
  }

  onDragStart(e) {
    e.itemData = e.fromData[e.fromIndex];
  }

  onAdd(e) {
    e.toData.splice(e.toIndex, 0, e.itemData);
  }

  onRemove(e) {
    e.fromData.splice(e.fromIndex, 1);
  }
}
