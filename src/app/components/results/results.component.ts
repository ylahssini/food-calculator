import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodsService } from 'src/app/services/foods.service';

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
    search = '';
    foods = null as unknown[] | null;

    constructor(private foodsService: FoodsService) { }

    ngOnInit(): void {
        this.foodsService.foods.subscribe((value) => {
            console.log(value);
            this.foods = value.data;
            this.search = value.search;
        });
    }

}
