import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  charArray: Array<string>;
  numberArray: Array<string>;
  selectedColumnIndex: number;
  selectedRowIndex: number;
  totalNumberOfRows: number = 50;

  ngOnInit() {
    let chars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.charArray = chars.split('');
    this.charArray.unshift(''); // push '' on first index because we need first column as blank

    this.numberArray = (<any>Array(this.totalNumberOfRows)).fill().map((x, i) => i + 1);
    this.numberArray.unshift(''); // push '' on first index because we need first column as blank

  }

  /**
   * 
   * @param rowIndex - it is row Index where I have focused on Input Field
   * @param colIndex  - it is column Index where I have focused on Input Field
   */
  onInputFocus(rowIndex: number, colIndex: number): void {
    this.selectedColumnIndex = colIndex;
    this.selectedRowIndex = rowIndex;
  }

}
