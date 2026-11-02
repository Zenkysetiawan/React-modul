// Materi: Search mahasiswa di React
import { useState } from "react"; // hook untuk bikin state

// Data statis, di luar komponen biar nggak dibuat ulang tiap render
const students = [
  {
    id: 1,
    name: "Zenky setiawan",
    major: "Informatika",
    semester: 5,
    university: "Universitas Indonesia",
  },
  {
    id: 2,
    name: "Bima",
    major: "Informatika",
    semester: 5,
    university: "Universitas Indonesia",
  },
  {
    id: 3,
    name: "Andi",
    major: "Informatika",
    semester: 5,
    university: "Universitas Gadjah Mada",
  },
  {
    id: 4,
    name: "Agus",
    major: "Informatika",
    semester: 5,
    university: "Universitas Indonesia",
  },
  {
    id: 5,
    name: "Angga",
    major: "Informatika",
    semester: 5,
    university: "Universitas Gadjah Mada",
  },
];

// Template kartu 1 mahasiswa. Data masuk lewat props (di-destructure)
function StudentCard({ name, major, semester, university }) {
  return (
    <div>
      <h2>{name}</h2> {/* {} = tampilkan nilai variabel */}
      <p>Jurusan: {major}</p>
      <p>Semester: {semester}</p>
      <p>Universitas: {university}</p>
    </div>
  );
}

// Komponen utama
function Latihan2() {
  // search = teks sekarang, setSearch = satu-satunya cara ubah teks
  // Setiap setSearch dipanggil, React render ulang komponen
  const [search, setSearch] = useState("");

  // filter: ambil mahasiswa yang namanya mengandung keyword
  // toLowerCase() di kedua sisi biar tidak peka huruf besar/kecil
  // Hasilnya array baru, students asli tidak berubah
  const filteredStudent = students.filter(function (student) {
    return student.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <h1>Daftar Mahasiswa</h1>

      {/* value = isi kotak ikut state, onChange = jalan tiap ada ketikan */}
      <input
        type="text"
        placeholder="Cari nama mahasiswa...."
        value={search}
        onChange={function (event) {
          setSearch(event.target.value); // event.target.value = teks terbaru
        }}
      />

      {/* Ada hasil? tampilkan kartu. Kosong? tampilkan pesan */}
      {filteredStudent.length > 0 ? (
        // map: ubah tiap data hasil filter jadi 1 komponen kartu
        filteredStudent.map(function (student) {
          return (
            <StudentCard
              key={student.id} // key unik, wajib di map(), dipakai React
              name={student.name} // props: isi kolom kartu dengan data
              major={student.major}
              semester={student.semester}
              university={student.university}
            />
          );
        })
      ) : (
        <p>Mahasiswa tidak ditemukan</p>
      )}
    </div>
  );
}

export default Latihan2; // biar bisa di-import dari file lain
