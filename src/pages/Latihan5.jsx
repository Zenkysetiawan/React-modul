import { useState, useEffect } from "react";
import UserItem from "../components/UserItem";
import SearchBox from "../components/SearchBox";
import useFetch from "../hooks/useFetch";

function Latihan5() {
  const [search, setSearch] = useState("");

  const {
    data: users,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) {
    return <p>Memuat data...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (users.length === 0) {
    return <p>Belum ada data.</p>;
  }

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h1>Latihan 5</h1>
      <br />

      {/* Kolom pencarian */}
      <SearchBox value={search} onChange={(e) => setSearch(e.target.value)} />

      {filteredUsers.length === 0 && <p>Nama tidak ditemukan</p>}

      <ul>
        {filteredUsers.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}

export default Latihan5;
