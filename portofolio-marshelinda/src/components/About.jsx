import React from 'react';

function About() {
  return (
    <section id="about" className="py-16 h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-black mb-8">About</h2> 
        <div className="md:w-2/3 mx-auto text-justify"> 
          <p className="text-black-700 mb-4">
            Saya adalah mahasiswa Sistem dan Teknologi Informasi dengan antusiasme tinggi terhadap dunia teknologi. Saat ini, fokus utama saya adalah mengembangkan keterampilan teknis di bidang pemrograman, pengalaman pengguna (UX), serta pemahaman mendasar tentang konsep sistem informasi. Saya bersemangat untuk mengaplikasikan pengetahuan ini dalam proyek-proyek nyata.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;