import useLocalStorage from "../hooks/useLocalStorage";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function Reports() {
  const [logs] = useLocalStorage("dw_symptoms", []);
  const data = [...logs]
    .sort((a,b)=>Date.parse(a.date)-Date.parse(b.date))
    .map(l => ({ date: l.date, severity: l.severity, type: l.type }));

  return (
    <>
      <h2 className="mb-3">Reports</h2>
      <div className="row g-3">
        <div className="col-12 col-lg-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Severity Trend</h5>
              <div style={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={[0, 10]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="severity" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Log Summary</h5>
              <ul className="list-group">
                {logs.map(l => (
                  <li key={l.id} className="list-group-item d-flex justify-content-between">
                    <span>{l.date} — {l.type}</span>
                    <span className="badge bg-secondary">#{l.severity}</span>
                  </li>
                ))}
                {logs.length === 0 && <li className="list-group-item text-muted">No data.</li>}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <button className="btn btn-outline-secondary" onClick={() => window.print()}>Print Report</button>
      </div>
    </>
  );
}
