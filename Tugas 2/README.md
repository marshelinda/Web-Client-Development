### 1. Temp Convert (JavaScript)

#### Deskripsi Fungsi
Fungsi ini mengonversi suhu dari Fahrenheit ke Celsius menggunakan rumus konversi yang tepat.

#### Input
- `fahrenheit`: Suhu dalam derajat Fahrenheit (number).

#### Output
- Mengembalikan suhu dalam derajat Celsius (number).

### Contoh
```javascript
const inputFahrenheit = 32; // Input: 32°F
const celsius = fahrenheitToCelsius(inputFahrenheit); // Output: 0°C
```

---

### 1.2. Temp Convert (TypeScript)

#### Deskripsi Fungsi
Fungsi ini mengonversi suhu dari Fahrenheit ke Celsius dengan format TypeScript.

#### Input
- `fahrenheit`: Suhu dalam derajat Fahrenheit (number).

#### Output
- Mengembalikan suhu dalam derajat Celsius (number).

### Contoh
```typescript
const tempF = 68; // Input: 68°F
const tempC = fahrenheitToCelsius(tempF); // Output: 20°C
```

---

### 2. Length Covert (JavaScript)

#### Deskripsi Fungsi
Fungsi ini mengonversi panjang dari centimeter ke kilometer dan sebaliknya.

#### Input
- `value`: Panjang dalam centimeter atau kilometer (number).

#### Output
- Mengembalikan string yang merepresentasikan panjang dalam kilometer atau centimeter.

### Contoh
```javascript
console.log(convertLength(100000)); // Output: "1 km"
console.log(convertLength(1));      // Output: "100000 cm"
```

---

### 2.2. Length Covert (TypeScript)

#### Deskripsi Fungsi
Fungsi ini mengonversi panjang dari centimeter ke kilometer dan sebaliknya dengan format TypeScript.

#### Input
- `value`: Panjang yang akan dikonversi (number).
- `fromUnit`: Unit dari input (`'cm'` atau `'km'`).

#### Output
- Mengembalikan string yang merepresentasikan panjang dalam kilometer atau centimeter.

### Contoh
```typescript
console.log(convertLength(100000, 'cm')); // Output: "1 km"
console.log(convertLength(1, 'km'));       // Output: "100000 cm"
```

---

### 3. Ood Check (JavaScript)

#### Deskripsi Fungsi
Fungsi ini memeriksa apakah suatu bilangan integer adalah genap.

#### Input
- `n`: Bilangan yang akan diuji (number).

#### Output
- Mengembalikan boolean `true` jika genap, dan `false` jika ganjil.

### Contoh
```javascript
console.log(isEven(1000)); // Output: true
console.log(isEven(1001)); // Output: false
```

---

### 3.2. Ood Check (TypeScript)

#### Deskripsi Fungsi
Fungsi ini juga memeriksa ke-genapan bilangan dengan format TypeScript.

#### Input
- `n`: Bilangan yang akan diuji (number).

#### Output
- Mengembalikan boolean `true` jika genap, dan `false` jika ganjil.

### Contoh
```typescript
console.log(isEven(1000)); // Output: true
```

---

### 4. Remove String (JavaScript)

#### Deskripsi Fungsi
Fungsi ini menghapus kemunculan pertama dari string pencarian dalam string input.

#### Input
- `inputString`: String asli (string).
- `searchString`: String yang ingin dihapus (string).

#### Output
- Mengembalikan string baru dengan kemunculan pertama dari `searchString` dihapus.

### Contoh
```javascript
const result = removeFirstOccurrence("Hello world", "ell"); // Output: "Ho world"
```

---

### 4.2. Remove String (TypeScript)

#### Deskripsi Fungsi
Fungsi ini berfungsi sama seperti fungsi JavaScript sebelumnya, tetapi dengan format TypeScript.

#### Input
- `input`: String asli (string).
- `searchString`: String yang ingin dihapus (string).

#### Output
- Mengembalikan string baru dengan kemunculan pertama dari `searchString` dihapus.

### Contoh
```typescript
console.log(removeFirstOccurrence("Hello world", "ell")); // Output: "Ho world"
```

---

### 5. Palindrome Check (JavaScript)

#### Deskripsi Fungsi
Fungsi ini memeriksa apakah sebuah string adalah palindrom (dibaca sama dari depan dan belakang).

#### Input
- `str`: String yang akan diperiksa (string).

#### Output
- Mengembalikan boolean `true` jika string tersebut adalah palindrom, dan `false` jika tidak.

### Contoh
```javascript
const inputString = "madam"; 
const result = isPalindrome(inputString); // Output: true
```

---

### 5.2. Palindrome Check (TypeScript)

#### Deskripsi Fungsi
Fungsi ini juga memeriksa ke-palindroman string dengan format TypeScript.

#### Input
- `input`: String yang akan diperiksa (string).

#### Output
- Mengembalikan boolean `true` jika string tersebut adalah palindrom, dan `false` jika tidak.

### Contoh
```typescript
console.log(`${palindromeCheck} → ${isPalindrome(palindromeCheck) ? 'palindrome' : 'not palindrome'}`); // Output: "madam → palindrome"
```
# Panduan Menginisialisasi Repositori Git dan Alur Kerja

