import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { OfcComponent } from './ofc/ofc.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MaterialModule, AppRoutingModule],
  declarations: [AppComponent, HomeComponent, OfcComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
