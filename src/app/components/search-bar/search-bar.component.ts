import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
    input = '';

    constructor() { }

    ngOnInit(): void {
    }

    handleClear() {
        this.input = '';
    }
}
