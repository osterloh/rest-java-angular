import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-neomind';

  constructor(private router:Router){}

  register(){
    this.router.navigate(["register"]);
  }

  search(){
    this.router.navigate(["search"]);
  }

}