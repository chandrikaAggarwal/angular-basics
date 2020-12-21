import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/interfaces/product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  providers: [ProductService],
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  private _filterBy = '';
  productList: IProduct[] = [];
  showImage = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => (this.productList = products),
      // error: (err) => console.log(err),
    });
  }

  get filterBy(): string {
    this.productList = this.productService.filter(
      this._filterBy,
      this.productList
    );
    return this._filterBy;
  }

  set filterBy(value) {
    this._filterBy = value ? value.toLocaleLowerCase() : value;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
