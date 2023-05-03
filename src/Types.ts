export interface Tasa {
  name: string;
  value: number;
}

export interface Currency {
  name: string;
  code: string;
  tasas: Tasa[];
}
