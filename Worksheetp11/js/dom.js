import { saring } from "./data.js";

const wadah       = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const kosong      = document.querySelector("#kosong");
const gagal       = document.querySelector("#gagal");
const muatEl      = document.querySelector("#muat");

function buatKartu(lagu, favorit) {
  const li = document.createElement("li");
  li.className = "kartu";

const judul = document.createElement("h3");
  judul.className = "kartu__judul"
  judul.textContent = lagu.judul;

const isi = document.createElement("p");
  isi.className = "kartu__isi";
  isi.textContent = `${lagu.penyanyi} . ${lagu.tahun}`;

const kaki = document.createElement("div");
  kaki.className = "kartu__kaki";

const album = document.createElement("span");
  album.textContent = lagu.album;

const genre = document.createElement("span");
  genre.textContent = lagu.genre;
  kaki.append(album, genre);

const tombol = document.createElement("button");
  tombol.className = "favorit";
  tombol.dataset.id = lagu.id;
  tombol.textContent = favorit.includes(lagu.id) ? "★" : "☆";

  li.append(judul, isi, kaki, tombol);
  return li;
}

export function render(state) {
  wadah.textContent = "";
  gagal.hidden = true;

  const tampil = saring(state.daftarLagu, state.kategoriAktif);

  if (tampil.length === 0) {
    kosong.textContent = `Tidak ada lagu untuk kategori ${state.kategoriAktif}.`;
    kosong.hidden = false;
    return;
  }
  kosong.hidden = true;

  tampil.forEach((lagu) => wadah.append(buatKartu(lagu, state.favorit)));
  tandaiTombolAktif(state);
}

function tandaiTombolAktif(state) {
  barisFilter.querySelectorAll("button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol.dataset.kategori === state.kategoriAktif);
  });
}

export function tampilkanGalat(pesan) {
  wadah.textContent = "";
  kosong.hidden = true;
  gagal.textContent = pesan;
  gagal.hidden = false;
}

export function antarMemuat(sedangMemuat) {
  muatEl.hidden = !sedangMemuat;
  if (sedangMemuat) {
    gagal.hidden = true;
    kosong.hidden = true;
  }
}


