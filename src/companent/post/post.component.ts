import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule,
    RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  posts: Post[] = []  //boş post listesi classs çalıştığında

  constructor(private postServices: PostService) { }
  ngOnInit(): void {
    this.getList(); //liste geliyor böyle
  }
  getList() {
    this.postServices.getAll().subscribe(result => {
      this.posts = result["posts"];
    })
  }
}
