import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer">
  <div class="container">
  <div class="content has-text-centered">
    <p>
      Made by <a href="https://github.com/zarlashta27">Zarlashta Manan</a>
    </p>
  </div>
  </div>
  </footer>
  
  `,
  
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
