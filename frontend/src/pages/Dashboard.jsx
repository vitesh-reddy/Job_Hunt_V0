import React, { useState } from 'react';
import ResumeEditor from './ResumeEditor';
import TemplateEditor from './TemplateEditor';

const Dashboard = () => {
  const [resumes, setResumes] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [showResumeEditor, setShowResumeEditor] = useState(false);
  const [showTemplateEditor, setShowTemplateEditor] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState({});

  const sampleResumes = [
    { id: 1, title: "New Resume 25/6/2025", created: "3/4/16", modified: "9/23/16", source: "Scratch" },
    { id: 2, title: "New Resume 25/6/2025", created: "4/4/18", modified: "6/9/14", source: "LinkedIn" },
    { id: 3, title: "New Resume 25/6/2025", created: "8/15/17", modified: "4/4/18", source: "Resume" },
    { id: 4, title: "New Resume 26/6/2025", created: "3/4/16", modified: "9/23/16", source: "Scratch" },
  ];

  const handleCreateNew = () => {
    setShowOptions(true);
  };

  const handleBlankTemplate = () => {
    setShowOptions(false);
    setShowResumeEditor(true);
  };

  const handleEditTemplate = () => {
    setShowTemplateEditor(true);
  };

  const handleSaveTemplate = (newTemplate) => {
    setCurrentTemplate(newTemplate);
    setShowTemplateEditor(false);
    const newResume = {
      id: Date.now(),
      title: `New Resume ${new Date().toLocaleDateString()}`,
      created: new Date().toLocaleDateString(),
      modified: new Date().toLocaleDateString(),
      source: "Blank Template"
    };
    setResumes([...resumes, newResume]);
  };

  const handleCloseResumeEditor = () => {
    setShowResumeEditor(false);
  };

  const handleCloseTemplateEditor = () => {
    setShowTemplateEditor(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {!showResumeEditor && !showTemplateEditor && (
        <>
          <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-pink-600">JobHunt</span>
              </div>
              <ul className="hidden md:flex space-x-6 text-gray-700">
                <li>Home</li>
                <li>Find a Job</li>
                <li>Find Recruiters</li>
                <li className="text-pink-600 font-semibold">CV Builder</li>
                <li>Job Tracker</li>
              </ul>
              <div className="flex items-center space-x-4">
                <button>
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405M19 13V8a7 7 0 10-14 0v5m14 0H5" />
                  </svg>
                </button>
                <div className="flex items-center space-x-2">
                  <img src="https://via.placeholder.com/30" alt="profile" className="w-8 h-8 rounded-full" />
                  <span className="text-sm">Hey</span>
                  <span className="font-semibold">Jhon</span>
                </div>
              </div>
            </div>
          </nav>

          <div className="max-w-5xl mx-auto mt-8 bg-white rounded shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">All Resumes</h2>
              <div className="flex space-x-2">
                <button className="bg-gray-200 p-2 rounded">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z" />
                  </svg>
                </button>
                <button onClick={handleCreateNew} className="bg-black text-white px-4 py-2 rounded">
                  + Create New Resume
                </button>
              </div>
            </div>

            {resumes.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="No Resume"
                  className="w-24 h-24 mb-4"
                />
                <h3 className="text-lg font-bold">No Resumes Yet</h3>
                <p className="text-gray-500 text-sm text-center max-w-xs">
                  Get started on crafting your first resume to kickstart your career journey.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-5 py-2 border-b text-gray-500 text-sm">
                  <div className="col-span-2 flex items-center space-x-2">
                    <input type="checkbox" />
                    <span>Resume Title</span>
                  </div>
                  <span>Created</span>
                  <span>Modified</span>
                  <span>Source</span>
                </div>

                {sampleResumes.map(resume => (
                  <div key={resume.id} className="grid grid-cols-5 items-center py-4 border-b hover:bg-gray-50">
                    <div className="col-span-2 flex items-center space-x-2">
                      <input type="checkbox" />
                      <span className="text-pink-600">{resume.title}</span>
                    </div>
                    <span>{resume.created}</span>
                    <span>{resume.modified}</span>
                    <span>{resume.source}</span>

                    <div className="col-span-5 flex justify-end space-x-2 mt-2">
                      <button className="bg-blue-100 text-blue-700 px-2 py-1 rounded">View</button>
                      <button className="bg-red-100 text-red-700 px-2 py-1 rounded">Delete</button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {showOptions && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
              <div className="bg-white rounded shadow-lg p-6 w-80 space-y-4 relative">
                <button onClick={() => setShowOptions(false)} className="absolute top-2 right-2 text-gray-500">&times;</button>
                <h3 className="text-lg font-bold">Options To Create A New Resume</h3>
                <p className="text-sm text-gray-500">Go with the option that fits best for you</p>
                <button className="w-full border rounded p-2 text-left">Browse Resume</button>
                <button className="w-full border rounded p-2 text-left">Build Using LinkedIn</button>
                <button 
                  onClick={handleBlankTemplate}
                  className="w-full border rounded p-2 text-left"
                >
                  Use A Blank Template
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {showResumeEditor && (
        <ResumeEditor 
          onClose={handleCloseResumeEditor}
          onEditTemplate={handleEditTemplate}
        />
      )}

      {showTemplateEditor && (
        <TemplateEditor
          isOpen={showTemplateEditor}
          onClose={handleCloseTemplateEditor}
          initialTemplate={currentTemplate}
          onSave={handleSaveTemplate}
        />
      )}
    </div>
  );
};

export default Dashboard;
