import React from 'react';

function Education() {
  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">Education</h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white rounded-md shadow-md p-6">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Universitas Cakrawala - Jakarta, Indonesia</h3>
            <p className="text-gray-600 mb-1">Jurusan Sistem Teknologi dan Informasi</p>
            <p className="text-gray-500 text-sm">Mar 2025 - Mar 2029</p>
          </div>
          <div className="bg-white rounded-md shadow-md p-6">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Institut Pertanian Bogor - Bogor, Indonesia</h3>
            <p className="text-gray-600 mb-1">Sekolah Vokasi, Program Studi Komunikasi Media dan Digital</p>
            <p className="text-gray-600 mb-1">IPK: 3.73/4.00</p>
            <p className="text-gray-500 text-sm">Jul 2022 - Des 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;