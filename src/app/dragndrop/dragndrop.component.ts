import { Component, OnInit } from '@angular/core';
import { Task, DragndropService } from '../dragndrop.service';

@Component({
  selector: 'app-dragndrop',
  providers: [DragndropService],
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.scss'],
})
export class DragndropComponent implements OnInit {
  doingTasks: Task[];
  plannedTasks: Task[];

  constructor(service: DragndropService) {
    this.doingTasks = service.getDoingTasks();
    this.plannedTasks = service.getPlannedTasks();
  }
  ngOnInit(): void {}

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
