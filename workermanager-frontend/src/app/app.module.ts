import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {WorkerService} from "../service/worker.service";
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WorkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
