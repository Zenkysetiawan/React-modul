import { useState } from "react";

// komponen untuk menampilkan App
function Student() {
  const name = "Zen";
  const major = "Informatika";

  return (
    <div>
      <h2>My profile</h2>
      <p>Nama: {name} </p>
      <p>Major: {major} </p>
    </div>
  );
}

//props = Props adalah data yang diterima komponen dari luar.
function StudentCard(props) {
  return (
    <div>
      <h2> {props.name} </h2>
      <p>Umur: {props.age} </p>
      <p>Jurusan: {props.major} </p>
      <p>Semester: {props.semester} </p>
      <p>universitas: {props.university} </p>
    </div>
  );
}
//props destructuring
function StudentCard2({ name, age, major, semester, university }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Umur: {age}</p>
      <p>Jurusan: {major}</p>
      <p>Semester: {semester}</p>
      <p>Universitas: {university}</p>
    </div>
  );
}

// useState - membuat UI menjadi interaktif
// State adalah data yang dikelola oleh komponen React dan bisa berubah selama aplikasi berjalan.

//
function StudentCard3({ name, major, semester, university }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Jurusan: {major}</p>
      <p>Semester: {semester}</p>
      <p>Universitas: {university}</p>
    </div>
  );
}

//Komponen utama yang menampilkan ke UI
function Latihan1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");

  function tambah() {
    if (count >= 10) {
      return;
    }
    setCount(count + 1);
  }

  function kurang() {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  // latihan live name input
  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleMajorChange(event) {
    setMajor(event.target.value);
  }

  // latihan .map React
  const students = [
    {
      id: 1,
      name: "Zen",
      major: "Informatika",
      semester: 5,
      university: "Universitas Indonesia",
    },
    {
      id: 2,
      name: "Aldi",
      major: "Informatika",
      semester: 5,
      university: "Universitas Indonesia",
    },
    {
      id: 3,
      name: "Bimas",
      major: "Informatika",
      semester: 5,
      university: "Universitas Indonesia",
    },
    {
      id: 6,
      name: "Angga",
      major: "Informatika",
      semester: 5,
      university: "Universitas Indonesia",
    },
    {
      id: 7,
      name: "siti",
      major: "Informatika",
      semester: 5,
      university: "Universitas Indonesia",
    },
  ];

  return (
    <div>
      <h1>Belajar React</h1>

      {/* menampilkan Ui dari komponen student */}
      <Student />
      <br />

      <StudentCard2
        name="Zenky Setiawan"
        age={20}
        major="Informatika"
        semester={5}
        university="Universitas Dehasen Bengkulu"
      />
      <br />

      <StudentCard2
        name="Budi Adi lhaksono"
        age={22}
        major="Bussiness"
        semester={7}
        university="Universitas Indonesia"
      />
      <br />

      {/* LATIHAN useState dengan counter App */}
      <h1>Counter App</h1>
      <h2>Jumlah klik: {count}</h2>

      <button onClick={tambah}>Tambah</button>
      <button onClick={kurang}>kurang</button>
      <button onClick={reset}>Reset</button>
      <br />
      <br />

      {/* Live name input */}
      <h1>Live Name Input</h1>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Masukan nama anda..."
      />
      <p>Halo, {name || "bro"} </p>
      <input
        type="text"
        value={major}
        onChange={handleMajorChange}
        placeholder="Masukkan jurusan anda..."
      />
      <p>Jurusan anda: {major || "apa bro?"} </p>
      <br />
      <br />

      {/* latihan map() */}
      <h1>Daftar Mahasiswa</h1>

      {students.map(function (student2) {
        return (
          <StudentCard3
            key={student2.id}
            name={student2.name}
            major={student2.major}
            semester={student2.semester}
            university={student2.university}
          />
        );
      })}
    </div>
  );
}

// membuat komponen App tersedia untuk diimpor oleh file lain, seperti main.jsx
export default Latihan1;
