import useLocalStorage from "../hooks/useLocalStorage";

export default function Home() {
  const [logs] = useLocalStorage("dw_symptoms", []);
  const [meds] = useLocalStorage("dw_meds", []);
  const last7 = logs.filter(l => Date.parse(l.date) >= Date.now() - 7*24*60*60*1000);
  const avg = last7.length ? Math.round(last7.reduce((a,b)=>a+b.severity,0)/last7.length*10)/10 : 0;

  return (
    <>
      <h2 className="mb-4">Dashboard</h2>
      <div className="row g-3">
        <div className="col-md-4">
          <div className="card"><div className="card-body">
            <h5 className="card-title">Avg Severity (7d)</h5>
            <p className="display-6">{avg}</p>
          </div></div>
        </div>
        <div className="col-md-4">
          <div className="card"><div className="card-body">
            <h5 className="card-title">Entries This Week</h5>
            <p className="display-6">{last7.length}</p>
          </div></div>
        </div>
        <div className="col-md-4">
          <div className="card"><div className="card-body">
            <h5 className="card-title">Active Medications</h5>
            <p className="display-6">{meds.length}</p>
          </div></div>
        </div>
      </div>
    </>
  );
}
