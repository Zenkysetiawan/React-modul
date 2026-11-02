import { useState } from "react";

// fungsi pengecek, di luar komponen
function validate(values) {
  const errors = {};

  if (values.name.trim().length < 3) {
    errors.name = "Nama minimal 3 huruf";
  }

  if (values.email.trim() === "") {
    errors.email = "Email tidak boleh kosong";
  }

  if (values.major.trim() === "") {
    errors.major = "Jurusan tidak boleh kosong";
  }

  const semesterNumber = Number(values.semester);
  if (values.semester.trim() === "") {
    errors.semester = "Semester tidak boleh kosong";
  } else if (semesterNumber < 1 || semesterNumber > 14) {
    errors.semester = "Semester harus diantara 1 sampai 14";
  }

  const angkatanNumber = Number(values.angkatan);
  if (values.angkatan.trim() === "") {
    errors.angkatan = "Angkatan tidak boleh kosong";
  } else if (angkatanNumber < 1990 || angkatanNumber > 2026) {
    errors.angkatan = "tidak memenuhi tahun angkatan";
  }

  return errors;
}

function Latihan8() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    name: "",
    major: "",
    semester: "",
    angkatan: "",
    email: "",
  });
  const [errors, setErrors] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // cek semua kolom sekaligus
    const newErrors = validate(form);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStudents([
      ...students,
      {
        id: Date.now(),
        name: form.name.trim(),
        major: form.major.trim(),
        semester: form.semester.trim(),
        angkatan: form.angkatan.trim(),
        email: form.email.trim(),
      },
    ]);

    setForm({ name: "", major: "", semester: "", angkatan: "", email: "" });
    setErrors("");
  }

  return (
    <div>
      <h1>Latihan 8: Validasi per kolom</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Siapa nama anda?"
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        <br />

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Masukkan email mu"
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <br />

        <input
          name="major"
          value={form.major}
          onChange={handleChange}
          placeholder="Kamu jurusan apa?"
        />
        {errors.major && <p style={{ color: "red" }}>{errors.major}</p>}
        <br />

        <input
          name="semester"
          type="number"
          value={form.semester}
          onChange={handleChange}
          placeholder="Kamu semester berapa?"
        />
        {errors.semester && <p style={{ color: "red" }}>{errors.semester}</p>}
        <br />

        <input
          name="angkatan"
          type="number"
          value={form.angkatan}
          onChange={handleChange}
          placeholder="Kamu angkatan tahun berapa? "
        />
        {errors.angkatan && <p style={{ color: "red" }}>{errors.angkatan}</p>}
        <br />

        <button type="submit">Tambah</button>
      </form>

      {students.length === 0 ? (
        <p>Belum ada data students.</p>
      ) : (
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.name} - {student.email} - {student.major} - semester{" "}
              {student.semester} - angkatan {student.angkatan}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Latihan8;
