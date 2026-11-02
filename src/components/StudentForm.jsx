// fungsi StudentForm = menerima input, mengirim data dan membatalkan edit (sebagai template student)

function StudentForm({
  name,
  setName,
  major,
  setMajor,
  semester,
  setSemester,
  isEditing,
  onSubmit,
  onCancel,
}) {
  return (
    // dibaca: “pas formulir ini dikirim, jalanin fungsi onSubmit yang dikasih dari luar.” Karena onSubmit itu sebenernya handleSubmit milik Latihan4, event.preventDefault() dan validasi tetap jalan di sana.
    <form onSubmit={onSubmit}>
      <input
        // dibaca: “tampilkan isi name. Tiap ada ketikan, panggil setName dengan isi ketikan terbaru.”
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Siapa nama anda?"
      />
      <br />
      <input
        value={major}
        onChange={(e) => setMajor(e.target.value)}
        placeholder="Kamu jurusan apa?"
      />
      <br />
      <input
        value={semester}
        type="number"
        onChange={(e) => setSemester(e.target.value)}
        placeholder="Kamu semester berapa?"
      />
      <br />
      {/* dibaca: kalau lagi mode edit, tulis simpan. kalau enggak, tulis tambah */}
      <button type="submit">{isEditing ? "Simpan" : "Tambah"}</button>
      {/* dibaca: kalau lagi mode edit, baru tampilkan tombol batal */}
      {isEditing && (
        <button type="button" onClick={onCancel}>
          Batal
        </button>
      )}
    </form>
  );
}

export default StudentForm;
