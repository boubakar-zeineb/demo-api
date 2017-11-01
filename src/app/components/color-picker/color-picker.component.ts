import { AdvancedSettingsComponent } from '../advanced-settings/advanced-settings.component';
import { Component, Input, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { DataHandWriting } from '../../entities/dataHandWriting';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
})
export class ColorPickerComponent implements OnInit {
  color: string;
  handwritings: SelectItem[];
  selectedHandWrite: string;
  dhw: DataHandWriting;

  constructor() {
  }

  ngOnInit() {
    this.handwritings = [];
    this.handwritings = [
      {label: 'Select', value: null},
      {label: 'Abbey', value: '8X3WQ4D800B0'},
      {label: 'Ainslie', value: '5WGWVYD800X0'},
      {label: 'Alder', value: '31SB3NWR00E0'},
      {label: 'Allen', value: '5WGWVW8800VV'},
      {label: 'Anne', value: '98N8PTWR00B6'}
  ];
  this.selectedHandWrite = this.handwritings[0].value;
  this.color = '#ff0000';
  }

  // passing handwrinting data between components
  public handleEvent(dhw: any) {
    this.dhw = dhw;
    const color_convert = this.dhw.type === 'png' ? this.dhw.color : this.hexToCMYK(this.dhw.color);
    this.dhw.color = color_convert.toString();
    this.dhw.handwriting_id = this.selectedHandWrite;
  }

  // convert the color if needed (Hex for PNG), (CMYK for PDF)
  hexToCMYK (hex) {
    let computedC = 0;
    let computedM = 0;
    let computedY = 0;
    let computedK = 0;

    hex = (hex.charAt(0) === '#') ? hex.substring(1, 7) : hex;

    if (hex.length !== 6) {
     alert ('Invalid length of the input hex value!');
     return;
    }
    if (/[0-9a-f]{6}/i.test(hex) !== true) {
     alert ('Invalid digits in the input hex value!');
     return;
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // BLACK
    if (r === 0 && g === 0 && b === 0) {
     computedK = 1;
     return [0, 0, 0, 1];
    }

    computedC = 1 - (r / 255);
    computedM = 1 - (g / 255);
    computedY = 1 - (b / 255);

    const minCMY = Math.min(computedC, Math.min(computedM, computedY));

    computedC = (computedC - minCMY) / (1 - minCMY) ;
    computedM = (computedM - minCMY) / (1 - minCMY) ;
    computedY = (computedY - minCMY) / (1 - minCMY) ;
    computedK = minCMY;

    return '(' + computedC + ',' + computedM + ',' + computedY + ',' + computedK + ')';
   }

}
