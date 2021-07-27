import { state } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const API = 'http://localhost:3000/api';

@Injectable({
    providedIn: 'root'
})
export class FoodsService {
    private foodsSource = new BehaviorSubject({
        search: '',
        data: [] as any,
    });
    public readonly foods = this.foodsSource.asObservable();

    constructor(private http: HttpClient) {}

    getFoods() {
        const state = this.foodsSource.getValue();
        const url = `${API}?name=${state.search}`;

        if (state.search !== '') {
            this.http.get(url).subscribe((res: any) => {
                const state = this.foodsSource.getValue();
                this.foodsSource.next({ ...state, data: res });
            });
        } else {
            const state = this.foodsSource.getValue();
            this.foodsSource.next({ ...state, data: [] });
        }
    }

    setSearch(value: string) {
        const state = this.foodsSource.getValue();
        let next = { ...state, search: value };

        if (value.length === 0) {
            next = { data: [], search: value };
        }

        this.foodsSource.next(next);
    }
}
