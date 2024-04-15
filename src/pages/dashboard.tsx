import Head from "next/head";
import useSWR, { mutate } from "swr";
import JobsEmpty from "../components/dashboard/jobs-empty";
import JobsSkeleton from "../components/dashboard/jobs-skeleton";
import JobsTable from "../components/dashboard/jobs-table";
import Shell from "../components/dashboard/shell";
import { useAuth } from "../libraries/firebase/auth";

const DashboardPage = () => {
  const auth = useAuth();
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR("/api/jobs", fetcher);
  mutate("/api/jobs");

  // console.log('Dashboard: ', data)

  if (!data) {
    return (
      <>
        <Head>
          <title>Dashboard - Remote Jamstack</title>
        </Head>

        <Shell>
          <JobsSkeleton />
        </Shell>
      </>
    );
  }

  // if (!auth.user) {
  //   return (
  //     <>
  //       <Head>
  //         <title>Unauthorized - Remote Jamstack</title>
  //       </Head>

  //       <Shell>
  //         <div className='p-6 text-gray-800 bg-white rounded-md shadow-md'>
  //           <div className='p-10 font-medium text-center'>
  //             We are still under construction behind the scenes. Please{' '}
  //               <Link href='#subscribe'>
  //                <a className='text-red-500 cursor-pointer'>subscribe</a></Link>{' '}
  //             to be notified when we launch.
  //           </div>
  //         </div>
  //       </Shell>
  //     </>
  //   )
  // }

  return (
    <>
      <Head>
        <title>Dashboard - Remote Jamstack</title>
      </Head>

      <Shell>
        {data.jobs.length ? <JobsTable jobs={data.jobs} /> : <JobsEmpty />}
      </Shell>
    </>
  );
};

export default DashboardPage;
