import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

interface Job {
  title: string;
  location: string;
  description: string;
  link: string;
}

async function getJobs(): Promise<Job[]> {
  const filePath = path.join(process.cwd(), 'src/data', 'jobs.yaml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const jobs = yaml.load(fileContents) as Job[];
  return jobs;
}

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
      <div className="px-10 py-10 bg-white text-gray-900 font-sans ">
        <h2 className="text-4xl font-bold mb-8">Open Roles</h2>
        <p className="text-lg text-gray-700 mb-6">
            Please include a resume and work samples in your application. Fractional arrangements are available for all roles. Compensation is purely equity-based 0.3-1% depending on the role and experience.
        </p>
        <div className="space-y-6">
          {jobs.map((job, idx) => (
            <div key={idx} className="border p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-2xl font-semibold">{job.title}</h3>
              <p className="text-gray-600 mb-2">{job.location}</p>
              <p className="mb-4 text-gray-700">{job.description}</p>
              <a
                href={job.link}
                className="text-blue-600 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply →
              </a>
            </div>
          ))}
        </div>
      </div>
  );
}
