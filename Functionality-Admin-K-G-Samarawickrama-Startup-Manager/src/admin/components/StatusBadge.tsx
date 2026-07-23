interface Props {
  status: string;
  type?: 'order' | 'payment' | 'stock' | 'account' | 'tailoring';
}

function getClass(status: string): string {
  const s = status.toLowerCase();
  if (['delivered', 'completed', 'paid', 'in stock', 'active'].includes(s)) return 'badge-green';
  if (['pending', 'processing', 'low stock'].includes(s)) return 'badge-amber';
  if (['cancelled', 'failed', 'out of stock', 'inactive', 'refunded'].includes(s)) return 'badge-red';
  if (['confirmed', 'scheduled', 'rescheduled', 'approved'].includes(s)) return 'badge-blue';
  return 'badge-neutral';
}

export default function StatusBadge({ status }: Props) {
  return <span className={`badge ${getClass(status)}`}>{status}</span>;
}
