import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragndropComponent } from './dragndrop/dragndrop.component';

const routes: Routes = [
  { path: 'demo', component: DragndropComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
