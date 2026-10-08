const nama = "Aufaa Luthfia Surya";        // teks
const jumlahLagu = 10;                     // angka, bukan "3"
let pilihanGenre = "semua";                // akan berubah saat disaring

console.log(typeof nama);          // "string"
console.log(typeof jumlahLagu);    // "number"
console.log(typeof belumDibuat);   // undefined

const profil = {
  nama: "Aufaa Luthfia Surya",
  peran: "Mahasiswa Informatika yang suka musik R&B dan Indie",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
console.log(kalimat);

// 1. Menyusun kalimat perkenalan dari satu object
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// 2. Merapikan daftar keahlian menjadi satu baris teks
const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

const daftarLagu = [     
  { judul: "Goodnight n go", penyanyi: "Ariana Grande", tahun: 2018, album: "Sweetener", genre: "R&B", favorit: true },
  { judul: "The Party & The After Party", penyanyi: "The Weeknd", tahun: 2011, album: "House of Balloons", genre: "R&B", favorit: true },
  { judul: "Normal Girl", penyanyi: "SZA", tahun: 2017, album: "Ctrl", genre: "R&B", favorit: false },
  { judul: "Love Galore", penyanyi: "SZA", tahun: 2017, album: "Ctrl", genre: "R&B", favorit: true },
  { judul: "Ride", penyanyi: "Lana Del Rey", tahun: 2012, album: "Born to Die: The Paradise Edition", genre: "Indie Pop", favorit: true },
  { judul: "Carmen", penyanyi: "Lana Del Rey", tahun: 2012, album: "Born to Die: The Paradise Edition", genre: "Indie Pop", favorit: false },
  { judul: "Buyer's Remorse", penyanyi: "Daniel Caesar, Omar Apollo", tahun: 2023, album: "Never Enough", genre: "R&B", favorit: true },
  { judul: "Get You", penyanyi: "Daniel Caesar, Kali Uchis", tahun: 2016, album: "Freudian", genre: "R&B", favorit: true },
  { judul: "Best Part", penyanyi: "Daniel Caesar, H.E.R.", tahun: 2017, album: "Best Part", genre: "R&B", favorit: true },
  { judul: "Vince Van Gogh", penyanyi: "Daniel Caesar", tahun: 2023, album: "Never Enough", genre: "R&B", favorit: false },
];

console.table(daftarLagu);
console.table(profil.keahlian);

const laguFavorit = daftarLagu.filter((lagu) => lagu.favorit);
console.table(laguFavorit);

const laguRide = daftarLagu.find((lagu) => lagu.judul === "Ride");
console.log(laguRide);

const daftarJudul = daftarLagu.map((lagu) => lagu.judul);
console.log(daftarJudul);

const urutanTahun = [...daftarLagu].sort((a, b) => a.tahun - b.tahun);
console.table(urutanTahun);

console.log("Data asli masih " + daftarLagu.length + " lagu.");