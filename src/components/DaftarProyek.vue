<template>
  <section id="daftar-lagu">
    <h2>Daftar Lagu Favorit</h2>

    <TombolFilter />
    <p v-if="state.memuat">Memuat lagu...</p>
    <p v-else-if="state.galat" class="galat" role="alert">{{ state.galat }}</p>
    <p v-else-if="tampil.length === 0">Tidak ada lagu untuk kategori {{ state.kategoriAktif }}.</p>

    <ul id="daftar" v-else>
      <li v-for="lagu in tampil" :key="lagu.id" class="kartu">
        <h3 class="kartu__judul">{{ lagu.judul }}</h3>
        <p class="kartu__isi">{{ lagu.penyanyi }} · {{ lagu.tahun }}</p>
        
        <div class="kartu__kaki">
          <span>{{ lagu.album }}</span>
          <span>{{ lagu.genre }}</span>
        </div>

        <button class="favorit" @click="tambahFavorit(lagu.id)">
          {{ state.favorit.includes(lagu.id) ? "★" : "☆" }}
        </button>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { state, tambahFavorit } from '../state.js'
import { saring } from '../data.js'
import TombolFilter from './TombolFilter.vue'

const tampil = computed(() => {
  return saring(state.daftarLagu, state.kategoriAktif)
})
</script>