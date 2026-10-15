const ALAMAT = 'data/proyek.json';

export async function ambilProyek() {
  try {
    const respons = await fetch(ALAMAT);
    console.log('status', respons.status, 'ok', respons.ok);
    if (!respons.ok) throw new Error('status ' + respons.status);

    const data = await respons.json();
    console.log(data);
    console.log(data[0]?.judul);

    const badan = JSON.stringify({ judul: 'Judul contoh', kategori : 'web'});
    console.log(typeof badan);
    console.log(JSON.parse(badan).judul);

    return data;
  } catch (galat) {
    console.error('gagal memuat', galat.message);
    throw galat;
  }
}