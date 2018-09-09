import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import {ApiService} from '../../../api.service';

@Component({
  selector: 'find-order',
  styleUrls: ['./find-order.component.scss'],
  templateUrl: './find-order.component.html',
})
export class FindOrderComponent {
  

  
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
        //this.source.load(this.flattenOrders(res));
      })
    }
    
}
