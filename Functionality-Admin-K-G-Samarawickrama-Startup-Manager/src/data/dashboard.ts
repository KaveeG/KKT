import { products } from './products';
import { orders } from './orders';
import { customers } from './customers';
import { tailoringRequests } from './tailoring';

export function getDashboardStats() {
  const totalProducts = products.length;
  const totalOrders = orders.length;
  const pendingOrders = orders.filter(o => ['Pending', 'Confirmed', 'Processing'].includes(o.status)).length;
  const completedOrders = orders.filter(o => ['Delivered', 'Completed'].includes(o.status)).length;
  const lowStockProducts = products.filter(p => p.status === 'Low Stock' || p.status === 'Out of Stock').length;
  const tailoringRequests_ = tailoringRequests.filter(t => t.status === 'Pending').length;

  return {
    totalProducts,
    totalOrders,
    pendingOrders,
    completedOrders,
    lowStockProducts,
    tailoringRequests: tailoringRequests_,
    totalCustomers: customers.length,
  };
}

export function getRecentOrders() {
  return [...orders].sort((a, b) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime()).slice(0, 5);
}

export function getLowStockProducts() {
  return products.filter(p => p.status === 'Low Stock' || p.status === 'Out of Stock');
}

export function getUpcomingTailoring() {
  return tailoringRequests
    .filter(t => ['Pending', 'Approved', 'Confirmed', 'Scheduled'].includes(t.status))
    .slice(0, 4);
}
