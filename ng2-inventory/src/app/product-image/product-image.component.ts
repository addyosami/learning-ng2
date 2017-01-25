import { Component, OnInit } from '@angular/core';

import { Product } from '../product';

@Component({
  selector: 'product-image',
  inputs: ['product'],
  host: {'class': 'ui small image'},
  template: `
    <img class="product-image" [src]="product.imageUrl">
  `,
  styleUrls: ['./product-image.component.css']

})
export class ProductImageComponent implements OnInit {
  product: Product;

  constructor() { }

  ngOnInit() {
  }
}
