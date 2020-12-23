import { Component } from '@angular/core';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IProduct } from '../shared/interfaces/product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  providers: [ProductService],
})
export class ProductListComponent {
  pageTitle = 'Product List';
  private _filterBy = '';
  productList: IProduct[] = [];
  showImage = true;
  products$ = this.productService.products$.pipe(
    catchError((err) => {
      return EMPTY;
    })
  );

  constructor(private productService: ProductService) {}

  get filterBy(): string {
    this.products$ = this.productService.filter(this._filterBy);
    return this._filterBy;
  }

  set filterBy(value) {
    this._filterBy = value ? value.toLocaleLowerCase() : value;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
