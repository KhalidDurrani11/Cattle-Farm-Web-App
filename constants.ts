
import { Cattle, ChartData } from './types';

export const MOCK_CATTLE_DATA: Cattle[] = [
  {
    id: 'c1',
    breed: 'Sahiwal Bull',
    age: 3,
    gender: 'Male',
    weight: 450,
    price: 250000,
    imageUrl: 'https://picsum.photos/seed/bull1/600/400',
    isVerified: true,
    location: 'Punjab, PK',
    seller: 'Ali Farms',
    healthRecords: [
        { date: '2023-01-15', vaccine: 'FMDV', notes: 'Booster shot', vet: 'Dr. Ahmad' },
        { date: '2022-07-20', vaccine: 'HS', notes: 'Annual vaccination', vet: 'Dr. Ahmad' },
    ]
  },
  {
    id: 'c2',
    breed: 'Cholistani Cow',
    age: 4,
    gender: 'Female',
    weight: 380,
    price: 220000,
    imageUrl: 'https://picsum.photos/seed/cow1/600/400',
    isVerified: true,
    location: 'Sindh, PK',
    seller: 'Fatima Dairy',
    healthRecords: [
        { date: '2023-03-10', vaccine: 'FMDV', notes: 'Routine checkup', vet: 'Dr. Sara' },
    ]
  },
  {
    id: 'c3',
    breed: 'Red Sindhi',
    age: 2.5,
    gender: 'Female',
    weight: 350,
    price: 190000,
    imageUrl: 'https://picsum.photos/seed/cow2/600/400',
    isVerified: false,
    location: 'Bahawalpur, PK',
    seller: 'Chaudhry Cattle',
    healthRecords: []
  },
  {
    id: 'c4',
    breed: 'Dhanni Bull',
    age: 3.5,
    gender: 'Male',
    weight: 500,
    price: 280000,
    imageUrl: 'https://picsum.photos/seed/bull2/600/400',
    isVerified: true,
    location: 'Attock, PK',
    seller: 'Khan Livestock',
    healthRecords: [
        { date: '2023-02-01', vaccine: 'FMDV', notes: 'All clear', vet: 'Dr. Khan' },
        { date: '2022-08-11', vaccine: 'BQ', notes: 'Pre-season shot', vet: 'Dr. Khan' },
    ]
  },
   {
    id: 'c5',
    breed: 'Nili-Ravi Buffalo',
    age: 5,
    gender: 'Female',
    weight: 600,
    price: 350000,
    imageUrl: 'https://picsum.photos/seed/buffalo1/600/400',
    isVerified: true,
    location: 'Faisalabad, PK',
    seller: 'Waraich Farms',
    healthRecords: [
        { date: '2023-05-01', vaccine: 'FMDV', notes: 'Excellent health', vet: 'Dr. Fatima' },
    ]
  },
  {
    id: 'c6',
    breed: 'Siri',
    age: 2,
    gender: 'Male',
    weight: 320,
    price: 180000,
    imageUrl: 'https://picsum.photos/seed/bull3/600/400',
    isVerified: false,
    location: 'KPK, PK',
    seller: 'Mountain Traders',
    healthRecords: []
  },
];

export const MARKET_TRENDS_DATA: ChartData[] = [
    { name: 'Jan', price: 210000, demand: 2400 },
    { name: 'Feb', price: 225000, demand: 2210 },
    { name: 'Mar', price: 215000, demand: 2290 },
    { name: 'Apr', price: 230000, demand: 2000 },
    { name: 'May', price: 245000, demand: 2181 },
    { name: 'Jun', price: 260000, demand: 2500 },
    { name: 'Jul', price: 280000, demand: 2100 },
];
