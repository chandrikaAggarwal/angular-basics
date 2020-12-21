import { Injectable } from '@angular/core';
import { IProduct } from '../shared/interfaces/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import * as products from '../../api/products/products.json';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ProductService {
  private productList: IProduct[] = (products).default;
  private productUrl: 'api/products/product.json';

  constructor(private httpService: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.httpService.get<IProduct[]>(this.productUrl).pipe(
      tap((data) => console.log('Got data', data)),
      catchError(this.handleError)
    );
    //        return this.productList;
  }

  // Filter product list for requested keyword(s)
  filter(filterBy = '', productList = []): IProduct[] {
    return filterBy
      ? this.productList.filter((p) =>
          p.productName.toLocaleLowerCase().includes(filterBy)
        )
      : this.productList;
  }

  handleError(err: HttpErrorResponse): Observable<never> {
    let errMsg = '';
    if (err.error instanceof ErrorEvent) {
      errMsg = `An error occured: ${err.error.message}`;
    } else {
      errMsg = `Error Status Code: ${err.status} and message: ${err.message}`;
    }

    return throwError(errMsg);
  }
}
