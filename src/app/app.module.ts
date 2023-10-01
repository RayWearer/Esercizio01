import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionCardComponent } from './transaction-card/transaction-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    TransactionsComponent,
    TransactionCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }