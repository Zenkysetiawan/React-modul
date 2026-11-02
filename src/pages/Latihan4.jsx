// fungsi dari Latihan4 = menjadi pusat pengelolaan data, StudentForm dan StudentItem menerima props dari komponen utama

import { useState, useEffect } from "react";
import StudentItem from "../components/StudentItem"; // komponen yang bertugas menampilkan satu data siswa
import StudentForm from "../components/StudentForm"; // komponen yangt bertugas menampilkan form siswa

// ===== KOMPONEN UTAMA: pegang semua state dan fungsi =====
function Latihan4() {
  const [students, setStudents] = useState([]); // state yang menyimpan seluruh data siswa
  const [name, setName] = useState(""); // menyimpan input nama
  const [major, setMajor] = useState(""); // menyimpan input jurusan
  const [semester, setSemester] = useState(""); //menyimpan input semester
  const [error, setError] = useState(""); // menyimpan pesan kesalahan/eror
  const [editingId, setEditingId] = useState(null); // state yang menandai ID siswa yang sedang diedit
  const [search, setSearch] = useState(""); // menyimpan kata pencaharian
  const [message, setMessage] = useState(""); // menyimpan pesan berhasil/informasi
  useEffect(() => {
    document.title = "Mahasiswa:" + students.length;
  }, [students]);

  function handleSubmit(event) {
    event.preventDefault(); // fungsinya supaya mencegah reload halaman ketika form di submit
    const inputName = name.trim(); // membuang spasi di awal dan akhir string.
    const inputMajor = major.trim();
    const inputSemester = semester.trim();

    if (inputName === "" || inputMajor === "" || inputSemester === "") {
      setError("form tidak ada yang boleh kosong");
      setMessage("");
      return;
    }

    // kalau sedang mengedit
    if (editingId !== null) {
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
      setEditingId(null); // keluar mode edit
      setMessage("Student berhasil diubah");
    }
    // kalau bukan sedang mengedit (bagian ini menambahkan siswa baru)
    else {
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
    // ketika submit berhasil, input dikosongkan dan pesan eror dibersihkan (reset form)
    setName(""); // bersihkan input name
    setMajor(""); // bersihkan input jurusan
    setSemester(""); // bersihkan input semester
    setError(""); // bersihkan pesan eror
  }

  // fungsi edit
  function handleEdit(student) {
    setName(student.name);
    setMajor(student.major);
    setSemester(student.semester);
    setEditingId(student.id);
  }

  // fungsi delete
  function handleDelete(id) {
    // student.id !== id = pertahankan semua siswa yang ID-nya tidak sama dengan ID yang ingin dihapus.
    setStudents(students.filter((student) => student.id !== id));

    if (id === editingId) {
      handleCancel();
    }
    setMessage("Student berhasil dihapus");
  }

  // fungsi membatalkan edit
  // mengosongkan semua input, menghapus ID yang sedang di edit, mengembalikan form ke mode tambah, menampilkan pesan pembatalan
  function handleCancel() {
    setName("");
    setMajor("");
    setSemester("");
    setEditingId(null);
    setMessage("Edit data dibatalkan");
  }

  // fitur pencarian student
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h1>Form tambah siswa</h1>
      {/* mengirim props ke StudentForm */}
      <StudentForm
        name={name}
        setName={setName}
        major={major}
        setMajor={setMajor}
        semester={semester}
        setSemester={setSemester}
        isEditing={editingId !== null} // dibaca: kirim ke StudentForm jawaban dari pertanyaan ‘apakah editingId bukan null?’.” Jawabannya true atau false. StudentForm nggak perlu tahu angka id-nya, cuma perlu tahu lagi edit atau nggak.
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />

      {/* conditional rendering */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Cari nama anda"
      />

      {students.length === 0 ? (
        <p>Belum ada data students.</p>
      ) : (
        <ul>
          {filteredStudents.map((student) => (
            <StudentItem
              key={student.id}
              student={student}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </ul>
      )}

      {students.length > 0 && filteredStudents.length === 0 && (
        <p>Nama tidak ditemukan.</p>
      )}
    </div>
  );
}

export default Latihan4;
