### 1. Rectangle Area (JavaScript)

**Deskripsi Fungsi:**
Fungsi `calculateRectangleArea` menghitung luas persegi panjang berdasarkan panjang dan lebar yang diberikan.

- **Input:**
  - `length` (number): Panjang persegi panjang.
  - `width` (number): Lebar persegi panjang.
  
- **Output:**
  - (number): Luas persegi panjang yang dihitung dengan rumus `length * width`.

**Contoh Penggunaan:**
```javascript
const length = 5; // Panjang
const width = 3;  // Lebar
const rectangleArea = calculateRectangleArea(length, width); // Output: 15
```

---

### 1.1. Rectangle Area (TypeScript)

**Deskripsi Fungsi:**
Fungsi `areaOfRectangle` menghitung luas persegi panjang, mirip dengan fungsi di JavaScript.

- **Input:**
  - `length` (number): Panjang persegi panjang.
  - `width` (number): Lebar persegi panjang.

- **Output:**
  - (number): Luas persegi panjang.

**Contoh Penggunaan:**
```typescript
const Length = 5; // Panjang
const Width = 3;  // Lebar
console.log("Area of rectangle:", areaOfRectangle(Length, Width)); // Output: 15
```

---

### 2. Circle Properties (JavaScript)

**Deskripsi Fungsi:**
Fungsi `calculateCircleProperties` menghitung berbagai properti lingkaran berdasarkan radius yang diberikan.

- **Input:**
  - `radius` (number): Radius lingkaran.

- **Output:**
  - (object): Objek yang berisi diameter, keliling, dan luas lingkaran.
    ```javascript
    {
      diameter: number,
      circumference: number,
      area: number
    }
    ```

**Contoh Penggunaan:**
```javascript
const radius = 5; // Radius
console.log(`Diameter: ${circleProps.diameter}`); // Output: 10
```

---

### 2.1. Circle Properties (TypeScript)

**Deskripsi Fungsi:**
Fungsi `circleProperties` menghitung diameter, keliling, dan luas lingkaran berdasarkan radius.

- **Input:**
  - `radius` (number): Radius lingkaran.

- **Output:**
  - (object): Objek yang berisi diameter, keliling, dan luas lingkaran.

**Contoh Penggunaan:**
```typescript
const radius = 5; // Radius
console.log("Diameter:", properties.diameter); // Output: 10
```

---

### 3. Triangle Angles (JavaScript)

**Deskripsi Fungsi:**
Fungsi `calculateTriangleThirdAngle` menghitung sudut ketiga dari sebuah segitiga berdasarkan dua sudut yang diberikan.

- **Input:**
  - `angle1` (number): Sudut pertama.
  - `angle2` (number): Sudut kedua.

- **Output:**
  - (number): Sudut ketiga, dihitung dengan rumus `180 - (angle1 + angle2)`.

**Contoh Penggunaan:**
```javascript
const a = 80; // Sudut pertama
const b = 65; // Sudut kedua
console.log(`Third angle of the triangle: ${angleC}`); // Output: 35
```

---

### 3.1. Triangle Angles (TypeScript)

**Deskripsi Fungsi:**
Fungsi `findThirdAngle` menghitung sudut ketiga dari segitiga berdasarkan dua sudut yang diberikan.

- **Input:**
  - `angleA` (number): Sudut pertama.
  - `angleB` (number): Sudut kedua.

- **Output:**
  - (number): Sudut ketiga.

**Contoh Penggunaan:**
```typescript
const angleA = 80; // Sudut pertama
const angleB = 65; // Sudut kedua
console.log(`Given angles are ${angleA}° and ${angleB}°. The third angle is ${angleC}°.`); // Output: 35
```

---

### 4. Date Difference (JavaScript)

**Deskripsi Fungsi:**
Fungsi `getDateDifference` menghitung selisih hari antara dua tanggal yang diberikan.

- **Input:**
  - `date1` (string): Tanggal pertama dalam format string (`YYYY-MM-DD`).
  - `date2` (string): Tanggal kedua dalam format string (`YYYY-MM-DD`).

- **Output:**
  - (number): Selisih hari antara kedua tanggal.

**Contoh Penggunaan:**
```javascript
const date1 = '2024-03-19'; // Tanggal pertama
const date2 = '2024-03-21'; // Tanggal kedua
console.log(`Difference between dates: ${dateDifference}`); // Output: 2
```

---

### 4.1. Date Difference (TypeScript)

**Deskripsi Fungsi:**
Fungsi `calculateDateDifference` menghitung selisih hari antara dua tanggal.

- **Input:**
  - `date1` (string): Tanggal pertama dalam format string.
  - `date2` (string): Tanggal kedua dalam format string.

- **Output:**
  - (number): Selisih hari.

**Contoh Penggunaan:**
```typescript
const date1 = '2024-03-19'; // Tanggal pertama
const date2 = '2024-03-21'; // Tanggal kedua
console.log(`The difference between ${date1} and ${date2} is ${dayDifference} days.`); // Output: 2
```

---

### 5. Name Initials (JavaScript)

**Deskripsi Fungsi:**
Fungsi `printInitials` menghasilkan inisial dari nama lengkap berdasarkan bagian-bagian nama yang diberikan.

- **Input:**
  - `name` (string): Nama lengkap yang ingin diekstraksi inisialnya.

- **Output:**
  - (string): Gabungan inisial dari nama lengkap, dalam huruf kapital.

**Contoh Penggunaan:**
```javascript
const fullName = 'Marshelinda Rukmana'; // Nama lengkap
console.log(`Initials: ${initials}`); // Output: MR
```

---

### 5.1. Name Initials (TypeScript)

**Deskripsi Fungsi:**
Fungsi `getInitials` menghasilkan inisial dari nama lengkap yang diberikan.

- **Input:**
  - `fullName` (string): Nama lengkap yang ingin diekstraksi inisialnya.

- **Output:**
  - (string): Gabungan inisial dari nama lengkap, dalam huruf kapital.

**Contoh Penggunaan:**
```typescript
const fullName = "Marshelinda Rukmana"; // Nama lengkap
console.log(initials); // Output: MR
```