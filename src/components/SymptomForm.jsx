import { useState } from "react";

export default function SymptomForm({ onAdd }) {
  const [form, setForm] = useState({ date: "", type: "", severity: 5, notes: "" });
  const change = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const submit = e => {
    e.preventDefault();
    onAdd({ id: crypto.randomUUID(), ...form, severity: Number(form.severity) });
    setForm({ date: "", type: "", severity: 5, notes: "" });
  };
  return (
    <form onSubmit={submit} className="mb-3">
      <div className="row g-3">
        <div className="col-md-3">
          <label className="form-label">Date</label>
          <input className="form-control" type="date" name="date" value={form.date} onChange={change} required />
        </div>
        <div className="col-md-3">
          <label className="form-label">Symptom</label>
          <select className="form-select" name="type" value={form.type} onChange={change} required>
            <option value="">Select…</option>
            <option>Pain</option><option>Fatigue</option><option>Sleep</option><option>Mood</option>
            <option>Headache</option><option>GI</option>
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label">Severity: {form.severity}</label>
          <input className="form-range" type="range" min="1" max="10" name="severity" value={form.severity} onChange={change} />
        </div>
        <div className="col-12">
          <label className="form-label">Notes</label>
          <textarea className="form-control" rows="2" name="notes" value={form.notes} onChange={change} />
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Log Symptom</button>
        </div>
      </div>
    </form>
  );
}
