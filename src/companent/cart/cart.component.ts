import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../../models/cart';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  carts: Cart[] = [];

  constructor(private cartServices: CartService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.cartServices.getAll().subscribe(result => {
      this.carts = result["carts"];

    })
  }

}
