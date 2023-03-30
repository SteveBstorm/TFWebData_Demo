import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo01',
  templateUrl: './demo01.component.html',
  styleUrls: ['./demo01.component.scss']
})
export class Demo01Component implements OnInit {

  maVariable1: string = "Bonjour les WDA !";
  maVariable2!: number; // definite assigment assertion
  declare maVariable3: boolean; // ambient declaration

  maVariable4: any[] = ['bonjour', 5, true, () => { }, {}];
  maVariable5: null = null;
  maVariable6: undefined= undefined;

  ngOnInit (): void {
    this.maVariable2 = 0;
    this.maVariable3 = true;
  }
  
}
