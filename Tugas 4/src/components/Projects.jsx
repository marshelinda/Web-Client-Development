import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    name: 'Fundamental Calculations',
    description: 'Implementasi fungsi-fungsi perhitungan umum menggunakan JavaScript dan TypeScript, termasuk geometri, tanggal, dan manipulasi string.',
    technologies: ['JavaScript', 'TypeScript'],
    sourceCode: 'https://github.com/marshelinda/Web-Client-Development/tree/main/Tugas%201', // Ganti dengan link kode sumber jika ada
  },
  {
    name: 'JavaScript and TypeScript Utilities',
    description: 'Proyek ini menyediakan berbagai utilitas yang dibangun dengan JavaScript dan TypeScript untuk konversi, validasi, dan manipulasi data string.',
    technologies: ['JavaScript', 'TypeScript'],
    sourceCode: 'https://github.com/marshelinda/Web-Client-Development/tree/main/Tugas2',
  },
  {
    name: 'WorkoutAJa: Platform Workout',
    description: 'Platform website workout yang memberikan penawaran rutinitas latihan yang dipersonalisasi dengan tujuan meningkatkan kebugaran dan kesehatan.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/marshelinda/Web-Client-Development/tree/main/Tugas%203',
  },
  {
    name: 'Fundamental C++ Classes',
    description: 'Proyek ini mendemonstrasikan penggunaan C++ dalam membangun kelas-kelas yang mewakili entitas dan fungsionalitas dasar.',
    technologies: ['C++'],
    sourceCode: 'https://github.com/marshelinda/Object-Oriented-Programming/tree/main/Task%201',
  },
];

function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-100 h-screen flex flex-col"> {/* Added h-screen and flex-col */}
      <div className="container mx-auto px-6 flex-grow"> {/* Added flex-grow */}
        <h2 className="text-3xl font-bold text-black mb-6 text-center">Projects</h2>
        <div className="flex flex-row space-x-8 overflow-x-auto pb-4">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;