import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import {ApiService} from '../../../api.service';

@Component({
  selector: 'create-security',
  styleUrls: ['./view-securities.component.scss'],
  templateUrl: './view-securities.component.html',
})
export class ViewSecuritiesComponent {
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
      securityId: {
        title: 'ID',
        type: 'number',
      },
      securityName: {
        title: 'Security Name',
        type: 'string',
      },
      assetClass:{
        title: 'Asset Class',
        type: 'string',
      },
      issuer:{
        title: 'Issuer',
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
    this.getSecurities()
  }
  getSecurities(){
    this.apiService.getAllSecurities()
    .subscribe(
      res=>{
        this.source.load(this.flattenSecurities(res));
      })
    }
    flattenSecurities(securities){
      var self=this
      var flattenedSecurities=[]
      if(securities.length>0)
      securities.forEach(element => {
        flattenedSecurities.push({securityId:element.securityId,securityName:element.securityName,assetClass:element.asset.assetClass,issuer:element.issuer.issuerName})
      });
      return flattenedSecurities
    }
  }

  
  
  