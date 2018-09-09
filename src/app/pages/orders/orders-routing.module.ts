import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersComponent } from './orders.component';
import { CreateOrdersComponent } from './create-orders/create-orders.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { FindOrderComponent } from './find-order/find-order.component';

const routes: Routes = [{
  path: '',
  component: OrdersComponent,
  children: [{
    path: 'create',
    component: CreateOrdersComponent,
  }, {
    path: 'view',
    component: ViewOrdersComponent,
  }, {
    path: 'find',
    component: FindOrderComponent,
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
export class OrdersRoutingModule {

}

export const routedComponents = [
  OrdersComponent,
  CreateOrdersComponent,
  ViewOrdersComponent,
  FindOrderComponent
];
