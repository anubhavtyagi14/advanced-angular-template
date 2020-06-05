import { Component, OnInit } from '@angular/core';
import { ExampleRoutes } from '../../routing/examples.routes';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  adminTabs = [
    {
      label: ExampleRoutes.LOADING_BUTTONS.name,
      path: ExampleRoutes.LOADING_BUTTONS.path
    },
    {
      label: ExampleRoutes.APP_LOADER.name,
      path: ExampleRoutes.APP_LOADER.path
    },
    {
      label: ExampleRoutes.FORMLY_EXAMPLE.name,
      path: ExampleRoutes.FORMLY_EXAMPLE.path
    }
  ];
  loading: boolean;
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
