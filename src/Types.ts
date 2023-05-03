export interface Tasa {
  name: string;
  value: number;
}

export interface Currency {
  name: string;
  code: string;
  tasas: Tasa[];
}
export interface DolarToday {
  _antibloqueo: Antibloqueo;
  _labels: Labels;
  _timestamp: Timestamp;
  USD: Usd;
  EUR: Eur;
  COL: Col;
  GOLD: Gold;
  USDVEF: Usdvef;
  USDCOL: Usdcol;
  EURUSD: Eurusd;
  BCV: Bcv;
  MISC: Misc;
}

export interface Antibloqueo {
  mobile: string;
  video: string;
  corto_alternativo: string;
  enable_iads: string;
  enable_admobbanners: string;
  enable_admobinterstitials: string;
  alternativo: string;
  alternativo2: string;
  notifications: string;
  resource_id: string;
}

export interface Labels {
  a: string;
  a1: string;
  b: string;
  c: string;
  d: string;
  e: string;
}

export interface Timestamp {
  epoch: string;
  fecha: string;
  fecha_corta: string;
  fecha_corta2: string;
  fecha_nice: string;
  dia: string;
  dia_corta: string;
}

export interface Usd {
  transferencia: number;
  transfer_cucuta: number;
  efectivo: number;
  efectivo_real: number;
  efectivo_cucuta: number;
  promedio: number;
  promedio_real: number;
  cencoex: number;
  sicad1: number;
  sicad2: number;
  bitcoin_ref: number;
  localbitcoin_ref: number;
  dolartoday: number;
}

export interface Eur {
  transferencia: number;
  transfer_cucuta: number;
  efectivo: number;
  efectivo_real: number;
  efectivo_cucuta: number;
  promedio: number;
  promedio_real: number;
  cencoex: number;
  sicad1: number;
  sicad2: number;
  dolartoday: number;
}

export interface Col {
  efectivo: number;
  transfer: number;
  compra: number;
  venta: number;
}

export interface Gold {
  rate: number;
}

export interface Usdvef {
  rate: number;
}

export interface Usdcol {
  setfxsell: number;
  setfxbuy: number;
  rate: number;
  ratecash: number;
  ratetrm: number;
  trmfactor: number;
  trmfactorcash: number;
}

export interface Eurusd {
  rate: number;
}

export interface Bcv {
  fecha: string;
  fecha_nice: string;
  liquidez: string;
  reservas: string;
}

export interface Misc {
  petroleo: string;
  reservas: string;
}
