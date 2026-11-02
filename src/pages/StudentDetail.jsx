import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function StudentDetail() {
  const { id } = useParams();

  const {
    data: student,
    loading,
    error,
  } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (loading) {
    return <p>Memuat data...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      <Link to="/latihan/6">Kembali</Link>
      <h1>{student.name}</h1>
      <p>Email: {student.email}</p>
      <p>Telepon: {student.phone}</p>
      <p>Asal: {student.company.name}</p>
    </div>
  );
}

export default StudentDetail;
