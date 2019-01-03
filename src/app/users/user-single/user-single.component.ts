import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-single',
  template:`
  <section class="section">
  <div class="container">
  
    <div class="card" *ngIf="user">
      <img [src]="user.mojombo_url">
      <h2>{{ user.login }}</h2>
    </div>
  
  </div>
  </section>

  `,
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {
  //property to hold our user when we eventually grab them from github api
  user;

  //inject the things we need 
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  
  ) { }

  ngOnInit() {     
     //get username out of the route params
     this.route.params.subscribe(params => {
      const username = params['username'];
      this.userService
          .getUser(username)
          .subscribe(user => this.user = user);
  
    });
  }

}
