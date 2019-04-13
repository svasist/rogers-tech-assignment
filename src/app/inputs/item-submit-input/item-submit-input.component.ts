import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-submit-input',
  templateUrl: './item-submit-input.component.html',
  styleUrls: ['./item-submit-input.component.scss']
})
export class ItemSubmitInputComponent implements OnInit {
  public itemName: String;
  @Output() submitButtonClick: EventEmitter<any>  = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSubmit(evt) {
    this.submitButtonClick.emit({name: this.itemName});
    this.itemName = "";
  }
}
