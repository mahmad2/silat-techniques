import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { LoginComponent } from "./admin/login/login.component"
import { TechniqueListComponent } from "./technique-list/technique-list.component"

export const appRoutes: Routes = [
  { path: 'techniques', component: TechniqueListComponent },
  { path: '', component: LoginComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
