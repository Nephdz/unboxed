export interface Deal {
  id: string;
  name: string;
  description: string;
  imagePlaceholder: string;
}

export interface Player {
  id: string;
  name: string;
  deals: string[]; // Deal IDs
}
