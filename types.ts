export interface Competitor {
  name: string;
  tier: string;
  price: string;
  features: string[];
  target: string;
  color: string;
}

export interface Trend {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  stat?: string;
}

export interface SpendingRank {
  rank: number;
  name: string;
  category: string;
  description: string;
}
