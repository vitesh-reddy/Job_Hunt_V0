import React, { useState, useEffect, useRef } from 'react';
import { Search, Calendar, Plus, MoreVertical, Bell, User, X, ArrowLeft, MapPin, Clock, DollarSign, Users, Building, Briefcase } from 'lucide-react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import JobDetailsPage from './JobDetailsPage';
import JobCard from './JobCard';
import AddJobModal from './AddJobModal';
import TutorialModal from './TutorialModal';
import AddColumnModal from './AddColumnModal';
import deleteIcon from '../../assets/image.png';
import DropTarget from './DropTarget';
import userJobApi from '../../services/jobApi';


const JobHuntDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [appliedFrom, setAppliedFrom] = useState('');
  const [appliedUntil, setAppliedUntil] = useState('');
  const [jobType, setJobType] = useState('');
  const [status, setStatus] = useState('');
  const [showAddJobModal, setShowAddJobModal] = useState(false);
  const [showAddColumnModal, setShowAddColumnModal] = useState(false);
  const [deleteColumn, setDeleteColumn] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [columnOrder, setColumnOrder] = useState(['saved', 'applied', 'interview', 'offer', 'accepted', 'rejected']);
  const [showTutorial, setShowTutorial] = useState(false);
  const [scrollToReminder, setScrollToReminder] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [tutorialDropdownOpen, setTutorialDropdownOpen] = useState(false);
  const [tutorialJobDetails, setTutorialJobDetails] = useState(false);


  const sampleTutorialJob = {
    id: 999,
    role: 'Senior Software Engineer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    jobType: 'full-time',
    status: 'interview',
    appliedDate: '2024-07-15',
    salary: '$150,000 - $200,000',
    description: 'Join our innovative team to build cutting-edge software solutions that impact millions of users worldwide. This is a sample job card used for tutorial purposes.',
    requirements: [
      '5+ years of software engineering experience',
      'Proficiency in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS/GCP)',
      'Strong problem-solving and communication skills'
    ]
  };

  // Tutorial control functions
  const handleTutorialDropdown = (shouldOpen) => {
    setTutorialDropdownOpen(shouldOpen);
    // Also control the regular dropdown to prevent conflicts
    if (shouldOpen) {
      setDropdownOpen(true);
    } else {
      setDropdownOpen(false);
    }
  };

  const handleTutorialJobDetails = () => {
    setTutorialJobDetails(true);
    setSelectedJob(sampleTutorialJob);
  };

  const handleCloseTutorialJobDetails = () => {
    setTutorialJobDetails(false);
    if (tutorialJobDetails) {
      setSelectedJob(null);
    }
  };

  // Update your TutorialModal component call to include the new props:
  <TutorialModal
    show={showTutorial}
    onClose={() => {
      setShowTutorial(false);
      setTutorialDropdownOpen(false);
      setTutorialJobDetails(false);
      setSelectedJob(null);
      setDropdownOpen(false);
    }}
    onOpenDropdown={handleTutorialDropdown}
    onShowJobDetails={handleTutorialJobDetails}
    onCloseJobDetails={handleCloseTutorialJobDetails}
  />

  // Update your dropdown rendering to use tutorialDropdownOpen OR dropdownOpen:
  {
    (dropdownOpen || tutorialDropdownOpen) && (
      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" id='BulkImportbutton'>Bulk Import</a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" id='TemplateExcelbutton'>Template Excel</a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" id='DownloadasExcelbutton'>Download as Excel</a>
        <button
          onClick={() => {
            setShowAddColumnModal(true);
            setDropdownOpen(false);
            setTutorialDropdownOpen(false);
          }}
          id='AddColumnbutton'
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Add Column
        </button>
        <button
          onClick={() => {
            setShowTutorial(true);
            setDropdownOpen(false);
            setTutorialDropdownOpen(false);
          }}
          id='tutorial-dropdown'
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Show Tutorial
        </button>
      </div>
    )
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const [jobs, setJobs] = useState([


  ]);
  useEffect(() => { fetchJobs() }, []);
  const fetchJobs = async () => {
    try {
      const response = await userJobApi.getAllJobs();
      console.log('Fetched jobs:', response);
      if (response.success) {
        setJobs(response.data);
      } else {
        console.error('Failed to fetch jobs:', response.message);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const [dynamicStatusColors, setDynamicStatusColors] = useState({
    saved: 'bg-blue-200',
    applied: 'bg-yellow-200',
    interview: 'bg-orange-200',
    offer: 'bg-green-200',
    accepted: 'bg-pink-200',
    rejected: 'bg-red-200'
  });
  const defaultColumns = ["saved", "applied", "interview", "accepted", "offer", "rejected"];


  // Show job details page if a job is selected


  const filteredJobs = jobs.filter(job => {
    const matchesSearchTerm = job.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesAppliedFrom = appliedFrom ? new Date(job.appliedDate) >= new Date(appliedFrom) : true;
    const matchesAppliedUntil = appliedUntil ? new Date(job.appliedDate) <= new Date(appliedUntil) : true;
    const matchesJobType = jobType ? job.jobType === jobType : true;
    const matchesStatus = status ? job.status === status : true;

    return matchesSearchTerm && matchesAppliedFrom && matchesAppliedUntil && matchesJobType && matchesStatus;
  });


  const jobCounts = filteredJobs.reduce((acc, job) => {
    acc[job.status] = (acc[job.status] || 0) + 1;
    return acc;
  }, columnOrder.reduce((acc, statusKey) => ({ ...acc, [statusKey]: 0 }), { rejected: 0 }));

  const clearFilters = () => {
    setSearchTerm('');
    setAppliedFrom('');
    setAppliedUntil('');
    setJobType('');
    setStatus('');
  };

  const handleAddJob = async (newJob) => {
    const jobData = {
      role: newJob.role,
      companyName: newJob.companyName,
      jobURL: newJob.jobURL,
      location: newJob.location,
      salary: newJob.salary,
      jobType: newJob.jobType,
      description: newJob.description,
      status: newJob.status || 'saved', // Default to 'saved' if no status provided

    };

    console.log(newJob)
    const res = await userJobApi.addJob(jobData);
    console.log('Job added successfully:', res);


    if (res.success) {
      setJobs((prevJobs) => [...prevJobs, res.data]);

    }
    else {
      console.error('Failed to add job:', res.message);

    }


  };

  const moveJob = async (id, newStatus) => {
    const res = await userJobApi.updateJobStatus(id, newStatus);

    if (res.success) {
      setJobs((prevJobs) =>
        prevJobs.map((job) =>
          job._id === id ? { ...job, currentStatus: newStatus } : job
        )
      );

    }
    else {
      console.error('Failed to add job:', res.message);

    }

  };

  const handleSetReminder = (jobId) => {
    const jobToView = jobs.find(j => j.id === jobId);
    if (jobToView) {
      setSelectedJob(jobToView);
      setScrollToReminder(true);
    }
  };

  const handleAcceptOffer = async (jobId) => {
    await moveJob(jobId, 'accepted');
  };

  const handleRejectOffer = (jobId) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobId ? { ...job, status: 'rejected' } : job
      )
    );
  };

  const handleAddColumn = (newColumnName) => {
    setColumnOrder(prevOrder => [...prevOrder, newColumnName]);
    setDynamicStatusColors(prevColors => ({
      ...prevColors,
      [newColumnName]: 'bg-gray-200' // Default color for new columns
    }));
  };
  const handleDeleteColumn = (columnNameToDelete) => {
    setColumnOrder(prevOrder =>
      prevOrder.filter(column => column !== columnNameToDelete)
    );

    setDynamicStatusColors(prevColors => {
      const updatedColors = { ...prevColors };
      delete updatedColors[columnNameToDelete];
      return updatedColors;
    });
  };


  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  return (
    <div className="  bg-gray-50" style={{ height: '100%', overflowY: 'hidden' }}>


      {/* Main Content */}
      <div className="w-full p-6">
        <div className="bg-white rounded-lg shadow-sm border border-black">
          {/* Header Section */}
          {/* <div className="border border-black bg-white rounded-lg shadow-sm"> */}

          {/* Header Section */}
          <div className="border-b border-black px-4 py-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">My Job Search</h2>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowAddJobModal(true)}
                  className="bg-black text-white px-4 py-2 rounded-sm flex items-center space-x-2"
                  id="addJobButton"
                >
                  <Plus className="w-4 h-4" />
                  <span >Add Job</span>
                </button>
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="p-2 text-black border border-black rounded-md hover:bg-gray-50 cursor-pointer"
                  >
                    <MoreVertical className="w-5 h-5" />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" id='BulkImportbutton'>Bulk Import</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" id='TemplateExcelbutton'>Template Excel</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" id='DownloadasExcelbutton'>Download as Excel</a>
                      <button
                        onClick={() => {
                          setShowAddColumnModal(true);
                          setDropdownOpen(false);
                        }} id='AddColumnbutton'
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Add Column
                      </button>
                      <button
                        onClick={() => {
                          setShowTutorial(true);
                          setDropdownOpen(false);
                        }} id='tutorial-dropdown'
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Show Tutorial
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Filters Section */}
          <div className="px-4 py-4">
            <div className="flex flex-wrap items-center gap-10 w-full" id="search-filters">

              {/* Search Field */}
              <div className="relative flex items-center flex-grow min-w-[220px] max-w-[350px]   border border-gray-300 rounded-full">
                <input
                  type="text"
                  placeholder="Search for Role / Company"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-4 py-2 text-sm rounded-full focus:outline-none"
                />
                <div className="custom-pink2 p-2 rounded-full mr-2 cursor-pointer">
                  <Search className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Applied From */}
              <div className="relative w-[250px] ">
                <input
                  type="date"
                  value={appliedFrom}
                  onChange={(e) => setAppliedFrom(e.target.value)}
                  className={`pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none appearance-none ${!appliedFrom ? 'text-transparent' : 'text-black'}`}
                />
                {!appliedFrom && (
                  <span className="absolute left-10 top-1/2 transform -translate-y-1/2 text-black text-sm pointer-events-none">
                    Applied From
                  </span>
                )}
              </div>

              {/* Arrow */}
              <span className="text-4xl text-black">→</span>

              {/* Applied Until */}
              <div className="relative w-[250px]">
                <input
                  type="date"
                  value={appliedUntil}
                  onChange={(e) => setAppliedUntil(e.target.value)}
                  className={`pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none appearance-none ${!appliedUntil ? 'text-transparent' : 'text-black'}`}
                />
                {!appliedUntil && (
                  <span className="absolute left-10 top-1/2 transform -translate-y-1/2 text-black text-sm pointer-events-none">
                    Applied Until
                  </span>
                )}
              </div>

              {/* Job Type */}
              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none relative w-[200px]"
              >
                <option value="">Job Type</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>

              {/* Status */}
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none relative w-[200px]"
              >
                <option value="">Status</option>
                {columnOrder.map(col => (
                  <option key={col} value={col}>
                    {col.charAt(0).toUpperCase() + col.slice(1)}
                  </option>
                ))}
              </select>

              {/* Clear All */}
              <button
                onClick={clearFilters}
                className="flex items-center px-4 py-2 border border-black rounded-md text-sm text-black hover:bg-gray-50 "
              >
                <span className="mr-2">☰</span> Clear All
              </button>
            </div>
          </div>

          {/* </div> */}


          {/* Job Status Columns */}
          <div className="p-6" id='DivBox'>
            <div className="flex flex-nowrap overflow-x-auto gap-4 pb-4 " >
              {columnOrder.map((statusKey, index) => (
                <div key={statusKey} className="flex flex-col min-w-[280px]" id={index == 0 ? 'JobStatusColumn' : ""} >
                  <div className="flex items-center justify-between mb-4" >
                    <h3 className="text-sm font-medium text-gray-900 capitalize">
                      {statusKey} ({jobCounts[statusKey] || 0})
                    </h3>
                    {!defaultColumns.includes(statusKey) && (
                      <button onClick={() => handleDeleteColumn(statusKey)}>
                        <img src={deleteIcon} alt="Delete" className="w-4 h-4" />
                      </button>)}
                  </div>
                  <DropTarget status={statusKey} onDropJob={moveJob} statusColor={dynamicStatusColors[statusKey]}>
                    {jobs
                      .filter(job => job.currentStatus.toLowerCase() === statusKey)
                      .map(job => (
                        <JobCard
                          key={job._id}
                          job={job}
                          index={job._id}
                          getStatusColor={(status) => dynamicStatusColors[status]}
                          onSetReminder={handleSetReminder}
                          onAcceptOffer={handleAcceptOffer}
                          onRejectOffer={handleRejectOffer}
                          onJobClick={handleJobClick}
                        />
                      ))}
                  </DropTarget>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setShowAddColumnModal(true)}
        className="fixed bottom-35 right-20   w-12 h-12 custom-pink text-white rounded-full shadow-lg  flex items-center justify-center" id="addColumn"
      >
        <Plus className="w-6 h-6" />
      </button>

      <AddJobModal
        show={showAddJobModal}
        onClose={() => setShowAddJobModal(false)}
        onAddJob={handleAddJob}
      />
      <AddColumnModal
        show={showAddColumnModal}
        onClose={() => setShowAddColumnModal(false)}
        onAddColumn={handleAddColumn}
        onDeleteColumn={handleDeleteColumn}
      />
      <TutorialModal
        show={showTutorial}
        onClose={() => setShowTutorial(false)}
      />
      {selectedJob != null && (
        <>
          <div
            className="fixed inset-0 z-40" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            onClick={() => setSelectedJob(null)}
          ></div>
          <JobDetailsPage
            job={selectedJob}
            onBack={() => setSelectedJob(null)}
            scrollToReminder={scrollToReminder}
          />
        </>
      )}

    </div>
  );
};


const JobHuntDashboardWrapper = () => (
  <DndProvider backend={HTML5Backend}>
    <JobHuntDashboard />
  </DndProvider>
);

export default JobHuntDashboardWrapper;