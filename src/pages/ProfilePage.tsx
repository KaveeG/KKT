interface Order {
  id: string
  date: string
  status: 'Pending' | 'Confirmed' | 'Processing' | 'Completed' | 'Cancelled'
  total: number
  items: string[]
}

const ORDERS: Order[] = []

function formatLKR(amount: number) {
  return `LKR ${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

function statusClass(status: Order['status']) {
  const map: Record<Order['status'], string> = {
    Pending: 'order-status-pending',
    Confirmed: 'order-status-confirmed',
    Processing: 'order-status-processing',
    Completed: 'order-status-completed',
    Cancelled: 'order-status-cancelled',
  }
  return `order-status ${map[status]}`
}

function OrderCard({ order }: { order: Order }) {
  return (
    <div className="order-card">
      <div className="order-card-header">
        <div>
          <div className="order-id">Order #{order.id}</div>
          <div className="order-date">{new Date(order.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
        </div>
        <span className={statusClass(order.status)}>{order.status}</span>
      </div>
      <div className="order-total">{formatLKR(order.total)}</div>
      <button type="button" className="order-view-btn">View Details</button>
    </div>
  )
}

function EmptyState() {
  return (
    <p className="profile-empty-text">You haven&apos;t placed any orders yet.</p>
  )
}

function IconShipping() {
  return (
    <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="5" width="26" height="18" rx="1" stroke="#111" strokeWidth="1.5" fill="none" />
      <path d="M27 10h6l5 7v6h-11V10z" stroke="#111" strokeWidth="1.5" fill="none" />
      <circle cx="9" cy="26" r="3" stroke="#111" strokeWidth="1.5" fill="none" />
      <circle cx="31" cy="26" r="3" stroke="#111" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

function IconPayments() {
  return (
    <svg width="32" height="38" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 1L2 7v12c0 8 6 14 14 18 8-4 14-10 14-18V7L16 1z" stroke="#111" strokeWidth="1.5" fill="none" />
      <circle cx="16" cy="18" r="5" stroke="#111" strokeWidth="1.5" fill="none" />
      <path d="M16 13v-2M16 25v-2M11 18h-2M21 18h-2" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconReturns() {
  return (
    <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 8H28a6 6 0 0 1 6 6v2a6 6 0 0 1-6 6H6" stroke="#111" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M12 14l-6 6 6 6" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

interface ProfilePageProps {
  onNavigate: (page: string) => void
}

export function ProfilePage({ onNavigate }: ProfilePageProps) {
  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-topbar">
          <h1 className="profile-heading">My account</h1>
          <div className="profile-welcome">
            Welcome back, Kavin Shanmugaraj!&nbsp;
            <button type="button" onClick={() => onNavigate('login')}>Log out</button>
          </div>
        </div>

        <div className="profile-tabs">
          <button type="button" className="profile-tab-active">My orders</button>
          <button type="button" className="profile-tab-inactive">My addresses</button>
        </div>

        <h2 className="profile-orders-heading">My orders ({ORDERS.length})</h2>

        {ORDERS.length === 0 ? (
          <EmptyState />
        ) : (
          <div>
            {ORDERS.map(order => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        )}

        <div className="profile-features">
          <div className="profile-feature">
            <div className="profile-feature-icon"><IconShipping /></div>
            <p className="profile-feature-title">Shipping</p>
            <p className="profile-feature-desc">Standard shipping (Estimated 3-5 days)</p>
          </div>
          <div className="profile-feature">
            <div className="profile-feature-icon"><IconPayments /></div>
            <p className="profile-feature-title">Payments</p>
            <p className="profile-feature-desc">Payment is 100% secure</p>
          </div>
          <div className="profile-feature">
            <div className="profile-feature-icon"><IconReturns /></div>
            <p className="profile-feature-title">Easy Returns</p>
            <p className="profile-feature-desc">30 days to change your mind!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
