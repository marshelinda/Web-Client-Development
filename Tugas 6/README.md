# Pokémon App with React Hooks

## Deskripsi

Aplikasi Pokémon ini dibangun menggunakan React dan memanfaatkan React Hooks, Context API, serta LocalStorage. Aplikasi ini memungkinkan pengguna untuk melihat daftar Pokémon, melihat detail setiap Pokémon, serta memfilter dan mengurutkan Pokémon berdasarkan nama, ID, atau tipe. Aplikasi ini mendukung dua mode tampilan: satu kolom dan dua kolom, yang dapat dipilih dengan tombol toggle.

### Fitur Utama:
- **Tampilan Responsif**: Mode tampilan satu kolom dan dua kolom.
- **Pengurutan Pokémon**: Urutkan Pokémon berdasarkan ID, nama, atau tipe.
- **Filter Pokémon**: Mencari Pokémon berdasarkan nama.
- **Penyimpanan Data**: Menyimpan data Pokémon ke `LocalStorage` agar tetap tersedia meskipun aplikasi di-refresh.

## Input dan Output

### Input:
- **Daftar Pokémon**: Data Pokémon diambil dari API eksternal menggunakan endpoint `https://pokeapi.co/api/v2/pokemon?limit=20`.
- **Tombol Sort**: Pengguna dapat memilih untuk mengurutkan Pokémon berdasarkan ID, nama, atau tipe.
- **Tombol Layout**: Pengguna dapat memilih untuk menampilkan Pokémon dalam tampilan satu kolom atau dua kolom.
- **Pencarian**: Pengguna dapat mengetikkan nama Pokémon di kolom pencarian untuk memfilter Pokémon.

### Output:
- **Daftar Pokémon**: Menampilkan Pokémon sesuai dengan pengurutan dan filter yang dipilih.
- **Detail Pokémon**: Saat memilih Pokémon, aplikasi akan menampilkan detail seperti ID, gambar, statistik, dan tipe.

## Tools dan Teknologi yang Digunakan
- **React**: Library JavaScript untuk membangun antarmuka pengguna.
- **React Hooks**: Digunakan untuk manajemen state dan lifecycle methods.
- **React Context API**: Digunakan untuk berbagi state global seperti daftar Pokémon, pengaturan layout, dan filter pencarian.
- **LocalStorage**: Untuk menyimpan data Pokémon dan memastikan data tetap tersedia setelah aplikasi di-refresh.
- **CSS**: Untuk styling aplikasi dengan pendekatan tradisional (bukan menggunakan Tailwind atau framework CSS lainnya).

## Penjelasan Kode dan Fungsi

### Komponen Utama:
1. **PokemonProvider**: Menggunakan Context API untuk menyediakan data Pokémon global, pengaturan layout, pengurutan, dan pencarian.
2. **PokemonList**: Menampilkan daftar Pokémon dengan opsi pengurutan dan filter berdasarkan nama, ID, dan tipe. Mengatur mode layout (satu kolom atau dua kolom).
3. **PokemonDetail**: Menampilkan detail lengkap dari Pokémon yang dipilih, termasuk gambar, ID, dan statistik.
4. **Header**: Menampilkan logo dan kolom pencarian untuk memfilter Pokémon berdasarkan nama.

### Fungsi Utama:
- **fetchPokemons**: Fungsi untuk mengambil data Pokémon dari API dan menyimpannya di state.
- **handleSortChange**: Fungsi untuk menangani perubahan pengurutan Pokémon berdasarkan ID, nama, atau tipe.
- **handleLayoutChange**: Fungsi untuk mengubah tampilan antara satu kolom dan dua kolom.
- **handleSearch**: Fungsi untuk memfilter Pokémon berdasarkan kata kunci yang dimasukkan di kolom pencarian.

## Definisi Parameter

- **pokemons**: Array berisi data Pokémon yang didapatkan dari API.
- **selectedPokemon**: State untuk menyimpan Pokémon yang dipilih oleh pengguna untuk melihat detailnya.
- **layout**: State untuk menentukan layout tampilan (satu kolom atau dua kolom).
- **sortBy**: State untuk menentukan kriteria pengurutan (ID, nama, atau tipe).
- **searchTerm**: State untuk menyimpan kata kunci pencarian.
- **setPokemons**: Fungsi untuk memperbarui state `pokemons`.
- **setSelectedPokemon**: Fungsi untuk memperbarui state `selectedPokemon`.
- **setLayout**: Fungsi untuk memperbarui state `layout`.
- **setSortBy**: Fungsi untuk memperbarui state `sortBy`.
- **setSearchTerm**: Fungsi untuk memperbarui state `searchTerm`.

## Instalasi

### Persyaratan:
- Node.js (v14.x atau lebih tinggi)
- NPM atau Yarn

### Langkah-langkah Instalasi:

1. **Clone Repository**:
   ```bash
   git clone https://github.com/marshelinda/Tugas%206.git
   cd "Tugas 6"
   ```

2. **Instal Dependensi**:
   Gunakan NPM atau Yarn untuk menginstal dependensi:
   - Menggunakan NPM:
     ```bash
     npm install
     ```
   - Menggunakan Yarn:
     ```bash
     yarn install
     ```

3. **Jalankan Aplikasi**:
   Untuk menjalankan aplikasi secara lokal, gunakan perintah:
   - Menggunakan NPM:
     ```bash
     npm start
     ```
   - Menggunakan Yarn:
     ```bash
     yarn start
     ```

Aplikasi akan berjalan di `http://localhost:5173`.

## Live Code Demo

Untuk melihat versi demo dari aplikasi ini secara langsung:

🔗 Demo Langsung: [Pokemon App](https://pokemon-app-nine-virid.vercel.app/)