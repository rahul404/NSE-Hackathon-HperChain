import { Component } from '@angular/core';

import {ApiService} from '../../../api.service';
@Component({
  selector: 'create-security',
  styleUrls: ['./create-securities.component.scss'],
  templateUrl: './create-securities.component.html',
})
export class CreateSecuritiesComponent {
  constructor(private apiService: ApiService){
    this.security = {
      securityId:"",
      securityName:"",
      asset:"",
      issuer:""
    };
  }
  security:any;
  
  assetClasses:any[]
  issuers:any[]
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.apiService.getAllAssetClasses()
    .subscribe(
    res=>{
      this.assetClasses=res
    })
      
    this.apiService.getAllIssuers()
    .subscribe(
    res=>{
      this.issuers=res
    })
    
    this.apiService.getSecurityId()
    .subscribe(
    res=>{
      this.security.securityId=res
    })
      
    }
        
    createSecurity(){
      console.log(this.security)
      if(this.security.securityId!="" && this.security.securityName!="" && this.security.asset!="" && this.security.issuer!=""){
        this.apiService.createSecurity(this.security)
        .subscribe(
          res=>{
            console.log(res)
            window.alert("Created Successfully")
          }
        )
      }
    }
  }
  