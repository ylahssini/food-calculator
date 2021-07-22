import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';

import { DialogCalculator } from './dialog-calculator.component';


@NgModule({
    declarations: [
        DialogCalculator,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        MatDialogModule,
    ],
    providers: [],
    bootstrap: [DialogCalculator]
})
export class DialogCalculatorModule { }