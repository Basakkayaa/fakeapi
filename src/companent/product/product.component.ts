import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  products: Product[] = []

  constructor(private productServices: ProductService) { }

  ngOnInit(): void {
    this.getList()
  }
  getList() {
    this.productServices.getAll().subscribe(result => {
      this.products = result["products"];
    })
  }
}
