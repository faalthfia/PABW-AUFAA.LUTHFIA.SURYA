import { ambilProyek } from "./api.js";
import { render, tampilkanGalat, antarMemuat, pasangFilter } from "./dom.js";

export let daftarLagu = [];
let semuaLagu = [];

function saring(daftar, kategori) {
  return daftar.filter((lagu) => kategori === "semua" || lagu.genre === kategori);
}

async function muat() {
  antarMemuat(true);
  try{
    const data = await ambilProyek();
    semuaLagu = data;
    render(semuaLagu);
  } catch (galat) {
    tampilkanGalat("Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.");
  } finally {
    antarMemuat(false);
  }
}

pasangFilter((kategori) => {
  render(saring(semuaLagu, kategori), `Tidak ada lagu untuk kategori ${kategori}.`);
});

muat();

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



