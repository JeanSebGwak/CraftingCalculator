import { ComponentMaterial, Rarity } from "../models/component.model";

const RARITY_WEIGHTS: Record<Rarity, number> = {
  Common: 1,
  Uncommon: 2,
  Rare: 3,
  Heroic: 4,
  Epic: 5,
  Legendary: 6
};

export function computeFinalQuality(
  components: ComponentMaterial[],
  qualityRating: number
): number {
  const total = components.reduce(
    (sum, c) => {
        return sum + ((c.common / c.total) * RARITY_WEIGHTS.Common * (1/components.length)) +
                     ((c.uncommon / c.total) * RARITY_WEIGHTS.Uncommon * (1/components.length)) +
                     ((c.rare / c.total) * RARITY_WEIGHTS.Rare * (1/components.length)) +
                     ((c.heroic / c.total) * RARITY_WEIGHTS.Heroic * (1/components.length)) +
                     ((c.epic / c.total) * RARITY_WEIGHTS.Epic * (1/components.length)) +
                     ((c.legendary / c.total) * RARITY_WEIGHTS.Legendary * (1/components.length));
    }, 
    0
  );

  return total + (qualityRating * 0.275 * 0.001);
}