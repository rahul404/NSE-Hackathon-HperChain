import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import {ApiService} from '../../../api.service';

@Component({
  selector: 'find-order',
  styleUrls: ['./find-order.component.scss'],
  templateUrl: './find-order.component.html',
})
export class FindOrderComponent {
  
  orderId:any=""
  orders:any[]=[]  
  accounts:any[]=[]
  accountId:any=""
  matchedOrders:any[]=[]
  constructor(private apiService: ApiService) {
    
  }
  
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    
    this.apiService.getAllAccounts()
    .subscribe(
      res=>{
        this.accounts=res
      })
    }
    
    onChange(event){
      this.getOrders(event.target.value)
    }
    
    getOrders(accountId){
      this.apiService.getAllOutstandingOrders(accountId)
      .subscribe(
        res=>{
          this.orders = (this.flattenOrders(res));
        })
      }
      getMatchingOrders(){
        var self=this
        console.log(this.orderId+" "+this.accountId)
        var order = this.orders.filter(function(e){
          return e.orderId == self.orderId
        })
        if(order.length>0){
          this.apiService.getMatchingOrders(order[0].securityId, order[0].price, this.accountId)
          .subscribe(
            res=>{
              this.matchedOrders = (this.flattenOrders(res));
              console.log(this.matchedOrders)
            })
        }
        
        }
        flattenOrders(orders){
          var self=this
          var flattenedOrders=[]
          if(orders.length>0)
          orders.forEach(element => {
            flattenedOrders.push({orderId:element.orderId, securityName:element.security.securityName, price:element.price, quantity:element.quantity, transactionType:element.transactionType, createdBy:element.creator.owner.id, securityId:element.security.securityId})
          });
          return flattenedOrders
        }
      }
      