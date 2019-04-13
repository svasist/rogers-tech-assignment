import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSubmitInputComponent } from './item-submit-input.component';

describe('ItemSubmitInputComponent', () => {
  let component: ItemSubmitInputComponent;
  let fixture: ComponentFixture<ItemSubmitInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSubmitInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSubmitInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
