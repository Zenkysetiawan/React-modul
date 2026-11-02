import { Link } from "react-router-dom";
import { daftarLatihan } from "../data/latihan";

function LatihanLayout({ id, children }) {
  const index = daftarLatihan.findIndex((l) => l.id === id);
  const sebelumnya = daftarLatihan[index - 1];
  const berikutnya = daftarLatihan[index + 1];
  const sekarang = daftarLatihan[index];

  return (
    <section className="latihan-wrap">
      <Link to="/latihan" className="back">
        ← Semua latihan
      </Link>
      <div className="latihan-head">
        <span className="tag">{sekarang.tag}</span>
        <h1>{sekarang.judul}</h1>
        <p>{sekarang.deskripsi}</p>
      </div>

      <div className="latihan-panel">{children}</div>

      <div className="pager">
        {sebelumnya ? (
          <Link to={`/latihan/${sebelumnya.id}`} className="btn btn-ghost">
            ← {sebelumnya.judul}
          </Link>
        ) : (
          <span />
        )}
        {berikutnya ? (
          <Link to={`/latihan/${berikutnya.id}`} className="btn btn-primary">
            {berikutnya.judul} →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </section>
  );
}

export default LatihanLayout;
