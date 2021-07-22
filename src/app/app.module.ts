import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ResultsComponent } from './components/results/results.component';
import { FoodsService } from './services/foods.service';
import { DialogCalculatorModule } from './components/results/dialog-calculator/dialog-calculator.module';

@NgModule({
    declarations: [
        AppComponent,
        SearchBarComponent,
        ResultsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        NgxPaginationModule,
        MatDialogModule,
        DialogCalculatorModule
    ],
    providers: [FoodsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
