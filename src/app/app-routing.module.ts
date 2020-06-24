import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragndropComponent } from './dragndrop/dragndrop.component';
import { ProposalComponent } from './proposal/proposal.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'demo', component: DragndropComponent, pathMatch: 'full' },
  { path: 'proposal', component: ProposalComponent, pathMatch: 'full' },
  { path: 'settings', component: SettingsComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
