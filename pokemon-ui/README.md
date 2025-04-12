# Aplikasi Pokémon (React Hooks)

Aplikasi web Pokémon ini dibuat menggunakan **React** dengan pendekatan **functional component dan React Hooks** sepenuhnya. Aplikasi ini menampilkan daftar Pokémon, memungkinkan pengguna untuk mengurutkan, mengganti tampilan grid, serta melihat detail setiap Pokémon secara interaktif. Tampilan dirancang menyerupai ukuran layar mobile: **320x568px**.

---

## Tujuan

Mendemonstrasikan penggunaan **React Hooks** (`useState`, `useEffect`, dll) dalam pengembangan aplikasi frontend berbasis komponen, tanpa menggunakan class component atau library styling seperti Tailwind.

---

## Definisi Masalah

Buat aplikasi yang:
- Menampilkan daftar Pokémon dari API
- Menggunakan `useState` dan `useEffect` untuk pengelolaan state dan data
- Memiliki fitur sortir dan tampilan grid dinamis
- Menampilkan **detail kartu Pokémon** lengkap saat diklik

---

## Input

- Tidak ada input form eksplisit.
- Interaksi user dilakukan melalui:
  - Klik dropdown untuk sortir
  - Klik tombol toggle layout (1-grid / 2-grid)
  - Klik kartu Pokémon untuk membuka detail

---

## Output

- **Tampilan utama:** daftar Pokémon dalam bentuk kartu
- **Tampilan detail:** gambar besar, ID, nama, sprite kecil, dan statistik (HP, Attack, Defense)

---

## Fungsi Utama & Parameter

### `useEffect(() => {...}, [])`

- **Tujuan:** Mengambil data dari API saat komponen pertama kali dirender.
- **Parameter:** Fungsi callback dan dependency array kosong (`[]`)
- **Output:** Mengisi state daftar Pokémon

---

### `useState(initialValue)`

Digunakan untuk menyimpan state berikut:
- `pokemons`: array data Pokémon
- `sortOrder`: string ("id", "name", dll)
- `gridMode`: string ("one" atau "two")
- `selectedPokemon`: objek detail Pokémon yang diklik

---

### `handleSort(order)`

- **Parameter:**  
  - `order` (`string`): Kriteria sortir (contoh: `"name"`, `"id"`)
- **Output:** Memperbarui urutan array Pokémon berdasarkan pilihan

---

### `handleGridToggle(mode)`

- **Parameter:**  
  - `mode` (`"one"` atau `"two"`): Mode tampilan grid
- **Output:** Mengubah tampilan kartu ke satu atau dua kolom

---

### `handleCardClick(pokemon)`

- **Parameter:**  
  - `pokemon` (objek): Data Pokémon yang diklik
- **Output:** Menampilkan detail Pokémon

---

### `closeDetailView()`

- Menutup tampilan detail dan kembali ke daftar utama

---

## Tools & Teknologi

| Tool         | Deskripsi                              |
|--------------|------------------------------------------|
| **React**    | Library utama untuk UI                  |
| **Vite**     | Build tool dan dev server super cepat   |
| **PokéAPI**  | API sumber data Pokémon                 |
| **CSS**      | Styling per komponen, tanpa Tailwind    |
| **Node.js**  | Runtime environment                     |

---

##  Instalasi & Cara Menjalankan

### 1. Clone Repository

```bash
git clone https://github.com/marshelinda/Tugas 5
cd "Tugas 5"
```

### 2. Install Dependency

```bash
npm install
```

### 3. Jalankan Aplikasi

```bash
npm run dev
```

Buka di browser:
```
http://localhost:5173
```
---