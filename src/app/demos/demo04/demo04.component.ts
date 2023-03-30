import { Component } from '@angular/core';

@Component({
  selector: 'app-demo04',
  templateUrl: './demo04.component.html',
  styleUrls: ['./demo04.component.scss']
})
export class Demo04Component {

  isDisabled: boolean = true;
  maximum: number = 30;
  minimum: number = 0;

  value: number = 0;

  url: string = "https://www.google.com";

}
