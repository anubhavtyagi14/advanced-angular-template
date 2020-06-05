import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-buttons',
  templateUrl: './loading-buttons.component.html',
  styleUrls: ['./loading-buttons.component.scss']
})
export class LoadingButtonsComponent implements OnInit {
  loading: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
