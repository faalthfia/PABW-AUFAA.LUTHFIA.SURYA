import { ambilProyek } from "./api.js";
import { isiProyek, pulihkan, muat, state } from "./state.js";
import { tampilkanGalat, antarMemuat } from "./dom.js";
import { pasangPendengar } from "./events.js";

async function mulai() {
  pulihkan(muat());
  pasangPendengar();
  antarMemuat(true);
  try{
    isiProyek(await ambilProyek())  ;
  } catch (galat) {
    tampilkanGalat("Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.");
  } finally {
    antarMemuat(false);
  }
}
mulai();



