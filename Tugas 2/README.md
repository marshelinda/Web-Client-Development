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
