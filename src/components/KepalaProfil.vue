<template>
<header>
  <div class="header-baris">
    <h1>{{ props.profil.nama }}</h1>
    <nav aria-label="Navigasi utama">
      <ul>
        <li><a href="#daftar-lagu">Daftar Lagu</a></li>
        <li><a href="#tambah-lagu">Tambah Lagu</a></li>
      </ul>
    </nav>
  </div>
</header>
</template>

<script setup>
const props = defineProps({
    profil: { type: Object, required: true}
})
</script>