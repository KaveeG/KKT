import { createContext, useContext, useState, type ReactNode } from 'react';
import { products as initProducts, type Product } from '../data/products';
import { orders as initOrders, type Order } from '../data/orders';
import { tailoringRequests as initTailoring, type TailoringRequest } from '../data/tailoring';
import { defaultSettings, type StoreSettings } from '../data/settings';

interface Store {
  products: Product[];
  setProducts: (p: Product[]) => void;
  orders: Order[];
  setOrders: (o: Order[]) => void;
  tailoring: TailoringRequest[];
  setTailoring: (t: TailoringRequest[]) => void;
  settings: StoreSettings;
  setSettings: (s: StoreSettings) => void;
}

const StoreCtx = createContext<Store | null>(null);

export function AdminDataStore({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(initProducts);
  const [orders, setOrders] = useState<Order[]>(initOrders);
  const [tailoring, setTailoring] = useState<TailoringRequest[]>(initTailoring);
  const [settings, setSettings] = useState<StoreSettings>(defaultSettings);

  return (
    <StoreCtx.Provider value={{ products, setProducts, orders, setOrders, tailoring, setTailoring, settings, setSettings }}>
      {children}
    </StoreCtx.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreCtx);
  if (!ctx) throw new Error('useStore must be inside AdminDataStore');
  return ctx;
}
