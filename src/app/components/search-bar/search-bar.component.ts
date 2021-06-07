import { Component, OnInit } from '@angular/core';
import { FoodsService } from 'src/app/services/foods.service';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
    input = '';
    foods = [];

    constructor(private foodsService: FoodsService) { }

    ngOnInit(): void {
    }

    handleClear() {
        this.input = '';
    }

    handleSubmit() {
        this.foodsService.searchByValue().subscribe((res) => console.log(res));
    }
}
