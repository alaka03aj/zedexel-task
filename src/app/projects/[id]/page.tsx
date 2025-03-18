// app/[id]/page.tsx

import { projects } from '@/data/projects'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">{project.name}</h1>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded">
            Sync
          </button>
        </div>
      </div>

      <div className="grid grid-rows-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Image
              src={project.logo || '/placeholder-logo.png'}
              alt="Company Logo"
              width={100}
              height={100}
              className="rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold">Project Details</h2>
              <p className="text-gray-600">Status: {project.status}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium">Start date</h3>
              <p>{project.startDate}</p>
            </div>
            <div>
              <h3 className="font-medium">End date</h3>
              <p>{project.endDate}</p>
            </div>
            <div>
              <h3 className="font-medium">Venue name</h3>
              <p>{project.details.venueName}</p>
            </div>
            <div>
              <h3 className="font-medium">Venue city</h3>
              <p>{project.details.venueCity}</p>
            </div>
            <div>
              <h3 className="font-medium">Venue country</h3>
              <p>{project.details.venueCountry}</p>
            </div>
            <div>
              <h3 className="font-medium">Venue hall number</h3>
              <p>{project.details.venueHallNumber}</p>
            </div>
            <div>
              <h3 className="font-medium">Stand number</h3>
              <p>{project.details.venueStandNumber}</p>
            </div>
            <div>
              <h3 className="font-medium">Total sq. mtr</h3>
              <p>{project.details.totalSqMtr}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Project Images</h2>
          <div className="grid grid-cols-2 gap-4">
            {project.images.map((image, index) => (
              <div key={index} className="relative aspect-video">
                <Image
                  src={image}
                  alt={`Project image ${index + 1}`}
                  fill
                  className="object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}