export type TailoringStatus =
  | 'Pending'
  | 'Approved'
  | 'Confirmed'
  | 'Scheduled'
  | 'Rescheduled'
  | 'Completed'
  | 'Cancelled';

export interface TailoringRequest {
  id: string;
  requestNumber: string;
  customerName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  note: string;
  submittedDate: string;
  status: TailoringStatus;
}

export const tailoringRequests: TailoringRequest[] = [
  {
    id: 'T001',
    requestNumber: 'TR-2025-001',
    customerName: 'Priya Krishnamurthy',
    phone: '+94 77 234 5678',
    email: 'priya.k@email.com',
    preferredDate: '2025-08-05',
    preferredTime: '10:00 AM',
    note: 'Need blouse stitching for the Kanjivaram saree I purchased. Standard measurements.',
    submittedDate: '2025-07-18',
    status: 'Pending',
  },
  {
    id: 'T002',
    requestNumber: 'TR-2025-002',
    customerName: 'Kavitha Sundaram',
    phone: '+94 76 543 2109',
    email: 'kavitha.s@email.com',
    preferredDate: '2025-08-03',
    preferredTime: '2:00 PM',
    note: 'Custom stitching for bridal lehenga blouse with specific measurements. Prefer afternoon slots.',
    submittedDate: '2025-07-17',
    status: 'Pending',
  },
  {
    id: 'T003',
    requestNumber: 'TR-2025-003',
    customerName: 'Meera Aravindhan',
    phone: '+94 71 876 5432',
    email: 'meera.a@email.com',
    preferredDate: '2025-07-28',
    preferredTime: '11:00 AM',
    note: 'Alterations needed for a Kurti — shorten hem by 3 inches and tighten side seams.',
    submittedDate: '2025-07-15',
    status: 'Approved',
  },
  {
    id: 'T004',
    requestNumber: 'TR-2025-004',
    customerName: 'Anitha Rajendran',
    phone: '+94 70 987 6543',
    email: 'anitha.r@email.com',
    preferredDate: '2025-07-30',
    preferredTime: '3:00 PM',
    note: 'Need a custom-fit blouse for saree. Measurements will be provided at the appointment.',
    submittedDate: '2025-07-14',
    status: 'Confirmed',
  },
  {
    id: 'T005',
    requestNumber: 'TR-2025-005',
    customerName: 'Deepa Venkatesh',
    phone: '+94 75 321 0987',
    email: 'deepa.v@email.com',
    preferredDate: '2025-07-25',
    preferredTime: '10:30 AM',
    note: 'Frock stitching from fabric I will bring. Simple A-line cut, knee length.',
    submittedDate: '2025-07-10',
    status: 'Scheduled',
  },
  {
    id: 'T006',
    requestNumber: 'TR-2025-006',
    customerName: 'Nithya Balachandran',
    phone: '+94 77 654 3210',
    email: 'nithya.b@email.com',
    preferredDate: '2025-07-22',
    preferredTime: '1:00 PM',
    note: 'Lehenga blouse alteration — the existing blouse is slightly large. Need it taken in.',
    submittedDate: '2025-07-08',
    status: 'Rescheduled',
  },
  {
    id: 'T007',
    requestNumber: 'TR-2025-007',
    customerName: 'Lakshmi Narayanan',
    phone: '+94 77 012 3456',
    email: 'lakshmi.n@email.com',
    preferredDate: '2025-07-12',
    preferredTime: '11:00 AM',
    note: 'Blouse stitching completed. Customer was satisfied.',
    submittedDate: '2025-06-30',
    status: 'Completed',
  },
  {
    id: 'T008',
    requestNumber: 'TR-2025-008',
    customerName: 'Saranya Murugan',
    phone: '+94 71 456 7890',
    email: 'saranya.m@email.com',
    preferredDate: '2025-07-10',
    preferredTime: '4:00 PM',
    note: 'Customer cancelled — change of plan.',
    submittedDate: '2025-07-01',
    status: 'Cancelled',
  },
];
