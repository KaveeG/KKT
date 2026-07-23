import { useState } from 'react';

interface Props {
  requestNumber: string;
  onConfirm: (date: string, time: string) => void;
  onCancel: () => void;
}

export default function RescheduleModal({ requestNumber, onConfirm, onCancel }: Props) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [errors, setErrors] = useState({ date: false, time: false });

  function handleConfirm() {
    const e = { date: !date, time: !time };
    setErrors(e);
    if (e.date || e.time) return;
    onConfirm(date, time);
  }

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="resched-title">
      <div className="modal-box">
        <h2 className="modal-title" id="resched-title">Reschedule Appointment</h2>
        <p className="modal-body" style={{ marginBottom: 20 }}>
          Set a new date and time for <strong>{requestNumber}</strong>.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 22 }}>
          <div className="form-group">
            <label className="form-label" htmlFor="resched-date">
              New Date <span className="required">*</span>
            </label>
            <input
              id="resched-date"
              type="date"
              className={`form-input ${errors.date ? 'error' : ''}`}
              value={date}
              onChange={e => setDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
            />
            {errors.date && <span className="form-error">Please select a date.</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="resched-time">
              New Time <span className="required">*</span>
            </label>
            <select
              id="resched-time"
              className={`form-select ${errors.time ? 'error' : ''}`}
              value={time}
              onChange={e => setTime(e.target.value)}
            >
              <option value="">Select time slot</option>
              {['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
                '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM'].map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            {errors.time && <span className="form-error">Please select a time.</span>}
          </div>
        </div>

        <div className="modal-actions">
          <button className="btn btn-secondary" onClick={onCancel}>Cancel</button>
          <button className="btn btn-primary" onClick={handleConfirm}>Confirm Reschedule</button>
        </div>
      </div>
    </div>
  );
}
