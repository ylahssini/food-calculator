import { state } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const API = 'http://localhost:3004/foods';

@Injectable({
    providedIn: 'root'
})
export class FoodsService {
    private foodsSource = new BehaviorSubject({
        search: '',
        data: [] as unknown[],
    });
    public readonly foods = this.foodsSource.asObservable();

    constructor(private http: HttpClient) {}

    getFoods() {
        const state = this.foodsSource.getValue();
        const url = `${API}?name_like=${state.search}`;

        this.http.get(url).subscribe((res: any) => {
            const state = this.foodsSource.getValue();
            this.foodsSource.next({ ...state, data: res });
        });
    }

    setSearch(value: string) {
        const state = this.foodsSource.getValue();
        this.foodsSource.next({ ...state, search: value });
    }
}
