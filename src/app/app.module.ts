import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { OfcComponent } from './ofc/ofc.component';
import { CssflexComponent } from './cssflex/cssflex.component';
import { MediarwdComponent } from './mediarwd/mediarwd.component';
import { EmandremComponent } from './emandrem/emandrem.component';
import { FxLayoutComponent } from './fx-layout/fx-layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CdkPortalComponent } from './cdk-portal/cdk-portal.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    OfcComponent,
    CssflexComponent,
    MediarwdComponent,
    EmandremComponent,
    FxLayoutComponent,
    CdkPortalComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
