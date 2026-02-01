export interface Deal {
  id: string;
  name: string;
  description: string;
  abbreviation: string;
  image: string;
}

export interface Player {
  id: string;
  name: string;
  deals: string[]; // Deal IDs
}
