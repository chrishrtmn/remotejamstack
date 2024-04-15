import Link from "next/link";

const JobsEmpty = () => (
  <div className="p-6 text-gray-800 bg-white rounded-md shadow-md">
    <div className="border-2 border-gray-200 border-dashed rounded-md">
      <div className="p-10 text-center">
        <h3 className="block text-xl font-bold text-gray-800">
          You haven't posted any jobs.
        </h3>
        <p className="my-5 text-gray-800">Let's get started.</p>
        <Link href="/jobs/create">
          <a className="inline-block px-4 py-2 font-medium text-white bg-red-500 rounded-md hover:bg-red-600">
            Submit Your First Job
          </a>
        </Link>
      </div>
    </div>
  </div>
);

export default JobsEmpty;
