import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss']
})
export class CheckboxInputComponent implements OnInit {
  @Input() id: String;
  @Input() checked;
  @Output() removeButtonClick: EventEmitter<any>  = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onRemoveButtonClick(evt) {
    this.removeButtonClick.emit({id: this.id});
  }

}
