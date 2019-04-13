import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemListComponent } from './view/item-list/item-list.component';
import { ItemSubmitInputComponent } from './inputs/item-submit-input/item-submit-input.component';
import { SubmitButtonComponent } from './inputs/submit-button/submit-button.component';
import { TextInputComponent } from './inputs/text-input/text-input.component';
import { CheckboxInputComponent } from './inputs/checkbox-input/checkbox-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemSubmitInputComponent,
    SubmitButtonComponent,
    TextInputComponent,
    CheckboxInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
