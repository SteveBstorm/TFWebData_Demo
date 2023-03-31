import { Component } from '@angular/core';

@Component({
  selector: 'app-demo08',
  templateUrl: './demo08.component.html',
  styleUrls: ['./demo08.component.scss']
})
export class Demo08Component {

  italic: boolean = false;
  bold: boolean = false;
  underline: boolean = false;

  color: string = 'black';
  margin: string = '0px';

  currentStyle: any;

  
  setCurrentStyle () {
    this.currentStyle = {
      'font-style' : this.italic ? 'italic' : 'normal',
      'font-weight': this.bold ? 'bold' : 'normal',
      'text-decoration': this.underline ? 'underline' : 'none',
    }
  }

  switchItalic() {
    this.italic = !this.italic;
    this.setCurrentStyle()
  }

  switchBold() {
    this.bold = !this.bold;
    this.setCurrentStyle()
  }

  switchUnderline() {
    this.underline = !this.underline;
    this.setCurrentStyle();
  }

}
