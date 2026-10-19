import { pilihKategori, tambahFavorit, aturUlang } from "./state.js";

const barisFilter = document.querySelector("#filter");
const form = document.querySelector("#form-lagu");
const wadah = document.querySelector("#daftar");
const tombolAturUlang = document.querySelector("#atur-ulang");
const kolomWajib = ["judul", "penyanyi", "album", "tahun", "genre"];

export function pasangPendengar() {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;
    pilihKategori(tombol.dataset.kategori);
  });

  wadah.addEventListener("click", (event) => {
    const tombol = event.target.closest("button.favorit");
    if (!tombol) return;
    tambahFavorit(Number(tombol.dataset.id));
  });

tombolAturUlang.addEventListener("click", () => {
    aturUlang();
  });

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
}
