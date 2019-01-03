import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-primary is-bold">
    <div class="hero-body">
    <div class="container">

      <h1 class="title">Contact Us!</h1>

    </div>
    </div>
    </section>

    <!-- form goes here -->
    <form (ngSubmit)="processForm()">

    <!-- name -->
    <div class="field">
      <label class="label">Name</label>
      <input 
        type="text" 
        name="name" 
        class="input" 
        placeholder="Your Name" 
        [(ngModel)]="name"
        required
        minLength="3"
        #nameInput="ngModel">

      <div class="help is-error" *ngIf="nameInput.invalid && nameInput.dirty">
        Name is required and it needs to be at least 3 characters long.
      </div>
    </div>
  
    <!-- email -->
    <div class="field">
      <label class="label">Email</label>
      <input 
        type="email" 
        name="email" 
        class="input" 
        placeholder="Your Email" 
        [(ngModel)]="email"
        required
        email
        #emailInput="ngModel">

      <div class="help is-error" *ngIf="emailInput.invalid && emailInput.dirty">
        It needs to be a valid email.
      </div>
    </div>
  
    <!-- message -->
    <div class="field">
      <label class="label">Message</label>
      <textarea 
        class="textarea" 
        name="message" 
        placeholder="What's your message?"
        [(ngModel)]="message">
        required
        #messageInput="ngModel"</textarea>

      <div class="help is-error" *ngIf="emailInput.invalid && emailInput.dirty">
        A message is required here!
      </div>
    </div>
  
    <button type="submit" class="button is-danger is-large">Submit</button>
  
  </form>
  
  `,

  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit() {}

    /** Process the form we have. Send it to any backend
     * Only alerting for now
     */

     processForm() {
       const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
       alert(allInfo);
     }

}
