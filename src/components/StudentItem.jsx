// fungsi StudentItem = menampilkan satu siswa dan menyediakan tombol edit/hapus

function StudentItem({ student, onDelete, onEdit }) {
  return (
    <li>
      nama: {student.name}
      <br />
      jurusan: {student.major}
      <br />
      semester: {student.semester}
      <br />
      <button onClick={() => onDelete(student.id)}>Hapus</button>
      <button onClick={() => onEdit(student)}>Edit</button>
    </li>
  );
}

export default StudentItem;
