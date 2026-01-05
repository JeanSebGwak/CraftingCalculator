import { Component, inject } from '@angular/core';
import { CalculatorStore } from './calculator.store';
import { Rarity } from '../../models/component.model';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatCardModule
  ]
})
export class CalculatorComponent {
  store = inject(CalculatorStore);

  displayedColumns = [
    'totalExceeded',
    'name',
    'common',
    'uncommon',
    'rare',
    'heroic',
    'epic',
    'legendary',
    'total',
    'actions'
  ];

  add(name: string, total: number) {
    if (!name) return;
    this.store.addComponent(name, total);
  }

  trackById(_: number, item: { id: string }) {
    return item.id;
 }
}