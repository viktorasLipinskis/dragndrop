import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragndropComponent } from './dragndrop/dragndrop.component';
import { ProposalComponent } from './proposal/proposal.component';

const routes: Routes = [
  { path: 'demo', component: DragndropComponent, pathMatch: 'full' },
  { path: 'proposal', component: ProposalComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
