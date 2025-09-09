export default function SymptomCard({ item, onDelete }) {
    return (
      <div className="card mb-2">
        <div className="card-body">
          <h5 className="card-title mb-1">
            {item.type} <span className="badge bg-secondary ms-2">Severity {item.severity}</span>
          </h5>
          <h6 className="card-subtitle text-muted mb-2">{item.date}</h6>
          {item.notes && <p className="card-text">{item.notes}</p>}
          <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(item.id)}>Delete</button>
        </div>
      </div>
    );
  }
  