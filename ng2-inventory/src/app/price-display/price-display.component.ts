import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'price-display',
  inputs: ['price'],
  template: `
    <div class="price-display">\${{ price }}</div>
  `,
  styleUrls: ['./price-display.component.css']
})
export class PriceDisplayComponent implements OnInit {
  price: number;

  constructor() { }

  ngOnInit() {
  }

}
