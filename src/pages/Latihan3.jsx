// materi input form
import { useState } from "react";

// function utama rendering UI
function Latihan3() {
  // latihan form
  const [students, setStudents] = useState([]); // daftar lengkap
  const [name, setName] = useState(""); // isi input nama
  const [major, setMajor] = useState(""); // isi input jurusan
  const [semester, setSemester] = useState(""); // isi input semester
  const [error, setError] = useState(""); // pesan error
  const [editingId, setEditingId] = useState(null); // state edit
  const [search, setSearch] = useState(""); // state search
  const [message, setMessage] = useState(""); // pesan sukses

  function handleSubmit(event) {
    event.preventDefault(); // 1. cegah reload
    const inputName = name.trim(); // 2. buang spasi awal/akhir
    const inputMajor = major.trim();
    const inputSemester = semester.trim();

    //3. validasi
    if (inputName === "" || inputMajor === "" || inputSemester === "") {
      setError("form tidak ada yang boleh kosong"); // message eror ditampilkan
      setMessage(""); // message sukses gak ditampilkan
      return; // 4.berhenti di sini
    }

    if (editingId !== null) {
      // mode edit : ganti student yang id-nya cocok
      setStudents(
        students.map((student) =>
          student.id === editingId
            ? {
                ...student,
                name: inputName,
                major: inputMajor,
                semester: inputSemester,
              }
            : student,
        ),
      );
      setEditingId(null);
      setMessage("Student berhasil diubah");
    } else {
      // MODE TAMBAH
      setStudents([
        ...students,
        {
          id: Date.now(),
          name: inputName,
          major: inputMajor,
          semester: inputSemester,
        },
      ]);
      setMessage("Student berhasil ditambahkan");
    }
    setName(""); // kosongin input
    setMajor("");
    setSemester("");
    setError(""); // hapus pesan error lama
  }

  // function delete
  function handleDelete(id) {
    setStudents(students.filter((student) => student.id !== id));

    // validasi yang berfungsi untuk mengecek apakah id delete itu sama dengan editing id (id yang lagi di edit). kalau iya maka data yang ada di form edit itu hilang(null)
    if (id === editingId) {
      handleCancel();
    }

    setMessage("Student berhasil dihapus");
  }

  // function edit
  function handleEdit(edit) {
    setName(edit.name);
    setMajor(edit.major);
    setSemester(edit.semester);
    setEditingId(edit.id);
  }

  // function cancel = fungsinya untuk cancel data di formnya, jadi misalnya ketika klik edit maka di form akan muncul data yang ingin di edit, nah fungsi cancel ini ialah ketika klik batal, maka form edit itu akan di kosongkan, dan data di students tetap ada dan tidak berubah
  function handleCancel() {
    setName("");
    setMajor("");
    setSemester("");
    setEditingId(null);
    setMessage("Edit dibatalkan");
  }

  //
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h1> Form tambah siswa</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Siapa nama anda?"
        />
        <br />
        <input
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          placeholder="Kmu jurusan apa?"
        />
        <br />
        <input
          value={semester}
          type="number"
          onChange={(e) => setSemester(e.target.value)}
          placeholder="kamu semester berapa?"
        />
        <br />
        <button type="submit">
          {editingId !== null ? "Simpan" : "Tambah"}
        </button>
        {editingId !== null && (
          <button type="button" onClick={handleCancel}>
            Batal
          </button>
        )}
      </form>
      {/* empty eror jika form ada yang ga keisi */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}
      <br />
      <br />

      {/* input cari students yang cocok */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Cari nama anda"
      />

      {/* empty pesan kalau students tidak ada data */}
      {students.length === 0 ? (
        <p>Belum ada data students.</p>
      ) : (
        <ul>
          {filteredStudents.map((student) => (
            <li key={student.id}>
              Nama: {student.name}
              <br />
              Jurusan: {student.major}
              <br />
              semester: {student.semester}
              <br />
              <button onClick={() => handleDelete(student.id)}>Hapus</button>
              <br />
              <button onClick={() => handleEdit(student)}>Edit</button>
            </li>
          ))}
        </ul>
      )}
      {/* empty yang menampilkan ketika search tidak ada data */}
      {/* cara baca: kalau jumlah mahasiswa lebih dari nol, dan hasil pencarian kosong, baru tampilkan pesan "nama tidak ditemukan" */}
      {students.length > 0 && filteredStudents.length === 0 && (
        <p>Nama tidak ditemukan.</p>
      )}
    </div>
  );
}
export default Latihan3;
