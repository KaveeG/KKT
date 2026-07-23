export type OrderStatus = 'Pending' | 'Confirmed' | 'Processing' | 'Delivered' | 'Completed' | 'Cancelled';
export type PaymentStatus = 'Pending' | 'Paid' | 'Failed' | 'Refunded';

export interface OrderItem {
  productId: string;
  productName: string;
  image: string;
  size: string;
  colour: string;
  quantity: number;
  unitPrice: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  email: string;
  phone: string;
  orderDate: string;
  items: OrderItem[];
  subtotal: number;
  deliveryCharge: number;
  total: number;
  paymentMethod: string;
  paymentStatus: PaymentStatus;
  status: OrderStatus;
  address: string;
  city: string;
  postalCode: string;
}

export const orders: Order[] = [
  {
    id: 'O001',
    orderNumber: 'KK-2025-0041',
    customerName: 'Kavitha Sundaram',
    email: 'kavitha.s@email.com',
    phone: '+94 76 543 2109',
    orderDate: '2025-07-18',
    items: [
      { productId: 'P001', productName: 'Kanjivaram Silk Saree', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=80&h=80&fit=crop&auto=format', size: 'Free Size', colour: 'Deep Red', quantity: 1, unitPrice: 24500 },
      { productId: 'P002', productName: 'Embroidered Anarkali Kurti', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=80&h=80&fit=crop&auto=format', size: 'M', colour: 'Ivory', quantity: 1, unitPrice: 6500 },
    ],
    subtotal: 31000,
    deliveryCharge: 0,
    total: 31000,
    paymentMethod: 'Cash on Delivery',
    paymentStatus: 'Pending',
    status: 'Processing',
    address: '12 Flower Road',
    city: 'Colombo 07',
    postalCode: '00700',
  },
  {
    id: 'O002',
    orderNumber: 'KK-2025-0040',
    customerName: 'Priya Krishnamurthy',
    email: 'priya.k@email.com',
    phone: '+94 77 234 5678',
    orderDate: '2025-07-17',
    items: [
      { productId: 'P006', productName: 'Banarasi Georgette Saree', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=80&h=80&fit=crop&auto=format', size: 'Free Size', colour: 'Magenta', quantity: 1, unitPrice: 12500 },
    ],
    subtotal: 12500,
    deliveryCharge: 0,
    total: 12500,
    paymentMethod: 'Cash on Delivery',
    paymentStatus: 'Paid',
    status: 'Delivered',
    address: '78 Temple Lane',
    city: 'Kandy',
    postalCode: '20000',
  },
  {
    id: 'O003',
    orderNumber: 'KK-2025-0039',
    customerName: 'Anitha Rajendran',
    email: 'anitha.r@email.com',
    phone: '+94 70 987 6543',
    orderDate: '2025-07-15',
    items: [
      { productId: 'P003', productName: 'Bridal Lehenga Set', image: 'https://images.unsplash.com/photo-1583391733981-8498408ee4b6?w=80&h=80&fit=crop&auto=format', size: 'S', colour: 'Crimson', quantity: 1, unitPrice: 38000 },
    ],
    subtotal: 38000,
    deliveryCharge: 0,
    total: 38000,
    paymentMethod: 'Cash on Delivery',
    paymentStatus: 'Pending',
    status: 'Confirmed',
    address: '34 Palm Grove',
    city: 'Galle',
    postalCode: '80000',
  },
  {
    id: 'O004',
    orderNumber: 'KK-2025-0038',
    customerName: 'Nithya Balachandran',
    email: 'nithya.b@email.com',
    phone: '+94 77 654 3210',
    orderDate: '2025-07-14',
    items: [
      { productId: 'P004', productName: 'Cotton Printed Frock', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=80&h=80&fit=crop&auto=format', size: 'M', colour: 'Coral', quantity: 2, unitPrice: 3200 },
      { productId: 'P010', productName: 'Organza Puff-Sleeve Top', image: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=80&h=80&fit=crop&auto=format', size: 'S', colour: 'Blush', quantity: 1, unitPrice: 3600 },
    ],
    subtotal: 10000,
    deliveryCharge: 0,
    total: 10000,
    paymentMethod: 'Cash on Delivery',
    paymentStatus: 'Paid',
    status: 'Delivered',
    address: '22 Lake Drive',
    city: 'Negombo',
    postalCode: '11500',
  },
  {
    id: 'O005',
    orderNumber: 'KK-2025-0037',
    customerName: 'Deepa Venkatesh',
    email: 'deepa.v@email.com',
    phone: '+94 75 321 0987',
    orderDate: '2025-07-12',
    items: [
      { productId: 'P009', productName: 'Designer Lehenga Choli', image: 'https://images.unsplash.com/photo-1583391733981-8498408ee4b6?w=80&h=80&fit=crop&auto=format', size: 'Free Size', colour: 'Orange', quantity: 1, unitPrice: 15800 },
    ],
    subtotal: 15800,
    deliveryCharge: 0,
    total: 15800,
    paymentMethod: 'Cash on Delivery',
    paymentStatus: 'Paid',
    status: 'Completed',
    address: '9 Hill Street',
    city: 'Nuwara Eliya',
    postalCode: '22200',
  },
  {
    id: 'O006',
    orderNumber: 'KK-2025-0036',
    customerName: 'Meera Aravindhan',
    email: 'meera.a@email.com',
    phone: '+94 71 876 5432',
    orderDate: '2025-07-11',
    items: [
      { productId: 'P007', productName: 'Straight-Cut Kurti', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=80&h=80&fit=crop&auto=format', size: 'L', colour: 'Navy', quantity: 1, unitPrice: 2800 },
    ],
    subtotal: 2800,
    deliveryCharge: 350,
    total: 3150,
    paymentMethod: 'Cash on Delivery',
    paymentStatus: 'Pending',
    status: 'Pending',
    address: '55 Church Street',
    city: 'Jaffna',
    postalCode: '40000',
  },
  {
    id: 'O007',
    orderNumber: 'KK-2025-0035',
    customerName: 'Kavitha Sundaram',
    email: 'kavitha.s@email.com',
    phone: '+94 76 543 2109',
    orderDate: '2025-07-09',
    items: [
      { productId: 'P008', productName: 'Flared Festive Frock', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=80&h=80&fit=crop&auto=format', size: 'M', colour: 'Gold', quantity: 1, unitPrice: 5500 },
      { productId: 'P002', productName: 'Embroidered Anarkali Kurti', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=80&h=80&fit=crop&auto=format', size: 'M', colour: 'Powder Blue', quantity: 1, unitPrice: 6500 },
    ],
    subtotal: 12000,
    deliveryCharge: 0,
    total: 12000,
    paymentMethod: 'Cash on Delivery',
    paymentStatus: 'Paid',
    status: 'Completed',
    address: '12 Flower Road',
    city: 'Colombo 07',
    postalCode: '00700',
  },
  {
    id: 'O008',
    orderNumber: 'KK-2025-0034',
    customerName: 'Lakshmi Narayanan',
    email: 'lakshmi.n@email.com',
    phone: '+94 77 012 3456',
    orderDate: '2025-07-05',
    items: [
      { productId: 'P004', productName: 'Cotton Printed Frock', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=80&h=80&fit=crop&auto=format', size: 'L', colour: 'Yellow', quantity: 1, unitPrice: 3200 },
    ],
    subtotal: 3200,
    deliveryCharge: 350,
    total: 3550,
    paymentMethod: 'Cash on Delivery',
    paymentStatus: 'Refunded',
    status: 'Cancelled',
    address: '7 Marine Parade',
    city: 'Colombo 03',
    postalCode: '00300',
  },
  {
    id: 'O009',
    orderNumber: 'KK-2025-0033',
    customerName: 'Priya Krishnamurthy',
    email: 'priya.k@email.com',
    phone: '+94 77 234 5678',
    orderDate: '2025-06-30',
    items: [
      { productId: 'P010', productName: 'Organza Puff-Sleeve Top', image: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=80&h=80&fit=crop&auto=format', size: 'XS', colour: 'White', quantity: 2, unitPrice: 3600 },
    ],
    subtotal: 7200,
    deliveryCharge: 0,
    total: 7200,
    paymentMethod: 'Cash on Delivery',
    paymentStatus: 'Paid',
    status: 'Completed',
    address: '78 Temple Lane',
    city: 'Kandy',
    postalCode: '20000',
  },
  {
    id: 'O010',
    orderNumber: 'KK-2025-0032',
    customerName: 'Saranya Murugan',
    email: 'saranya.m@email.com',
    phone: '+94 71 456 7890',
    orderDate: '2025-06-28',
    items: [
      { productId: 'P004', productName: 'Cotton Printed Frock', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=80&h=80&fit=crop&auto=format', size: 'XS', colour: 'Mint Green', quantity: 1, unitPrice: 3200 },
    ],
    subtotal: 3200,
    deliveryCharge: 350,
    total: 3550,
    paymentMethod: 'Cash on Delivery',
    paymentStatus: 'Paid',
    status: 'Delivered',
    address: '101 Main Street',
    city: 'Matara',
    postalCode: '81000',
  },
];
