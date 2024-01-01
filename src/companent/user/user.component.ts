import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  users: User[] = []

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.userService.getAll().subscribe(result => {
      this.users = result["users"];
    })
  }
}
