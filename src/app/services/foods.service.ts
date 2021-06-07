import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class FoodsService {

    constructor(private firestore: AngularFirestore) {}

    searchByValue() {
        return this.firestore.collection('foods').snapshotChanges();
    }
}
