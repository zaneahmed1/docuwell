import useLocalStorage from "../hooks/useLocalStorage";
import MedicationForm from "../components/MedicationForm";

export default function Medications() {
  const [meds, setMeds] = useLocalStorage("dw_meds", []);
  const add = v => setMeds([v, ...meds]);
  const del = id => setMeds(meds.filter(m => m.id !== id));
  return (
    <>
      <h2 className="mb-3">Medications</h2>
      <MedicationForm onAdd={add} />
      <div className="table-responsive">
        <table className="table table-striped align-middle">
          <thead><tr><th>Name</th><th>Dosage</th><th>Frequency</th><th></th></tr></thead>
          <tbody>
            {meds.map(m => (
              <tr key={m.id}>
                <td>{m.name}</td><td>{m.dosage}</td><td>{m.freq}</td>
                <td className="text-end">
                  <button className="btn btn-sm btn-outline-danger" onClick={() => del(m.id)}>Delete</button>
                </td>
              </tr>
            ))}
            {meds.length === 0 && <tr><td colSpan="4" className="text-muted">No medications added.</td></tr>}
          </tbody>
        </table>
      </div>
    </>
  );
}
