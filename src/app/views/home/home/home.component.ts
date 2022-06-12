import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = environment.appname;
  constructor(){}

  items = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]
  ngOnInit(): void {
  }

}
