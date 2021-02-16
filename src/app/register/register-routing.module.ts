import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUiComponent } from './register-ui/register-ui.component';
import { RegisterResolver } from '../_resolvers/register-resolver.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RegisterUiComponent,
    resolve: {
      options: RegisterResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
