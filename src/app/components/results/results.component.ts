import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FoodsService } from 'src/app/services/foods.service';
import { DialogCalculator } from './dialog-calculator/dialog-calculator.component';

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
    search = '';
    foods = [] as any;
    p: number = 1;

    constructor(private foodsService: FoodsService, public dialog: MatDialog) { }

    ngOnInit(): void {
        this.foodsService.foods.pipe().subscribe((value) => {
            this.foods = value.data;

            if (this.search !== value.search) {
                this.p = 1;
            }

            this.search = value.search;
        });
    }

    openDialog(food: Record<string, any>) {
        this.dialog.open(DialogCalculator, {
            data: food,
            width: '600px',
            height: 'auto',
        });
    }
}
