import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-users-list',
  template: `
    <section class="section">
    <div class="container">
    <div class="columns is-multiline">

    <!-- loop over our users and give them each a card -->
      <div class="column is-4" *ngFor="let user of users | async">
        <div class="card">
          <div class="card-content">
          <a routerLink="/users/{{ user.login }}">{{ user.login }}</a>
          </div>
        </div>
      </div>

    </div>
    </div>
    </section>
  `,
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users;

  constructor(private userService: UserService) { }

  //OnInit method is a place that grabs data since it will happen after our component is initialized and has all its dependencies.
  ngOnInit() {
    this.users = this.userService.getUsers();
      
  }

}
