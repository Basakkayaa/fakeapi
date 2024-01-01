import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../../models/quote';
import { QuoteService } from '../../services/quote.service';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [];
  constructor(private quoteServices: QuoteService) { }
  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this.quoteServices.getAll().subscribe(result => {
      this.quotes = result["quotes"];
    })
  }
}
