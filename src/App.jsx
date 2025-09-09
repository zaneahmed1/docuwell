import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Symptoms from "./pages/Symptoms";
import Medications from "./pages/Medications";
import Reports from "./pages/Reports";

export default function App() {
  return (
    <>
      <NavBar />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/symptoms" element={<Symptoms />} />
          <Route path="/medications" element={<Medications />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </main>
    </>
  );
}