import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { PolicyPageComponent } from './policy-page/policy-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    AboutUsPageComponent,
    PolicyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
