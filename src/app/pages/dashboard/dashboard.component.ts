import { Component } from '@angular/core';

import {ApiService} from '../../api.service';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  constructor(private apiService: ApiService){

  }
  securities:any[]=[]
  orders:any[]=[]
  issuers:any[]=[]
  accounts:any[]=[]

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.apiService.getAllSecurities()
    .subscribe(
    res=>{
      this.securities=res
    })

    this.apiService.getAllOrders()
    .subscribe(
    res=>{
      this.orders = res
    })

    this.apiService.getAllIssuers()
    .subscribe(
    res=>{
      this.issuers=res
    })
    
    this.apiService.getAllAccounts()
    .subscribe(
    res=>{
      this.accounts=res
    })
  }
}
