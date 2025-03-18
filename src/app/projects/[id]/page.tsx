// app/projects/[id]/page.tsx

import { projects } from '@/data/projects'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

interface PageProps {
  params: {
    id: string
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const project = await findProject(params.id)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className=" bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">{project.name}</h1>
            <button className="flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-md hover:bg-navy transition-colors">
              <span>Sync</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className=" bg-white">
        <div className="container mx-auto px-4">
          <nav className="flex gap-8">
            <a 
              href="#" 
              className="px-1 py-4 border-b-2 border-navy text-navy font-medium"
            >
              Details
            </a>
            <a 
              href="#" 
              className="px-1 py-4 text-gray-500 hover:text-gray-700 font-medium"
            >
              Contractors
            </a>
            <a 
              href="#" 
              className="px-1 py-4 text-gray-500 hover:text-gray-700 font-medium"
            >
              Quotations
            </a>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Logo and Details Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex gap-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src={project.logo || '/placeholder-logo.png'}
                alt="Company Logo"
                width={150}
                height={150}
                className="rounded-full border"
              />
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-grow">
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Start date</h3>
                <p className="font-medium text-gray-900">{project.startDate}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-1">End date</h3>
                <p className="font-medium text-gray-900">{project.endDate}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Venue name</h3>
                <p className="font-medium text-gray-900">{project.details.venueName}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Venue city</h3>
                <p className="font-medium text-gray-900">{project.details.venueCity}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Venue country</h3>
                <p className="font-medium text-gray-900">{project.details.venueCountry}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Venue hall number</h3>
                <p className="font-medium text-gray-900">{project.details.venueHallNumber}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Stand number</h3>
                <p className="font-medium text-gray-900">{project.details.venueStandNumber}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Total sq. mtr</h3>
                <p className="font-medium text-gray-900">{project.details.totalSqMtr}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Project Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                <Image
                  src={image}
                  alt={`Project image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

async function findProject(id: string) {
  return projects.find((p) => p.id === id)
}

export function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-600"></div>
    </div>
  )
}