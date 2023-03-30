import { Component } from '@angular/core';

@Component({
  selector: 'app-exo03',
  templateUrl: './exo03.component.html',
  styleUrls: ['./exo03.component.scss']
})
export class Exo03Component {

  temps: number = 0;
  timer: any;

  start (): void {
    if (this.timer) return;

    this.timer = setInterval(() => { this.temps++; }, 1000);
  }

  pause (): void {
    clearInterval(this.timer);
    this.timer = null;
  }

  reset (): void {
    this.temps = 0;
    this.pause();
  }

}
