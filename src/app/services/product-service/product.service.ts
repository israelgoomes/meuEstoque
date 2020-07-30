import { configHelper } from './../../configurations/configHelper';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http-service/http.service';
import { forkJoin } from 'rxjs';
import { ProductModel } from '../../models/tbProductModel';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url: string;
  constructor(private http: HttpService) {
    this.url = `${configHelper.URL2}/product`;
  }

  updtaeProductData = new EventEmitter();

  public getProducts(id: number): Observable<any> {
    const product = this.http.get(`${this.url}/${id}`);
    // const provider= this.http.get(`${configHelper.URL}/provider/${id}`);
    return forkJoin([product]);
    //this.http.get(`${this.url}/${id}`)
  }

  public deleteProduct(id: number): Observable<ProductModel> {
    return this.http.delete(`${this.url}`, id);
  }

  public update(data: any): Observable<ProductModel> {
    return this.http.put(`${this.url}/${data.idProduct}`, data);
  }

  public createProduct(data: any): Observable<ProductModel> {
    return this.http.post(`${this.url}`, data);
  }

  public updateForSale(id, data): Observable<ProductModel> {
    return this.http.put(`${this.url}/cancel-sale/${id}`, data);
  }

  public getScanCode(id, cdProduct): Observable<ProductModel> {
    cdProduct = {
      cdProduct: cdProduct,
    };
    return this.http.post(`${this.url}/cdProduct/${id}`, cdProduct);
  }
}
