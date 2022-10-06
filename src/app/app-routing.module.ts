import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FractionCompComponent } from './component/fraction-comp/fraction-comp.component';
import { UserCompComponent } from './component/user-comp/user-comp.component';

const routes: Routes = [
  { path: 'users', component: UserCompComponent },
  { path: 'fractions', component: FractionCompComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
