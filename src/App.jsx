import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import LatihanLayout from "./components/LatihanLayout";
import Home from "./pages/Home";
import LatihanList from "./pages/LatihanList";
import { daftarLatihan } from "./data/latihan";
import StudentDetail from "./pages/StudentDetail";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/latihan" element={<LatihanList />} />
          <Route path="/students/:id" element={<StudentDetail />} />

          {daftarLatihan.map((item) => {
            const Komponen = item.komponen;
            return (
              <Route
                key={item.id}
                path={`/latihan/${item.id}`}
                element={
                  <LatihanLayout id={item.id}>
                    <Komponen />
                  </LatihanLayout>
                }
              />
            );
          })}

          <Route
            path="*"
            element={
              <div className="not-found">
                <h1>404 😵</h1>
                <p>Halaman tidak ditemukan.</p>
                <Link to="/" className="btn btn-primary">
                  Balik ke Home
                </Link>
              </div>
            }
          />
        </Routes>
      </main>
      <footer className="footer">Dibuat sambil belajar React ⚛️</footer>
    </>
  );
}

export default App;
