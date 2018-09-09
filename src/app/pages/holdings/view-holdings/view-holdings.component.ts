import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import {ApiService} from '../../../api.service';

@Component({
  selector: 'create-security',
  styleUrls: ['./view-holdings.component.scss'],
  templateUrl: './view-holdings.component.html',
})
export class ViewHoldingsComponent {
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
      security: {
        title: 'Security',
        type: 'string',
      },
      quantity: {
        title: 'Quantity',
        type: 'string',
      },
      price:{
        title: 'Price',
        type: 'string',
      },
      transactionType:{
        title: 'Transaction Type',
        type: 'string',
      },
    },
  };
  
  source: LocalDataSource = new LocalDataSource();
  accounts:any[]=[]
  accountId:any=""
  balance:any=0
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
    this.apiService.getAllAccounts()
    .subscribe(
    res=>{
      this.accounts=res
    })
    //this.getHoldings()
  }
  getHoldings(){
    var self=this
    this.balance = this.accounts.filter(function(element){
      return element.accountId==self.accountId
    })[0].balance
    this.apiService.getHoldingsById(this.accountId)
    .subscribe(
      res=>{
        console.log(res)
        this.source.load(this.flattenHoldings(res));
      })
    }

    flattenHoldings(holdings){
      var self=this
      var flattenedHoldings=[]
      if(holdings.length>0)
      holdings.forEach(element => {
        flattenedHoldings.push({security:element.security.securityName, price:element.price, quantity:element.quantity, transactionType:element.transactionType})
      });
      return flattenedHoldings
    }
  }

  
  
  