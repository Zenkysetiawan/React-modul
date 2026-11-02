import { Link } from "react-router-dom";

function StudentCard({ student, onDelete }) {
  return (
    <li>
      <Link to={`/students/${student.id}`}>
        <strong>{student.name}</strong>
      </Link>
      <br />
      Email: {student.email}
      <br />
      Asal: {student.company.name}
      <br />
      <button onClick={() => onDelete(student.id)}>Hapus</button>
    </li>
  );
}

export default StudentCard;
