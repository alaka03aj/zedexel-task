// app/projects/[id]/page.tsx
'use client';

import { useParams, useRouter } from 'next/navigation';
import { projects } from '@/data/projects';

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="p-6">
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
          Project not found
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <button
        onClick={() => router.back()}
        className="mb-6 text-blue-600 hover:text-blue-800 flex items-center"
      >
        <svg 
          className="w-4 h-4 mr-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10 19l-7-7m0 0l7-7m-7 7h18" 
          />
        </svg>
        Back to Projects
      </button>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">{project.name}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-sm font-medium text-gray-500">Start Date</h2>
            <p className="mt-1 text-lg">{project.startDate}</p>
          </div>
          
          <div>
            <h2 className="text-sm font-medium text-gray-500">End Date</h2>
            <p className="mt-1 text-lg">{project.endDate}</p>
          </div>
          
          <div>
            <h2 className="text-sm font-medium text-gray-500">Status</h2>
            <p className="mt-1 text-lg">{project.status}</p>
          </div>
          
          <div>
            <h2 className="text-sm font-medium text-gray-500">Venue</h2>
            <p className="mt-1 text-lg">{project.venue}</p>
          </div>
        </div>
      </div>
    </div>
  );
}