import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfcComponent } from './ofc/ofc.component';
import { HomeComponent } from './home/home.component';
import { EmandremComponent } from './emandrem/emandrem.component';
import { MediarwdComponent } from './mediarwd/mediarwd.component';
import { CssflexComponent } from './cssflex/cssflex.component';
import { FxLayoutComponent } from './fx-layout/fx-layout.component';
import { PositionComponent } from './position/position.component';
import { CdkPortalComponent } from './cdk-portal/cdk-portal.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'ofc', component: OfcComponent },
  { path: 'emandrem', component: EmandremComponent },
  { path: 'mediarwd', component: MediarwdComponent },
  { path: 'css-flex', component: CssflexComponent },
  { path: 'flexlayout', component: FxLayoutComponent },
  { path: 'media-rwd', component: MediarwdComponent },
  { path: 'position', component: PositionComponent },
  { path: 'cdk-portal', component: CdkPortalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