### 1. Menginisialisasi Repository

**Deskripsi**: Pada langkah ini, kita akan membuat direktori baru di komputer kita dan menginisialisasinya sebagai repository Git. Ini adalah langkah awal untuk mengelola versi proyek kita menggunakan Git.

**Langkah**:
- **Buat Direktori Baru**:
  Buka terminal Anda dan jalankan perintah berikut:
  ```bash
  mkdir my-project
  cd my-project
  ```

- **Inisialisasi Git**:
  Jalankan perintah berikut untuk membuat repository Git baru:
  ```bash
  git init
  ```
  Ini akan membuat folder `.git` di dalam direktori proyek, yang menyimpan semua informasi konfigurasi Git.

- **Buat File**:
  Buat file baru, misalnya:
  ```javascript
  // index.js
  console.log("Hello, World!");
  ```

- **Tambahkan File ke Staging Area**:
  Stage file yang telah dibuat dengan perintah:
  ```bash
  git add index.js
  ```

- **Commit File**:
  Commit perubahan yang telah di-stage:
  ```bash
  git commit -m "Commit awal: Tambah index.js"
  ```
---
### 2. Membuat Perubahan, Menyusun, Berkomit, dan Mendorong ke GitHub

**Deskripsi**: Di langkah ini, Anda akan belajar bagaimana membuat perubahan pada file yang ada, menyusun (stage) perubahan tersebut, berkomit, dan kemudian mendorong (push) perubahan ini ke GitHub.

**Langkah**:
- **Modifikasi File**:
  Ubah `index.js` dengan menambahkan baris kode baru:
  ```javascript
  console.log("Hello, World!");
  console.log("Ini adalah proyek pertama saya di GitHub.");
  ```

- **Stage Perubahan**:
  Stage file yang telah diubah:
  ```bash
  git add index.js
  ```

- **Commit Perubahan**:
  Commit dengan pesan deskriptif:
  ```bash
  git commit -m "Perbarui index.js untuk menyertakan pesan salam baru"
  ```

- **Dorong ke GitHub**:
  Pertama, tautkan repository lokal Anda ke GitHub (asumsikan Anda telah membuat repository di GitHub):
  ```bash
  git remote add origin https://github.com/username/my-project.git
  ```
  Dorong commit Anda ke GitHub:
  ```bash
  git push -u origin master
  ```
---
### 3. Membuat Branch Baru

**Deskripsi**: Pada langkah ini, Anda akan belajar tentang penggunaan branch dalam Git. Branch memungkinkan Anda bekerja secara terpisah pada fitur baru atau perbaikan tanpa mengganggu branch utama.

**Langkah**:
- **Buat Branch Baru**:
  Gunakan perintah berikut untuk membuat serta berpindah ke branch baru:
  ```bash
  git checkout -b my-feature-branch
  ```

- **Buat Perubahan**:
  Modifikasi file yang ada atau buat file baru. Misalnya:
  ```javascript
  // feature.js
  console.log("Ini adalah branch fitur saya!");
  ```

- **Beralih Kembali ke Branch Utama**:
  ```bash
  git checkout master
  ```

- **Beralih Kembali ke Branch Fitur**:
  ```bash
  git checkout my-feature-branch
  ```
---
### 4. Mengubah, Menyusun, Berkomit, dan Mendorong dalam Branch Baru

**Deskripsi**: Di langkah ini, setelah Anda membuat branch baru, Anda akan membuat perubahan, menyusun (stage), berkomit, dan mendorong (push) branch ini ke GitHub.

**Langkah**:
- **Stage Perubahan Baru**:
  Stage perubahan di branch baru:
  ```bash
  git add feature.js
  ```

- **Commit Perubahan**:
  Commit perubahan tersebut dengan pesan yang deskriptif:
  ```bash
  git commit -m "Tambahkan feature.js di my-feature-branch"
  ```

- **Dorong Branch ke GitHub**:
  Dorong branch baru ini ke GitHub:
  ```bash
  git push -u origin my-feature-branch
  ```
---
### 5. Membuat Pull Request dan Menggabungkan Perubahan

**Deskripsi**: Pada langkah ini, Anda akan belajar cara membuat pull request di GitHub. Pull request memungkinkan Anda untuk mendiskusikan dan meninjau perubahan sebelum menggabungkannya ke branch utama.

**Langkah**:
- **Buat Pull Request**:
  1. Kunjungi repository Anda di GitHub.
  2. Anda akan melihat notifikasi tentang branch yang baru Anda dorong dengan opsi untuk membuat pull request. Klik pada "Compare & pull request."
  3. Isi detail yang diperlukan dan klik "Create pull request."

- **Tinjau Kode**:
  Tinjau perubahan dalam tab pull request. Anda dapat melihat perbedaan file dan menambahkan komentar jika diperlukan.

- **Gabungkan Perubahan**:
  Setelah disetujui, klik pada "Merge pull request." Ini akan menggabungkan perubahan dari `my-feature-branch` ke branch `master`. Anda juga bisa menghapus branch jika tidak diperlukan lagi.
