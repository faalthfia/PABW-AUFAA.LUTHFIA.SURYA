import { daftarLagu } from "./app.js";

const wadah       = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const kosong      = document.querySelector("#kosong");
const form        = document.querySelector("#form-lagu");

function buatKartu(lagu) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = lagu.judul;
  return li;
}

function render(data) {
  wadah.textContent = "";

  if (data.length === 0) {
    kosong.hidden = false;
    return;
  }
  kosong.hidden = true;

  data.forEach((lagu) => wadah.append(buatKartu(lagu)));
}

render(daftarLagu);

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;

  const kategori = tombol.dataset.kategori;
  const terpilih = daftarLagu.filter(
    (lagu) => kategori === "semua" || lagu.genre === kategori
  );

  render(terpilih);
  tandaiTombolAktif(tombol);
});

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