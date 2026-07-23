export type AccountStatus = 'Active' | 'Inactive';

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  registrationDate: string;
  orders: number;
  totalSpent: number;
  status: AccountStatus;
}

export const customers: Customer[] = [
  {
    id: 'C001',
    name: 'Priya Krishnamurthy',
    email: 'priya.k@email.com',
    phone: '+94 77 234 5678',
    registrationDate: '2024-03-15',
    orders: 7,
    totalSpent: 94500,
    status: 'Active',
  },
  {
    id: 'C002',
    name: 'Meera Aravindhan',
    email: 'meera.a@email.com',
    phone: '+94 71 876 5432',
    registrationDate: '2024-05-22',
    orders: 4,
    totalSpent: 41200,
    status: 'Active',
  },
  {
    id: 'C003',
    name: 'Kavitha Sundaram',
    email: 'kavitha.s@email.com',
    phone: '+94 76 543 2109',
    registrationDate: '2023-11-08',
    orders: 12,
    totalSpent: 178600,
    status: 'Active',
  },
  {
    id: 'C004',
    name: 'Lakshmi Narayanan',
    email: 'lakshmi.n@email.com',
    phone: '+94 77 012 3456',
    registrationDate: '2024-01-30',
    orders: 2,
    totalSpent: 16800,
    status: 'Inactive',
  },
  {
    id: 'C005',
    name: 'Anitha Rajendran',
    email: 'anitha.r@email.com',
    phone: '+94 70 987 6543',
    registrationDate: '2024-06-10',
    orders: 5,
    totalSpent: 62300,
    status: 'Active',
  },
  {
    id: 'C006',
    name: 'Deepa Venkatesh',
    email: 'deepa.v@email.com',
    phone: '+94 75 321 0987',
    registrationDate: '2023-09-14',
    orders: 9,
    totalSpent: 112400,
    status: 'Active',
  },
  {
    id: 'C007',
    name: 'Saranya Murugan',
    email: 'saranya.m@email.com',
    phone: '+94 71 456 7890',
    registrationDate: '2024-04-05',
    orders: 1,
    totalSpent: 3200,
    status: 'Inactive',
  },
  {
    id: 'C008',
    name: 'Nithya Balachandran',
    email: 'nithya.b@email.com',
    phone: '+94 77 654 3210',
    registrationDate: '2024-02-18',
    orders: 6,
    totalSpent: 79800,
    status: 'Active',
  },
];
