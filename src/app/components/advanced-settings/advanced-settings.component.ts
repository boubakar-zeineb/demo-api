import { isNumeric } from 'rxjs/util/isNumeric';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { DataHandWriting } from '../../entities/dataHandWriting';

@Component({
  selector: 'app-advanced-settings',
  templateUrl: './advanced-settings.component.html',
  styleUrls: ['./advanced-settings.component.css']
})
export class AdvancedSettingsComponent implements OnInit {

  typeOutput: SelectItem[];
  selectedTypeOutput = 'png';
  @Output() outgoingData = new EventEmitter<DataHandWriting>();
  @Input() handWriting_id: string;
  size: string;
  width: string;
  randomSeed: string;
  lineSpacingVar: string;
  @Input() color: string;
  height: string;
  lineSpacing: string;
  wordSpacing: string;
  id: string;
  constructor() { }

  ngOnInit() {
    this.color = '#ff0000';
    this.size = '20';
    this.width = '480';
    this.randomSeed = '-1';
    this.lineSpacingVar = '0.0';
    this.height = 'auto';
    this.lineSpacing = '1.5';
    this.wordSpacing = '0.0';
    this.typeOutput = [];
    this.typeOutput = [
      { label: 'WEB', value: 'png' },
      { label: 'PRINT', value: 'pdf' },
    ];
  }

  public sendData() {
    const dhw = new DataHandWriting();
    const unit = this.selectedTypeOutput === 'png' ? 'px' : 'pt';
    dhw.color = this.color;
    dhw.handwriting_id = this.id;
    dhw.size = this.size + unit;
    dhw.width = this.width + unit;
    dhw.randomSeed = this.randomSeed;
    dhw.lineSpacing = this.lineSpacing;
    dhw.lineSpacingVar = this.lineSpacingVar;
    if (isNumeric(this.height)) {
      dhw.height = this.height + unit;
    } else {
      dhw.height = this.height;
    }
    dhw.type = this.selectedTypeOutput;
    dhw.wordSpacing = this.wordSpacing;
    this.outgoingData.emit(dhw);
  }

  // Listning for changes
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    if (changes.handWriting_id) {
      this.handWriting_id = changes.handWriting_id.currentValue;
    }
    if (changes.color) {
      this.color = changes.color.currentValue;
    }
    this.sendData();
  }
}
