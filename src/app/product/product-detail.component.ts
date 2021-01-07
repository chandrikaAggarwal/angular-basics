import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../shared/interfaces/product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  providers: [ProductService],
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;

  productId = 0;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.params.id;
    console.log(this.productId);

    
    // TODO:: Fix it
    // this.productService.getProducts().subscribe({
    //   next: (data) => {
    //     this.product = data.filter((p) => p.productId === this.productId)[0];
    //   },
    // });

    this.product = this.productService.filter().filter(p => +p.productId === +this.productId)[0];
  }

  onBack(): void {
    this.router.navigate(['/product-list']);
  }
}
