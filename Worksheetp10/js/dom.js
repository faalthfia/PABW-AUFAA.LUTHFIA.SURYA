const wadah       = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const kosong      = document.querySelector("#kosong");
const form        = document.querySelector("#form-lagu");
const gagal       = document.querySelector("#gagal");
const muatEl      = document.querySelector("#muat");

function buatKartu(lagu) {
  const li = document.createElement("li");
  li.className = "kartu";

const judul = document.createElement("h3");
  judul.className = "Kartu__judul"
  judul.textContent = lagu.judul;

const isi = document.createElement("p");
  isi.className = "Kartu__isi";
  isi.textContent = `${lagu.penyanyi} . ${lagu.tahun}`;

const kaki = document.createElement("div");
  kaki.className = "Kartu__kaki";

const album = document.createElement("span");
  album.textContent = lagu.album;

const genre = document.createElement("span");
  genre.textContent = lagu.genre;
  kaki.append(album, genre);

  li.append(judul, isi, kaki);
  return li;
}

export function render(daftar, pesanKosong = "Belum ada data") {
  wadah.textContent = "";
  gagal.hidden = true;

  if (daftar.length === 0) {
    kosong.textContent = pesanKosong;
    kosong.hidden = false;
    return;
  }
  kosong.hidden = true;

  daftar.forEach((lagu) => wadah.append(buatKartu(lagu)));
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

export function pasangFilter(saatDipilih) {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    saatDipilih(tombol.dataset.kategori);
    tandaiTombolAktif(tombol);
  });
}

function tandaiTombolAktif(tombolAktif) {
  barisFilter.querySelectorAll("button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

const kolomWajib = ["judul", "penyanyi", "tahun", "album", "genre"];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let kolomSalah = null;

  kolomWajib.forEach((id) => {
    const kolom = document.querySelector(`#${id}`);
    const pesan = document.querySelector(`.galat[data-untuk="${id}"]`);
    const nilai = kolom.value.trim();

    if (nilai === "") {
      pesan.textContent = `Kolom ${id} wajib diisi.`;
      kolom.setAttribute("aria-invalid", "true");
      if (!kolomSalah) kolomSalah = kolom;
    } else {
      pesan.textContent = "";
      kolom.removeAttribute("aria-invalid");
    }
  });

  if (kolomSalah) {
    kolomSalah.focus();
    return;
  }

  console.log("Form siap dikirim!");
});