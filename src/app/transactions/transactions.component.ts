import { Component } from '@angular/core';
import { Transaction } from '../models/transaction';
import { TRANSACTIONS } from '../data/transactions';
import { TransactionCardComponent } from '../transaction-card/transaction-card.component';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  transactions: Transaction[] = TRANSACTIONS;
}