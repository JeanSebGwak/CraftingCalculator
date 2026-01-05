import { Injectable, computed, signal } from '@angular/core';
import { computeFinalQuality } from '../../shared/rarity.helper';
import { ComponentMaterial, Rarity } from '../../models/component.model';

@Injectable({ providedIn: 'root' })
export class CalculatorStore {
  private readonly _components = signal<ComponentMaterial[]>([]);
  readonly components = this._components.asReadonly();
  private readonly _qualityRating = signal<number>(0);
  private readonly qualityRating = this._qualityRating.asReadonly();

  readonly finalQuality = computed(() =>
    computeFinalQuality(this._components(), this._qualityRating())
  );

  addComponent(name: string, total: number) {
    this._components.update(list => [
      ...list,
      {
        id: crypto.randomUUID(),
        name,
        total: total,
        common: 0,
        uncommon: 0,
        rare: 0,
        heroic: 0,
        epic: 0,
        legendary: 0,
      }
    ]);
  }

  updateValue(
    id: string,
    field: 'common' | 'uncommon' | 'rare' | 'heroic' | 'epic' | 'legendary' | 'total',
    value: number
  ) {
    this._components.update(list =>
      list.map(c =>
        c.id === id ? { ...c, [field]: value } : c
      )
    );
  }

  removeComponent(id: string) {
    this._components.update(list =>
      list.filter(c => c.id !== id)
    );
  }

  updateQualityRating(qualityRating: number) {
    this._qualityRating.set(qualityRating);
  }
}