import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoldingsComponent } from './holdings.component';
import { ViewHoldingsComponent } from './view-holdings/view-holdings.component';

const routes: Routes = [{
  path: '',
  component: HoldingsComponent,
  children: [{
    path: 'view',
    component: ViewHoldingsComponent,
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
export class HoldingsRoutingModule {

}

export const routedComponents = [
  HoldingsComponent,
  ViewHoldingsComponent
];
