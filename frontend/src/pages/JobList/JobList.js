import React from 'react';
import SearchBar from "../../components/SearchBar/SearchBar";
import NavBar from '../../components/NavBar/NavBar';
import UploadResume from "../../components/UploadResume/UploadResume";


function JobList() {
  const jobs = [
    { id: 1, title: 'Software Engineer', company: 'Tech Corp', location: 'San Francisco, CA' },
    { id: 2, title: 'Product Manager', company: 'Business Inc', location: 'New York, NY' },
    { id: 3, title: 'Data Scientist', company: 'DataWorks', location: 'Austin, TX' },
    { id: 4, title: 'Software Engineer', company: 'Tech Corp', location: 'San Francisco, CA' },
    { id: 5, title: 'Product Manager', company: 'Business Inc', location: 'New York, NY' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header>
          <NavBar />  
      </header>
      <main className="flex flex-col justify-center items-center flex-grow">
        <div className="w-2/4 pb-10 flex justify-center items-center">
          <SearchBar/>
          <UploadResume/>
        </div>
        <div className='justify-center items-center flex-grow w-3/4'>
          <ul>
              {jobs.map(job => (
                <li key={job.id} className="border-b border-gray-300 py-4">
                  <h2 className='text-white'>{job.title}</h2>
                  <p className='text-white'>{job.company} - {job.location}</p>
                </li>
              ))}
            </ul>
        </div>
      </main>
      
    </div>
  );
};

export default JobList;