import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import {ApiService} from '../../../api.service';

@Component({
  selector: 'create-security',
  styleUrls: ['./view-orders.component.scss'],
  templateUrl: './view-orders.component.html',
})
export class ViewOrdersComponent {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      orderId: {
        title: 'ID',
        type: 'number',
      },
      securityName: {
        title: 'Security Name',
        type: 'string',
      },
      price: {
        title: 'Price',
        type: 'number',
      },
      quantity: {
        title: 'Quantity',
        type: 'number',
      },
      transactionType: {
        title: 'Type',
        type: 'string',
      },
      createdBy: {
        title: 'Created By',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  
  constructor(private apiService: ApiService) {
    
  }
  
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getOrders()
  }
  getOrders(){
    this.apiService.getAllOrders()
    .subscribe(
      res=>{
        this.source.load(this.flattenOrders(res));
      })
    }
    flattenOrders(orders){
      var self=this
      var flattenedOrders=[]
      if(orders.length>0)
      orders.forEach(element => {
        flattenedOrders.push({orderId:element.orderId, securityName:element.security.securityName, price:element.price, quantity:element.quantity, transactionType:element.transactionType, createdBy:element.creator.owner.id})
      });
      return flattenedOrders
    }
}
