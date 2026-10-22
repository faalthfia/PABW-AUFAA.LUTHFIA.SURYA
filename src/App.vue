<template>
<div class="page">

<KepalaProfil :profil="profil" />

<main class="content">
  <aside class="sisi">
    <nav aria-label="Navigasi samping">
      <ul>
        <li><a href="#daftar-lagu">Daftar Lagu</a></li>
        <li><a href="#galeri">Galeri Album</a></li>
        <li><a href="#tambah-lagu">Tambah Lagu</a></li>
      </ul>
    </nav>
    <figure>
      <img src="/Musik.jpeg" 
           alt="Piringan hitam dan headphone di atas meja kayu"
           loading="lazy" 
           decoding="async">
      <figcaption>Koleksi musik yang saya miliki</figcaption>
    </figure>
  </aside>

  <div class="utama">
    <DaftarProyek />

    <section id="galeri">
      <h2>Galeri Album</h2>
      <div class="grid-galeri">

        <article class="kartu">
          <h3 class="kartu__judul">Goodnight n go</h3>
          <p class="kartu__isi">Ariana Grande · 2018</p>
          <div class="kartu__kaki"><span>Sweetener</span><span>R&amp;B</span></div>
        </article>

        <article class="kartu">
          <h3 class="kartu__judul">The Party &amp; The After Party</h3>
          <p class="kartu__isi">The Weeknd · 2011</p>
          <div class="kartu__kaki"><span>House of Balloons</span><span>R&amp;B</span></div>
        </article>

        <article class="kartu">
          <h3 class="kartu__judul">Normal Girl</h3>
          <p class="kartu__isi">SZA · 2017</p>
          <div class="kartu__kaki"><span>Ctrl</span><span>R&amp;B</span></div>
        </article>

        <article class="kartu">
          <h3 class="kartu__judul">Ride</h3>
          <p class="kartu__isi">Lana Del Rey · 2012</p>
          <div class="kartu__kaki"><span>Born to Die</span><span>Indie Pop</span></div>
        </article>
      </div>
    </section>

    <FormKontak />
  </div>
</main>

<footer>
  <p>AUFAA LUTHFIA SURYA · 25523197 · 2026</p>
</footer>

</div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { profil } from './data.js'
import { state, simpan, muat, pulihkan, isiProyek} from './state.js'
import { ambilProyek } from './api.js'

import KepalaProfil from './components/KepalaProfil.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

onMounted(async () => {
  pulihkan(muat())
  try {
    isiProyek (await ambilProyek())
  } catch (galat) {
    state.galat = 'Data gagal dimuat. Periksa kembali, lalu muat ulang.'
  } finally {
    state.memuat = false
  }
})

watch(state, (nilai) => simpan(nilai), {deep:true })
</script>
