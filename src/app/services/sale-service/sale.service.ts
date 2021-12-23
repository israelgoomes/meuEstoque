import { configHelper } from './../../configurations/configHelper';
import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  url: string;
  constructor(private http: HttpService) {
    this.url = `${configHelper.URL}/sale`
  }

  public getSales(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  public createSale(dataUpdate, dataCreate): Observable<any> {
    const updateProduct = this.http.put(`${configHelper.URL}/product/${dataUpdate.idProduct}`, dataUpdate);
    const createSale = this.http.post(`${this.url}`, dataCreate);
    return forkJoin([updateProduct, createSale]);
  }

  public deleteSale(id): Observable<any> {
    // console.log('idProduct', idProduct)
    // console.log('uantidade', idProduct)
    // console.log('idSale', idSale)
    // console.log('idCompany', idCompnay)
    // const updateProduct = this.http.put(`${configHelper.URL2}/product/${idCompnay}/cancel-sale/${idProduct}`, amount);
    // const deleteSale = this.http.delete(`${this.url}`, idSale);
    return this.http.delete(`${this.url}`, id);
  }
}
