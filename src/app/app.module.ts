import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragndropComponent } from './dragndrop/dragndrop.component';
import {
  DxListModule,
  DxMenuModule,
  DxCheckBoxModule,
  DxSelectBoxModule,
  DxNumberBoxModule,
  DxFormModule,
} from 'devextreme-angular';
import { ProposalComponent } from './proposal/proposal.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [AppComponent, DragndropComponent, ProposalComponent, SettingsComponent, AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxListModule,
    DxMenuModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
    DxFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
