export default function SymptomCard({ item, onDelete }) {
    // Pick color based on severity
    const severityColor = () => {
      if (item.severity <= 3) return "bg-success";
      if (item.severity <= 7) return "bg-warning text-dark"; // yellow needs dark text
      return "bg-danger";
    };
  
    return (
      <div className="card mb-2 shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="card-title mb-0">{item.type}</h5>
            <span className={`badge ${severityColor()} fs-6`}>
              Severity {item.severity}
            </span>
          </div>
          <h6 className="card-subtitle text-muted mb-2">{item.date}</h6>
          {item.notes && <p className="card-text">{item.notes}</p>}
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => onDelete(item.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
  