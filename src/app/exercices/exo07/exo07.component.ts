import { Component } from '@angular/core';

@Component({
  selector: 'app-exo07',
  templateUrl: './exo07.component.html',
  styleUrls: ['./exo07.component.scss']
})
export class Exo07Component {

  temps: number = 50;
  timer: any;

  start (): void {
    if (this.timer) return;
    this.timer = setInterval(() => { this.temps++; }, 1000);
  }

  stop (): void {
    clearInterval(this.timer);
    this.timer = null;
  }

  reset (): void {
    this.temps = 0;
    this.stop();
  }


}
