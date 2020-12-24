import { Injectable } from '@angular/core';
import { IProduct } from '../shared/interfaces/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import * as products from '../../api/products/products.json';
import { EMPTY, Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable()
export class ProductService {
  private productList: IProduct[] = products.default;
  private productUrl = 'api/products/products.json';
  products$ = this.httpService.get<IProduct[]>(this.productUrl).pipe(
    tap((data) => console.log('Data', data)),
    catchError(this.handleError)
  );

  constructor(private httpService: HttpClient) {}

  // Filter product list for requested keyword(s)
  filter(filterBy = ''): Observable<Products | void> {
    if (!filterBy) { return this.products$; }

    return this.products$.pipe(
      map((data) => {
        if (data.length) {
          data.filter((p) => {
            p.productName.toLocaleLowerCase().includes(filterBy);
          });
        }
      })
    );
  }

  handleError(err: HttpErrorResponse): Observable<any> {
    let errMsg = '';
    if (err.error instanceof ErrorEvent) {
      errMsg = `An error occured: ${err.error.message}`;
    } else {
      errMsg = `Error Status Code: ${err.status} and message: ${err.message}`;
    }

    return throwError(errMsg);
  }
}
