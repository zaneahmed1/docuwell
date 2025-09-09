import { useState } from "react";

export default function MedicationForm({ onAdd }) {
  const [m, setM] = useState({ name: "", dosage: "", freq: "" });
  const change = e => setM(v => ({ ...v, [e.target.name]: e.target.value }));
  const submit = e => {
    e.preventDefault();
    onAdd({ id: crypto.randomUUID(), ...m });
    setM({ name: "", dosage: "", freq: "" });
  };
  return (
    <form onSubmit={submit} className="row g-2 mb-3">
      <div className="col-md-4"><input name="name" className="form-control" placeholder="Name" value={m.name} onChange={change} required /></div>
      <div className="col-md-3"><input name="dosage" className="form-control" placeholder="Dosage" value={m.dosage} onChange={change} required /></div>
      <div className="col-md-3"><input name="freq" className="form-control" placeholder="Frequency" value={m.freq} onChange={change} required /></div>
      <div className="col-md-2 d-grid"><button className="btn btn-success" type="submit">Add</button></div>
    </form>
  );
}
