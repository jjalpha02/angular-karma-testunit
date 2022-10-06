import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCompComponent } from './component/user-comp/user-comp.component';
import { FractionCompComponent } from './component/fraction-comp/fraction-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCompComponent,
    FractionCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
