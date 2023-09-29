import { Component } from '@angular/core';
import { Product } from '../models/product';
import { PRODUCTS } from '../data/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = PRODUCTS;
}