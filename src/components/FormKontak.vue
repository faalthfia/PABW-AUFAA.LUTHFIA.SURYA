<template>
<section id="tambah-lagu">
  <h2>Tambah Lagu Favorit</h2>

  <form id="form-lagu" action="/simpan" method="post" novalidate>
    <p>
      <label for="judul">Judul Lagu:</label>
      <input type="text" id="judul" name="judul" required>
      <span class="galat" data-untuk="judul"></span>
    </p>
    <p>
      <label for="penyanyi">Penyanyi/Band:</label>
      <input type="text" id="penyanyi" name="penyanyi" required>
      <span class="galat" data-untuk="penyanyi"></span>
    </p>
    <p>
      <label for="tahun">Tahun Rilis:</label>
      <input type="number" id="tahun" name="tahun" min="1900" max="2026" required>
      <span class="galat" data-untuk="tahun"></span>
    </p>
    <p>
      <label for="album">Album:</label>
      <input type="text" id="album" name="album">
      <span class="galat" data-untuk="album"></span>
    </p>
    <p>
      <label for="genre">Genre:</label>
      <select id="genre" name="genre" required>
        <option value="">--Pilih Genre--</option>
        <option value="Pop">Pop</option>
        <option value="Rock">Rock</option>
        <option value="R&B">R&B</option>
        <option value="Hip Hop">Hip Hop</option>
        <option value="Jazz">Jazz</option>
        <option value="Klasik">Klasik</option>
        <option value="Indie">Indie</option>
        <option value="folk">Folk</option>
        <option value="lainnya">Lainnya</option>
      </select>
      <span class="galat" data-untuk="genre"></span>
    </p>
    <button type="submit">Tambah Lagu</button>
  </form>
</section>
</template>

<script setup>
</script>