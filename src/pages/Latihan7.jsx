import { useState } from "react";

function Latihan7() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    name: "",
    major: "",
    semester: "",
    angkatan: "",
    email: "",
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      form.name.trim() === "" ||
      form.major.trim() === "" ||
      form.semester.trim() === "" ||
      form.angkatan.trim() === "" ||
      form.email.trim() === ""
    ) {
      setError("form tidak ada yang boleh kosong");
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
    setError("");
  }

  return (
    <div>
      <h1>Latihan 7: Form Satu Stats</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Siapa nama anda?"
        />
        <br />

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Masukkan email mu"
        />
        <br />

        <input
          name="major"
          value={form.major}
          onChange={handleChange}
          placeholder="Kamu jurusan apa?"
        />
        <br />

        <input
          name="semester"
          type="number"
          value={form.semester}
          onChange={handleChange}
          placeholder="Kamu semester berapa?"
        />
        <br />

        <input
          name="angkatan"
          type="number"
          value={form.angkatan}
          onChange={handleChange}
          placeholder="Kamu angkatan tahun berapa? "
        />
        <br />

        <button type="submit">Tambah</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

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

export default Latihan7;
