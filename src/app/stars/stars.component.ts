import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ri-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout (() => {
      console.log("Hello from setTimeout");
   }, 5000);
  }

}
