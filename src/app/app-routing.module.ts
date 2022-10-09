import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfcComponent } from './ofc/ofc.component';
import { HomeComponent } from './home/home.component';
import { EmandremComponent } from './emandrem/emandrem.component';
import { MediarwdComponent } from './mediarwd/mediarwd.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'ofc', component: OfcComponent },
  { path: 'emandrem', component: EmandremComponent},
  { path: 'mediarwd' , component : MediarwdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}