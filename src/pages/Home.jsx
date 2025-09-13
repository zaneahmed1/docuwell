import useLocalStorage from "../hooks/useLocalStorage";
import { ClipboardData, CapsulePill, CalendarWeek } from "react-bootstrap-icons";


export default function Home() {
  const [logs] = useLocalStorage("dw_symptoms", []);
  const [meds] = useLocalStorage("dw_meds", []);
  const last7 = logs.filter(
    (l) => Date.parse(l.date) >= Date.now() - 7 * 24 * 60 * 60 * 1000
  );
  const avg = last7.length
    ? Math.round(
        (last7.reduce((a, b) => a + b.severity, 0) / last7.length) * 10
      ) / 10
    : 0;

  const severityBg = () => {
    if (avg <= 3) return "bg-success text-white";
    if (avg <= 7) return "bg-warning text-dark";
    return "bg-danger text-white";
  };

  return (
    <>
      <h2 className="mb-4">Welcome to DocuWell</h2>
      <p className="lead">A chronic illness tracking app</p>
      <div className="row g-3">
    {/* Avg Severity */}
    <div className="col-md-4">
          <div className={`card shadow border-0 ${severityBg()}`}>
            <div className="card-body text-center">
              <ClipboardData className="fs-1 mb-2" />
              <h5 className="card-title">Avg Severity (7d)</h5>
              <p className="display-6 fw-bold">{avg}</p>
            </div>
          </div>
        </div>
      {/* Entries This Week */}
<div className="col-md-4">
  <div className="card shadow border-0">
    <div className="card-body text-center">
      <CalendarWeek className="text-primary fs-1 mb-2" />
      <h5 className="card-title">Entries This Week</h5>
      <p className="display-6 fw-bold text-primary">{last7.length}</p>
    </div>
  </div>
</div>

      {/* Active Medications */}
<div className="col-md-4">
  <div className="card shadow border-0">
    <div className="card-body text-center">
      <CapsulePill className="text-success fs-1 mb-2" />
      <h5 className="card-title">Active Medications</h5>
      <p className="display-6 fw-bold text-success">{meds.length}</p>
    </div>
  </div>
</div>
      </div>
    </>
  );
}

//make each card on home page a link to the respective page