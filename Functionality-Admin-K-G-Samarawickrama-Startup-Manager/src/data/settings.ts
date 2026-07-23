export interface StoreSettings {
  storeName: string;
  storeEmail: string;
  storePhone: string;
  storeAddress: string;
  standardDeliveryCharge: number;
  freeDeliveryThreshold: number;
  currency: string;
  paymentMethod: string;
}

export const defaultSettings: StoreSettings = {
  storeName: 'KK Tailors',
  storeEmail: 'admin@kktailors.lk',
  storePhone: '+94 77 100 2030',
  storeAddress: '45 Galle Road, Colombo 03, Sri Lanka',
  standardDeliveryCharge: 350,
  freeDeliveryThreshold: 5000,
  currency: 'LKR',
  paymentMethod: 'Cash on Delivery',
};
