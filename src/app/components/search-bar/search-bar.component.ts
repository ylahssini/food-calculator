import { Component, OnInit } from '@angular/core';
import { FoodsService } from 'src/app/services/foods.service';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
    input = '';

    constructor(private foodsService: FoodsService) { }

    ngOnInit(): void {
    }

    handleClear() {
        this.foodsService.setSearch('');
        this.input = '';
    }

    handleSubmit() {
        this.foodsService.setSearch(this.input);
        this.foodsService.getFoods();
    }

    handleEnter(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            this.handleSubmit();
        }
    }
}
