import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'dialog-calculator',
    templateUrl: 'dialog-calculator.component.html',
    styleUrls: ['./dialog-calculator.component.scss']
})
export class DialogCalculator implements OnInit {
    serving: null | number = null;
    constructor(@Inject(MAT_DIALOG_DATA) public data: Record<string, any>) {}

    ngOnInit() {}
}