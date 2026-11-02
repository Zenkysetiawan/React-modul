import { Link } from "react-router-dom"; // Link = pindah halaman tanpa reload (ganti <a>)
import { daftarLatihan } from "../data/latihan"; // data daftar latihan dari file lain

// Data untuk kartu materi. Disimpan di array biar nggak nulis HTML berulang,
// nanti diubah jadi kartu pakai map()
const materi = [
  {
    ikon: "🧩",
    judul: "Components",
    teks: "Pecah UI jadi potongan kecil yang bisa dipakai ulang.",
  },
  {
    ikon: "📦",
    judul: "Props",
    teks: "Kirim data antar komponen dengan rapi.",
  },
  {
    ikon: "⚡",
    judul: "State",
    teks: "Bikin UI yang hidup dan responsif pakai useState.",
  },
  {
    ikon: "🔁",
    judul: "Hooks",
    teks: "useEffect, useRef, sampai custom hooks.",
  },
  {
    ikon: "🧭",
    judul: "Routing",
    teks: "Pindah halaman tanpa reload pakai React Router.",
  },
  {
    ikon: "🎨",
    judul: "Styling",
    teks: "Atur tampilan biar bersih dan enak dilihat.",
  },
];

// Komponen halaman Home
function Home() {
  return (
    // <> </> = Fragment, pembungkus tak terlihat (React butuh 1 elemen terluar)
    <>
      {/* ===== BAGIAN 1: HERO (bagian paling atas halaman) ===== */}
      <section className="hero">
        {/* Sisi kiri: teks */}
        <div className="hero-text">
          <span className="badge">🚀 Catatan perjalanan belajar</span>
          {/* <br /> = pindah baris. className = class CSS (di JSX bukan "class") */}
          <h1>
            Belajar <span className="grad">React</span>,<br />
            satu latihan satu langkah.
          </h1>
          <p>
            Kumpulan latihan React yang gw kerjain dari dasar sampai makin
            kompleks. Klik, buka, dan lihat hasilnya langsung di browser.
          </p>

          {/* Tombol aksi */}
          <div className="hero-actions">
            {/* Link to="/latihan" = pindah ke halaman /latihan (React Router) */}
            <Link to="/latihan" className="btn btn-primary">
              Mulai lihat latihan →
            </Link>
            {/* <a href="#materi"> = scroll ke elemen ber-id "materi" di bawah.
                Pakai <a> biasa karena ini lompat dalam satu halaman */}
            <a href="#materi" className="btn btn-ghost">
              Apa aja materinya?
            </a>
          </div>

          {/* Statistik. .length = jumlah elemen array, otomatis ikut data */}
          <div className="stats">
            <div>
              <strong>{daftarLatihan.length}</strong>
              <span>Latihan</span>
            </div>
            <div>
              <strong>{materi.length}</strong>
              <span>Topik</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Frontend</span>
            </div>
          </div>
        </div>

        {/* Sisi kanan: hiasan visual berupa kartu kode */}
        <div className="hero-visual">
          <div className="code-card">
            {/* 3 titik kosong, dihias CSS jadi tombol window */}
            <div className="dots">
              <span />
              <span />
              <span />
            </div>
            {/* <pre> = tampilkan teks apa adanya (spasi & baris baru dipertahankan).
                {`...`} = template literal, supaya kode di dalamnya dianggap teks biasa */}
            <pre>{`function Belajar() {
  const [level, setLevel] = useState(1);

  return (
    <button onClick={() => setLevel(level + 1)}>
      Level {level} 🚀
    </button>
  );
}`}</pre>
          </div>
          {/* Bola dekorasi, posisi & warna diatur lewat CSS */}
          <div className="orb orb-1" />
          <div className="orb orb-2" />
        </div>
      </section>

      {/* ===== BAGIAN 2: DAFTAR MATERI ===== */}
      {/* id="materi" = target dari tombol "Apa aja materinya?" di atas */}
      <section id="materi" className="section">
        <h2>Yang gw pelajari</h2>
        <p className="section-sub">
          Topik-topik inti React yang jadi fokus latihan.
        </p>
        <div className="grid">
          {/* map(): ubah tiap data di array materi jadi 1 kartu.
              m = data yang sedang diproses (ikon, judul, teks) */}
          {materi.map((m) => (
            // key wajib & unik saat pakai map(), dipakai React untuk
            // membedakan elemen. Di sini judul dipakai karena nggak ada yang kembar
            <article key={m.judul} className="card">
              <div className="card-icon">{m.ikon}</div>
              <h3>{m.judul}</h3>
              <p>{m.teks}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== BAGIAN 3: CTA (Call To Action, ajakan di bagian bawah) ===== */}
      <section className="cta">
        <h2>Siap lihat hasil latihannya?</h2>
        <p>Semua latihan sudah dikumpulin di satu tempat.</p>
        <Link to="/latihan" className="btn btn-primary">
          Buka daftar latihan
        </Link>
      </section>
    </>
  );
}

export default Home; // biar bisa di-import dari file lain (misal di router)
