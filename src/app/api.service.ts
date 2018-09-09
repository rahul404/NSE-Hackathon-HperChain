import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, URLSearchParams} from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

const API_URL = "http://localhost:3000/api/"
@Injectable()
export class ApiService {
  
  resolveRelationshipParams={ params: { "filter": JSON.stringify({"include":"resolve"}) }}
  
  constructor(private http: Http) { }
  public getAllSecurities():Observable<any[]> {
		return this.http.get(API_URL+'org.hyperchain.Security/',this.resolveRelationshipParams)
		.map(response => {
			const securities = response.json();
			return securities.map((securities) => securities);
    })
  }
  
  public getAllOrders():Observable<any[]> {
		return this.http.get(API_URL+'org.hyperchain.Order/',this.resolveRelationshipParams)
		.map(response => {
			const orders = response.json();
			return orders.map((orders) => orders);
    })
  }
  
  public getAllAssetClasses():Observable<any[]> {
		return this.http.get(API_URL+'org.hyperchain.AssetClass/',this.resolveRelationshipParams)
		.map(response => {
			const assetClasses = response.json();
			return assetClasses.map((assetClasses) => assetClasses);
    })
  }
  
  public getAllIssuers():Observable<any[]> {
		return this.http.get(API_URL+'org.hyperchain.Issuer/',this.resolveRelationshipParams)
		.map(response => {
			const issuers = response.json();
			return issuers.map((issuers) => issuers);
    })
  }
  
  public getSecurityId():Observable<any> {
    return this.http.get(API_URL+'/queries/GetMaxSecurityId/')
    .map(response => {
      const issuers = response.json();
      if(issuers.length>0)
        return parseInt(issuers[0].securityId)+1
      else 
        return 1
    })
  }

  public getOrderId():Observable<any> {
    return this.http.get(API_URL+'/queries/GetMaxOrderId/')
    .map(response => {
      const orders = response.json();
      if(orders.length>0)
        return parseInt(orders[0].orderId)+1
      else
        return 1
    })
  }


  public getAllAccounts():Observable<any[]> {
		return this.http.get(API_URL+'org.hyperchain.Account/',this.resolveRelationshipParams)
		.map(response => {
			const accounts = response.json();
			return accounts.map((accounts) => accounts);
    })
  }

  public getHoldingsById(id):Observable<any[]> {
		return this.http.get(API_URL+'org.hyperchain.Account/'+id,this.resolveRelationshipParams)
		.map(response => {
			const accounts = response.json();
			return accounts.holdings;
    })
  }
  
  public createSecurity(sec):Observable<any> {
    var security;
    security=sec;
    security.asset="resource:org.hyperchain.AssetClass#"+sec.asset
    security.issuer="resource:org.hyperchain.Issuer#"+sec.issuer

    return this.http.post(API_URL+'org.hyperchain.Security/',security)
    .map(response => {
      const security = response.json();
      return security
    })
  }

  public createOrder(ord):Observable<any> {
    var order;
    order=ord;
    order.security="resource:org.hyperchain.Security#"+ord.security
    order.creator="resource:org.hyperchain.Account#"+ord.creator

    return this.http.post(API_URL+'org.hyperchain.Order/',order)
    .map(response => {
      const order = response.json();
      return order
    })
  }
}
