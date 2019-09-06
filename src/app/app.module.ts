import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxAliasModule } from 'ngx-alias/ngx-alias.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxAliasModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
