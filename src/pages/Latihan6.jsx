import { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox";
import StudentCard from "../components/StudentCard";

function Latihan6() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function ambilData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("Server membalas dengan error");
        }

        const data = await response.json();
        setStudents(data);
      } catch (error) {
        setError("Data gagal dimuat, coba lagi nanti");
      } finally {
        setLoading(false);
      }
    }

    ambilData();
  }, []);

  function handleDelete(id) {
    setStudents(students.filter((student) => student.id !== id));
  }

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) {
    return <p>Memuat data Mahasiswa...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (students.length === 0) {
    return <p>Belum ada data mahasiswa</p>;
  }

  return (
    <div>
      <h1>Latihan 6</h1>
      <br />
      <h2>Student Directory</h2>
      <br />

      <SearchBox value={search} onChange={(e) => setSearch(e.target.value)} />
      <p>
        Menampilkan {filteredStudents.length} dari {students.length} mahasiswa
      </p>
      <ul>
        {filteredStudents.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default Latihan6;
