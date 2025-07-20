import React, { useState } from 'react';
import { Download, Plus, Trash2, User, Briefcase, GraduationCap, Award, Phone, Mail, MapPin, Globe, Upload, ChevronLeft, ChevronRight } from 'lucide-react';
import resumeTemplates from '@constants/resumeTemplates';

const TemplateSelector = ({ templates, selectedTemplate, onSelect, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const templatesPerPage = 4;
  const totalPages = Math.ceil(templates.length / templatesPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const visibleTemplates = templates.slice(
    currentPage * templatesPerPage,
    (currentPage + 1) * templatesPerPage
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Select a Template</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {visibleTemplates.map((template) => (
                <div
                  key={template.id}
                  onClick={() => onSelect(template)}
                  className={`border-2 rounded-xl overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    selectedTemplate.id === template.id
                      ? 'border-blue-500 ring-2 ring-blue-200'
                      : 'border-gray-200'
                  }`}
                >
                  <div className="h-40" style={{ background: template.thumbnail }}></div>
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-gray-900">{template.name}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-600">Professional</span>
                      {selectedTemplate.id === template.id && (
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Selected</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {totalPages > 1 && (
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg ${
                    currentPage === 0
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <ChevronLeft size={16} />
                  Previous
                </button>
                <div className="text-sm text-gray-600">
                  Page {currentPage + 1} of {totalPages}
                </div>
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages - 1}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg ${
                    currentPage === totalPages - 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Next
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
          
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Confirm Selection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      website: '',
      summary: ''
    },
    experience: [
      {
        id: 1,
        position: '',
        company: '',
        startDate: '',
        endDate: '',
        current: false,
        description: ''
      }
    ],
    education: [
      {
        id: 1,
        degree: '',
        school: '',
        startDate: '',
        endDate: '',
        gpa: ''
      }
    ],
    skills: [''],
    achievements: ['']
  });

  const [activeTab, setActiveTab] = useState('personal');
  const [errors, setErrors] = useState({});
  const [selectedTemplate, setSelectedTemplate] = useState(resumeTemplates[0]);
  const [uploadStatus, setUploadStatus] = useState('');
  const [showTemplateSelector, setShowTemplateSelector] = useState(false);

  const validatePersonalInfo = () => {
    const newErrors = {};
    const { fullName, email, phone } = resumeData.personalInfo;
    if (!fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Invalid email format';
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const updatePersonalInfo = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const addExperience = () => {
    const newId = Math.max(...resumeData.experience.map(exp => exp.id), 0) + 1;
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, {
        id: newId,
        position: '',
        company: '',
        startDate: '',
        endDate: '',
        current: false,
        description: ''
      }]
    }));
  };

  const updateExperience = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const removeExperience = (id) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const addEducation = () => {
    const newId = Math.max(...resumeData.education.map(edu => edu.id), 0) + 1;
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, {
        id: newId,
        degree: '',
        school: '',
        startDate: '',
        endDate: '',
        gpa: ''
      }]
    }));
  };

  const updateEducation = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const removeEducation = (id) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const updateSkills = (index, value) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.map((skill, i) => i === index ? value : skill)
    }));
  };

  const addSkill = () => {
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, '']
    }));
  };

  const removeSkill = (index) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const updateAchievements = (index, value) => {
    setResumeData(prev => ({
      ...prev,
      achievements: prev.achievements.map((achievement, i) => i === index ? value : achievement)
    }));
  };

  const addAchievement = () => {
    setResumeData(prev => ({
      ...prev,
      achievements: [...prev.achievements, '']
    }));
  };

  const removeAchievement = (index) => {
    setResumeData(prev => ({
      ...prev,
      achievements: prev.achievements.filter((_, i) => i !== index)
    }));
  };

  const downloadPDF = () => {
    if (!validatePersonalInfo()) {
      setActiveTab('personal');
      return;
    }

    const resumeElement = document.getElementById('resume-preview');
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Resume - ${resumeData.personalInfo.fullName || 'Resume'}</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            @media print {
              body { margin: 0; padding: 20mm; }
              .no-print { display: none; }
              .resume-container { page-break-inside: avoid; }
            }
            body { 
              ${selectedTemplate.styles.container};
              line-height: 1.6;
            }
            .resume-container { max-width: 210mm; margin: 0 auto; }
          </style>
        </head>
        <body>
          <div class="resume-container">${resumeElement.innerHTML}</div>
        </body>
      </html>
    `);
    
    printWindow.document.close();
    printWindow.focus();
    
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 500);
  };

  const uploadToPortal = async () => {
    if (!validatePersonalInfo()) {
      setActiveTab('personal');
      setUploadStatus('Please complete required fields before uploading.');
      return;
    }

    setUploadStatus('Uploading...');
    
    try {
      // Mock API call - replace with actual portal API endpoint
      const response = await fetch('https://api.example.com/upload-resume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add authentication headers if needed
        },
        body: JSON.stringify({
          template: selectedTemplate.id,
          data: resumeData,
          userId: 'user123' // Replace with actual user ID
        })
      });

      if (response.ok) {
        setUploadStatus('Resume successfully uploaded to portal!');
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      setUploadStatus('Error uploading resume. Please try again.');
    }
  };

  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
        activeTab === id
          ? 'bg-blue-600 text-white shadow-md'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      <Icon size={16} />
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Professional Resume Builder</h1>
          <p className="text-gray-600 text-lg">Craft a polished resume with ease, choose from professional templates, and upload directly to the portal</p>
        </div>

        {/* Template Selection */}
        <div className="mb-8 bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Selected Template</h3>
          <div 
            onClick={() => setShowTemplateSelector(true)}
            className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="w-20 h-12 rounded-lg" style={{ background: selectedTemplate.thumbnail }}></div>
            <div>
              <h4 className="font-medium text-gray-900">{selectedTemplate.name}</h4>
              <p className="text-sm text-gray-600">Professional Design</p>
            </div>
            <div className="ml-auto text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {showTemplateSelector && (
          <TemplateSelector
            templates={resumeTemplates}
            selectedTemplate={selectedTemplate}
            onSelect={setSelectedTemplate}
            onClose={() => setShowTemplateSelector(false)}
          />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300">
            <div className="flex flex-wrap gap-3 mb-8">
              <TabButton id="personal" label="Personal Info" icon={User} />
              <TabButton id="experience" label="Work Experience" icon={Briefcase} />
              <TabButton id="education" label="Education" icon={GraduationCap} />
              <TabButton id="skills" label="Skills & Achievements" icon={Award} />
            </div>

            {/* Personal Information Tab */}
            {activeTab === 'personal' && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={resumeData.personalInfo.fullName}
                      onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
                      className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        errors.fullName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={resumeData.personalInfo.email}
                      onChange={(e) => updatePersonalInfo('email', e.target.value)}
                      className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={resumeData.personalInfo.phone}
                      onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                      className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <input
                      type="text"
                      value={resumeData.personalInfo.location}
                      onChange={(e) => updatePersonalInfo('location', e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      placeholder="City, State"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Professional Website/LinkedIn</label>
                  <input
                    type="url"
                    value={resumeData.personalInfo.website}
                    onChange={(e) => updatePersonalInfo('website', e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="https://linkedin.com/in/your-profile"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Professional Summary</label>
                  <textarea
                    value={resumeData.personalInfo.summary}
                    onChange={(e) => updatePersonalInfo('summary', e.target.value)}
                    rows={5}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Summarize your professional background, key skills, and career objectives..."
                  />
                </div>
              </div>
            )}

            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-900">Work Experience</h3>
                  <button
                    onClick={addExperience}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm"
                  >
                    <Plus size={16} />
                    Add Experience
                  </button>
                </div>
                
                {resumeData.experience.map((exp, index) => (
                  <div key={exp.id} className="border border-gray-200 rounded-xl p-6 bg-gray-50">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-medium text-gray-900">Experience {index + 1}</h4>
                      {resumeData.experience.length > 1 && (
                        <button
                          onClick={() => removeExperience(exp.id)}
                          className="text-red-500 hover:text-red-700 transition-colors duration-200"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                        <input
                          type="text"
                          value={exp.position}
                          onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your job title"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter company name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                        <input
                          type="month"
                          value={exp.startDate}
                          onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                        <input
                          type="month"
                          value={exp.endDate}
                          onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                          disabled={exp.current}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={exp.current}
                          onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                          className="rounded-md border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">Currently working here</span>
                      </label>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Job Responsibilities</label>
                      <textarea
                        value={exp.description}
                        onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                        rows={4}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Describe your key responsibilities and achievements..."
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Education Tab */}
            {activeTab === 'education' && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-900">Education</h3>
                  <button
                    onClick={addEducation}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm"
                  >
                    <Plus size={16} />
                    Add Education
                  </button>
                </div>
                
                {resumeData.education.map((edu, index) => (
                  <div key={edu.id} className="border border-gray-200 rounded-xl p-6 bg-gray-50">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-medium text-gray-900">Education {index + 1}</h4>
                      {resumeData.education.length > 1 && (
                        <button
                          onClick={() => removeEducation(edu.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Degree</label>
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your degree"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Institution</label>
                        <input
                          type="text"
                          value={edu.school}
                          onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter institution name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                        <input
                          type="month"
                          value={edu.startDate}
                          onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                        <input
                          type="month"
                          value={edu.endDate}
                          onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">GPA (Optional)</label>
                        <input
                          type="text"
                          value={edu.gpa}
                          onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                          className="w-full px-4 border border-gray-300 py-2 rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">Skills</h3>
                    <button
                      onClick={addSkill}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm"
                    >
                      <Plus size={16} />
                      Add Skill
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    {resumeData.skills.map((skill, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <input
                          type="text"
                          value={skill}
                          onChange={(e) => updateSkills(index, e.target.value)}
                          className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter a skill (e.g., Python, Project Management)"
                        />
                        {resumeData.skills.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeSkill(index)}
                            className="text-red-500 hover:text-red-700 p-2 transition-colors duration-200"
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">Achievements</h3>
                    <button
                      onClick={addAchievement}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm"
                    >
                      <Plus size={16} />
                      Add Achievement
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    {resumeData.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <input
                          type="text"
                          value={achievement}
                          onChange={(e) => updateAchievements(index, e.target.value)}
                          className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter an achievement (e.g., Increased sales by 20%)"
                        />
                        {resumeData.achievements.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeAchievement(index)}
                            className="text-red-500 hover:text-red-700 p-2 transition-colors duration-200"
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Resume Preview Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900">Resume Preview</h3>
              <div className="flex gap-2">
                <button
                  onClick={downloadPDF}
                  className="flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 shadow-sm"
                >
                  <Download size={16} />
                  Download PDF
                </button>
                <button
                  onClick={uploadToPortal}
                  className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-200 shadow-sm"
                >
                  <Upload size={16} />
                  Upload to Portal
                </button>
              </div>
            </div>

            {uploadStatus && (
              <div className={`mb-4 p-3 rounded-lg text-sm ${
                uploadStatus.includes('Error') ? 'bg-red-100 text-red-700' : 
                uploadStatus.includes('successfully') ? 'bg-green-100 text-green-700' : 
                'bg-blue-100 text-blue-700'
              }`}>
                {uploadStatus}
              </div>
            )}

            <div id="resume-preview" className={`${selectedTemplate.styles.container} border border-gray-200 rounded-xl p-8 min-h-[900px] shadow-sm`}>
              {/* Header */}
              <div className={`${selectedTemplate.styles.header} mb-6`}>
                <h1 className="text-3xl font-bold">
                  {resumeData.personalInfo.fullName || 'Your Name'}
                </h1>
                
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mt-2">
                  {resumeData.personalInfo.email && (
                    <div className="flex items-center gap-1.5">
                      <Mail size={14} />
                      <span>{resumeData.personalInfo.email}</span>
                    </div>
                  )}
                  {resumeData.personalInfo.phone && (
                    <div className="flex items-center gap-1.5">
                      <Phone size={14} />
                      <span>{resumeData.personalInfo.phone}</span>
                    </div>
                  )}
                  {resumeData.personalInfo.location && (
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      <span>{resumeData.personalInfo.location}</span>
                    </div>
                  )}
                  {resumeData.personalInfo.website && (
                    <div className="flex items-center gap-1.5">
                      <Globe size={14} />
                      <span>{resumeData.personalInfo.website}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Summary */}
              {resumeData.personalInfo.summary && (
                <div className={`${selectedTemplate.styles.section}`}>
                  <h2 className={`${selectedTemplate.styles.heading}`}>Professional Summary</h2>
                  <p className={`${selectedTemplate.styles.text}`}>{resumeData.personalInfo.summary}</p>
                </div>
              )}

              {/* Experience */}
              {resumeData.experience.some(exp => exp.position || exp.company) && (
                <div className={`${selectedTemplate.styles.section}`}>
                  <h2 className={`${selectedTemplate.styles.heading}`}>Work Experience</h2>
                  <div className="space-y-6">
                    {resumeData.experience.map((exp) => (
                      (exp.position || exp.company) && (
                        <div key={exp.id} className="pl-2">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className={`font-semibold ${selectedTemplate.styles.text}`}>{exp.position || 'Job Title'}</h3>
                            <span className="text-xs text-gray-600">
                              {exp.startDate && new Date(exp.startDate).toLocaleDateString('en-US', { month:'short', year: 'numeric' })}
                              {exp.startDate && (exp.endDate || exp.current) && ' - '}
                              {exp.current ? 'Present' : exp.endDate && new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                            </span>
                          </div>
                          <p className={`${selectedTemplate.styles.accent} font-medium mb-2`}>{exp.company || 'Company Name'}</p>
                          {exp.description && (
                            <p className={`${selectedTemplate.styles.text}`}>{exp.description}</p>
                          )}
                        </div>
                      )
                    ))}
                  </div>
                </div>
              )}

              {/* Education */}
              {resumeData.education.some(edu => edu.degree || edu.school) && (
                <div className={`${selectedTemplate.styles.section}`}>
                  <h2 className={`${selectedTemplate.styles.heading}`}>Education</h2>
                  <div className="space-y-6">
                    {resumeData.education.map((edu) => (
                      (edu.degree || edu.school) && (
                        <div key={edu.id} className="pl-2">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className={`font-semibold ${selectedTemplate.styles.text}`}>{edu.degree || 'Degree'}</h3>
                            <span className="text-xs text-gray-600">
                              {edu.startDate && new Date(edu.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                              {edu.startDate && edu.endDate && ' - '}
                              {edu.endDate && new Date(edu.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                            </span>
                          </div>
                          <p className={`${selectedTemplate.styles.accent} font-medium`}>{edu.school || 'Institution Name'}</p>
                          {edu.gpa && (
                            <p className={`${selectedTemplate.styles.text}`}>GPA: {edu.gpa}</p>
                          )}
                        </div>
                      )
                    ))}
                  </div>
                </div>
              )}

              {/* Skills */}
              {resumeData.skills.some(skill => skill.trim()) && (
                <div className={`${selectedTemplate.styles.section}`}>
                  <h2 className={`${selectedTemplate.styles.heading}`}>Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.filter(skill => skill.trim()).map((skill, index) => (
                      <span key={index} className={`bg-blue-100 ${selectedTemplate.styles.accent} px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-blue-200`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements */}
              {resumeData.achievements.some(achievement => achievement.trim()) && (
                <div className={`${selectedTemplate.styles.section}`}>
                  <h2 className={`${selectedTemplate.styles.heading}`}>Key Achievements</h2>
                  <ul className="space-y-2">
                    {resumeData.achievements.filter(achievement => achievement.trim()).map((achievement, index) => (
                      <li key={index} className={`flex items-start ${selectedTemplate.styles.text}`}>
                        <span className={`${selectedTemplate.styles.accent} mr-2 mt-1`}>•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;