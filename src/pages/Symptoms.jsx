import useLocalStorage from "../hooks/useLocalStorage";
import SymptomForm from "../components/SymptomForm";
import SymptomCard from "../components/SymptomCard";

export default function Symptoms() {
  const [logs, setLogs] = useLocalStorage("dw_symptoms", []);
  const add = v => setLogs([v, ...logs]);
  const del = id => setLogs(logs.filter(x => x.id !== id));
  return (
    <>
      <h2 className="mb-3">Log Symptoms</h2>
      <SymptomForm onAdd={add} />
      <div>{logs.length === 0 ? <p className="text-muted">No entries yet.</p> :
        logs.map(item => <SymptomCard key={item.id} item={item} onDelete={del} />)}
      </div>
    </>
  );
}
