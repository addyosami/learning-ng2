import { Component, OnInit } from '@angular/core';

import { Product } from '../product';

@Component({
  selector: 'app-products-list',
  inputs: ['productList'],
  outputs: ['onProductSelected'],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  productList: Product[];
  onProductSelected: EventEmitter<Product>;
  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }

}
