import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.css']
})
export class TransactionCardComponent{
  @Input()
  transactionData?: Transaction;
}