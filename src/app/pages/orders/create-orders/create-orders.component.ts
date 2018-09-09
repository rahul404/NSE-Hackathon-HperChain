import { Component } from '@angular/core';

import {ApiService} from '../../../api.service';

@Component({
  selector: 'create-orders',
  styleUrls: ['./create-orders.component.scss'],
  templateUrl: './create-orders.component.html',
})
export class CreateOrdersComponent {
  order:any
  constructor(private apiService: ApiService){
    this.order={
      orderId:"",
      security:"",
      price:0,
      quantity:0,
      creator:"",
      transactionType:""
    }
  }
  securities:any[]
  creators:any[]


  ngOnInit(): void {

    this.apiService.getAllSecurities()
    .subscribe(
    res=>{
      this.securities=res
    })

    this.apiService.getAllAccounts()
    .subscribe(
    res=>{
      this.creators=res
    })

    this.apiService.getOrderId()
    .subscribe(
    res=>{
      this.order.orderId=res
    })
  }

  createOrder(){
    console.log(this.order)
    if(this.order.orderId!="" && this.order.security!="" && this.order.creator!="" && this.order.transactionType!="" && this.order.price>0 && this.order.quantity>0){
      this.apiService.createOrder(this.order)
      .subscribe(
        res=>{
          console.log(res)
          window.alert("Created Successfully")
        }
      )
    }
  }
}
