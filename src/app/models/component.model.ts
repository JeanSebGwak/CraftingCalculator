export type Rarity = 'Common' | 'Uncommon' | 'Rare' | 'Heroic' | 'Epic' | 'Legendary';

export interface ComponentMaterial {
   id: string;
   name: string;
   total: number;
   common: number;
   uncommon: number;
   rare: number;
   heroic: number;
   epic: number;
   legendary: number;
}