import { Link } from "react-router-dom";
import { daftarLatihan } from "../data/latihan";

function LatihanList() {
  return (
    <section className="section">
      <h1 className="page-title">
        Daftar <span className="grad">Latihan</span>
      </h1>
      <p className="section-sub">Pilih salah satu buat buka latihannya.</p>

      <div className="grid">
        {daftarLatihan.map((l) => (
          <Link key={l.id} to={`/latihan/${l.id}`} className="card card-link">
            <div className="card-top">
              <span className="num">{String(l.id).padStart(2, "0")}</span>
              <span className="tag">{l.tag}</span>
            </div>
            <h3>{l.judul}</h3>
            <p>{l.deskripsi}</p>
            <span className="go">Buka latihan →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default LatihanList;
