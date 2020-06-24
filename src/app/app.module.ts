import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragndropComponent } from './dragndrop/dragndrop.component';
import { DxListModule, DxMenuModule } from 'devextreme-angular';

@NgModule({
  declarations: [AppComponent, DragndropComponent],
  imports: [BrowserModule, AppRoutingModule, DxListModule, DxMenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
