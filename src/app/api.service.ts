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
}
