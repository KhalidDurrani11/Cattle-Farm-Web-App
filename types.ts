
export enum Page {
  HOME = 'HOME',
  MARKETPLACE = 'MARKETPLACE',
  DASHBOARD = 'DASHBOARD',
  LOGIN = 'LOGIN',
}

export interface Cattle {
  id: string;
  breed: string;
  age: number;
  gender: 'Male' | 'Female';
  weight: number;
  price: number;
  imageUrl: string;
  isVerified: boolean;
  location: string;
  seller: string;
  healthRecords: HealthRecord[];
}

export interface HealthRecord {
    date: string;
    vaccine: string;
    notes: string;
    vet: string;
}

export interface ChartData {
  name: string;
  price: number;
  demand: number;
}
