# WorkoutAja

WorkoutAja adalah aplikasi web yang dirancang untuk memberikan pengalaman workout yang unik dan eksklusif bagi penggunanya. Kami bertujuan untuk membantu pengguna berinvestasi dalam tubuh mereka dengan memberikan rutinitas latihan yang ditargetkan, yang dapat meningkatkan kinerja dan kualitas hidup.

### index.html
#### Deskripsi Fungsi
File `index.html` menyusun struktur halaman web yang memperkenalkan layanan bernama "WorkOutAja". Halaman ini terdiri dari elemen navigasi, konten utama, dan footer. Ini juga memasukkan stylesheet (`style.css`) untuk mengatur gaya dan file JavaScript (`script.js`) untuk menambahkan interaktivitas.

#### Input
Input dalam konteks HTML biasanya tidak langsung, tetapi kita bisa mengidentifikasi elemen interaksi yang dapat menerima input:
- **Tombol "Start now"**: Pengguna dapat mengklik tombol ini untuk memicu fungsionalitas JavaScript (interaksi).

#### Output
Output dari file HTML adalah tampilan halaman web yang ditampilkan di browser dengan:
- Teks, gambar, logo, dan elemen interaktif.
- Struktur visual seperti header, footer, dan elemen lainnya.

### style.css
#### Deskripsi Fungsi
File `style.css` bertanggung jawab untuk memberi gaya pada elemen-elemen HTML dalam file `index.html`. Ini mengatur tata letak, warna, ukuran font, dan efek transisi.

#### Input
CSS tidak memiliki input interaktif seperti HTML atau JavaScript, tetapi ia dapat "menerima" selektor yang ditentukan dalam HTML. Misalnya, gaya dapat diterapkan pada kelas `.text`, tag `nav`, dan sebagainya.

#### Output
Output dari file CSS adalah penampilan visual dari halaman web yang telah distilasi dengan:
- Skema warna latar belakang, margin, padding, font, dan gaya tombol.
- Efek hover (berubah saat kursor berada di atas elemen).

### script.js
#### Deskripsi Fungsi
File `script.js` menambahkan interaktivitas pada halaman web. Ini mendengarkan peristiwa yang terjadi pada elemen tertentu dan merespons dengan tindakan, seperti menampilkan pesan ketika tombol diklik.

#### Input
Input dalam konteks JavaScript ini melibatkan interaksi pengguna:
- **Event Listener pada tombol "glow-button"**: Mengamati klik dan hover dari pengguna.
    - Event `click`: Memicu penggunaan fungsi ketika tombol diklik.
    - Event `mouseover`: Mengubah gaya tombol ketika mouse melayang di atasnya.
    - Event `mouseout`: Mengembalikan gaya tombol ketika mouse tidak lagi melayang di atasnya.

#### Output
Output dari file JavaScript adalah:
- **Alert**: Pesan yang muncul saat tombol diklik, berisi teks "Terima kasih telah menghubungi kami!".
- **Gaya tombol**: Menambahkan efek glow pada tombol saat mouse hover dan menghilangkannya saat mouse tidak lagi hover.


### Fungsi dan Parameter
Berikut adalah detail spesifik fungsi dan parameter yang digunakan dalam script:

#### 1. `addEventListener()`
- **Fungsi**: Menambahkan pendengar untuk event.
- **Parameter**:
  - **Event Type**: `'click'`, `'mouseover'`, `'mouseout'` (tipe event yang ingin didengarkan).
  - **Callback Function**: Fungsi yang akan dieksekusi saat event terjadi.

#### 2. Callback Functions
- **Click Event Callback**
  ```javascript
  function() {
      alert('Terima kasih telah menghubungi kami!');
  }
  ```
  - Tidak memiliki parameter. Fungsi ini ditakdirkan untuk memunculkan alert saat event klik terjadi.
  
- **Mouseover Event Callback**
  ```javascript
  function() {
      glowButton.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.5)';
  }
  ```
  - Tidak memiliki parameter. Fungsi ini mengubah gaya tombol ketika mouse berada di atasnya.

- **Mouseout Event Callback**
  ```javascript
  function() {
      glowButton.style.boxShadow = 'none'; 
  }
  ```
  - Tidak memiliki parameter. Fungsi ini mengembalikan gaya tombol ke keadaan semula ketika mouse tidak lagi berada di atasnya.

 
## Cara Menjalankan Proyek

1. **Clone Repository**: 
   ```bash
   git clone https://github.com/marshelinda/Web-Client-Develompmet.git
   ```

2. **Navigasi ke Folder Proyek**:
   ```bash
   cd Tugas 3
   ```

3. **Buka `index.html`**: 
   Gunakan browser pilihan Anda untuk membuka file `index.html` di direktori proyek.
