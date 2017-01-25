import { Component, OnInit } from '@angular/core';

import { Product } from '../product';

@Component({
  selector: 'product-row',
  inputs: ['product'],
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css'],
  host: {
    'class': 'item'
  }
})
export class ProductRowComponent implements OnInit {
  product: Product;

  constructor() { }

  ngOnInit() {
  }

}
