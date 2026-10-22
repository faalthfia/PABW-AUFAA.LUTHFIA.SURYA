<template>
<div id="filter" class="filter" aria-label="Filter genre">
<button type="button" id="atur-ulang" @click="aturUlang">Atur ulang</button>
    <button type="button" @click="pilihKategori('semua')" :class="{ aktif: state.kategoriAktif === 'semua' }">Semua</button>
    <button type="button" @click="pilihKategori('Pop')" :class="{ aktif: state.kategoriAktif === 'Pop' }">Pop</button>
    <button type="button" @click="pilihKategori('Rock')" :class="{ aktif: state.kategoriAktif === 'Rock' }">Rock</button>
    <button type="button" @click="pilihKategori('R&B')" :class="{ aktif: state.kategoriAktif === 'R&B' }">R&B</button>
    <button type="button" @click="pilihKategori('Hip Hop')" :class="{ aktif: state.kategoriAktif === 'Hip Hop' }">Hip Hop</button>
    <button type="button" @click="pilihKategori('Jazz')" :class="{ aktif: state.kategoriAktif === 'Jazz' }">Jazz</button>
    <button type="button" @click="pilihKategori('Klasik')" :class="{ aktif: state.kategoriAktif === 'Klasik' }">Klasik</button>
    <button type="button" @click="pilihKategori('Indie')" :class="{ aktif: state.kategoriAktif === 'Indie' }">Indie</button>
    <button type="button" @click="pilihKategori('Folk')" :class="{ aktif: state.kategoriAktif === 'Folk' }">Folk</button>
    <button type="button" @click="pilihKategori('Lainnya')" :class="{ aktif: state.kategoriAktif === 'Lainnya' }">Lainnya</button>
  </div>
</template>

<script setup>
import { state, pilihKategori, aturUlang } from '../state.js'
</script>