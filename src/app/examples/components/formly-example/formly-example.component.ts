import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formly-example',
  templateUrl: './formly-example.component.html',
  styles: [
  ]
})
export class FormlyExampleComponent implements OnInit {
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true
      }
    }
  ];
  constructor() { }


  onSubmit() {
    console.log(this.model);
  }
  ngOnInit(): void {
  }

}
