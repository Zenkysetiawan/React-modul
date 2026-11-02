import { useState } from "react";
import FormField from "../components/FormField";

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

function Latihan10() {
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
      <h1>Latihan 9: Student Directory</h1>
      <br /> <br />
      <section aria-labelledby="form-title">
        <h2 id="form-title">Tambah Mahasiswa</h2>
        <form onSubmit={handleSubmit}>
          <FormField
            label="Nama"
            name="name"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="Siapa nama anda?"
          />
          <br />

          <FormField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="Masukkan email mu"
          />
          <br />

          <FormField
            label="Jurusan"
            name="major"
            value={form.major}
            onChange={handleChange}
            error={errors.major}
            placeholder="Kamu jurusan apa?"
          />
          <br />

          <FormField
            label="Semester"
            name="semester"
            type="number"
            value={form.semester}
            onChange={handleChange}
            error={errors.semester}
            placeholder="Kamu semester berapa?"
          />
          <br />

          <FormField
            label="Angkatan"
            name="angkatan"
            type="number"
            value={form.angkatan}
            onChange={handleChange}
            error={errors.angkatan}
            placeholder="Kamu angkatan tahun berapa? "
          />
          <br />

          <button type="submit">Tambah</button>
        </form>
      </section>
      <br />
      <section aria-labelledby="list-title">
        <h2 id="list-title">Daftar Mahasiswa</h2>
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
      </section>
    </div>
  );
}

export default Latihan10;
