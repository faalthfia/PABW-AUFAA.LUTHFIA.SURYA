  // js/data.js: sisa P8 yang tidak diambil dari server
export const profil = {
  nama: "Aufaa Luthfia Surya",
  peran: "Mahasiswa Informatika yang suka musik R&B dan Indie",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

export function saring(daftar, kategori) {
  return daftar.filter((lagu) => kategori === "semua" || lagu.genre === kategori);
}





