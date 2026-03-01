export interface Deal {
  id: string;
  name: string;
  playType?: string;
  description: string;
  abbreviation: string;
  image: string;
  defaultCount: number;
}

export interface Player {
  id: string;
  name: string;
  deals: string[]; // Deal IDs
}
