import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden flex flex-col justify-between items-center w-80 md:w-96">
      <div className="p-4 text-center">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">{project.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{project.description}</p>
        <div className="flex space-x-2 justify-center">
          {project.technologies && project.technologies.map((tech, index) => (
            <span key={index} className="inline-block bg-black rounded-full px-2 py-1 text-xs font-semibold text-white">{tech}</span>
          ))}
        </div>
      </div>
      <div className="mt-auto w-full flex flex-col items-center">
        {project.sourceCode && (
          <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 w-full text-center">Kode Sumber</a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;