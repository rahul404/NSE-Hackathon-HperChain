import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecuritiesComponent } from './securities.component';
import { CreateSecuritiesComponent } from './create-securities/create-securities.component';
import { ViewSecuritiesComponent } from './view-securities/view-securities.component';

const routes: Routes = [{
  path: '',
  component: SecuritiesComponent,
  children: [{
    path: 'create',
    component: CreateSecuritiesComponent,
  }, {
    path: 'view',
    component: ViewSecuritiesComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class SecuritiesRoutingModule {

}

export const routedComponents = [
  SecuritiesComponent,
  CreateSecuritiesComponent,
  ViewSecuritiesComponent
];
