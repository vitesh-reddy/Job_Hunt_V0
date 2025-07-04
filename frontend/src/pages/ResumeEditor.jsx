import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  MoreHorizontal, 
  Edit3, 
  Bell, 
  Eye, 
  EyeOff,
  Menu,
  X
} from 'lucide-react';

const JobHuntResumeBuilder = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'Jhon',
    lastName: 'Doe',
    headline: '',
    email: 'jhon.doe007@gmail.com',
    phone: '+91-01234-56789',
    address: '',
    city: '',
    state: '',
    country: ''
  });

  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const sidebarItems = [
    { label: 'Personal Information', active: true },
    { label: 'Website & Social Links', active: false },
    { label: 'Professional Summary', active: false },
  ];

  const movableSections = [
    'Work Experience',
    'Education',
    'Certifications',
    'Awards & Achievements',
    'Projects',
    'Skills & Interests',
    'Volunteering',
    'Publications'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-purple-600">Job</span>
              <span className="text-2xl font-bold text-pink-500">Hunt</span>
            </div>
            <nav className="flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-purple-600">Dashboard</a>
              <a href="#" className="text-gray-700 hover:text-purple-600">Find a Job</a>
              <a href="#" className="text-gray-700 hover:text-purple-600">Find Recruiters</a>
              <a href="#" className="text-purple-600 font-medium">CV Builder</a>
              <a href="#" className="text-gray-700 hover:text-purple-600">Job Tracker</a>
              <a href="#" className="text-gray-700 hover:text-purple-600">Extension</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="w-5 h-5 text-gray-600" />
            <div className="flex items-center space-x-2">
              <img src="/api/placeholder/32/32" alt="Profile" className="w-8 h-8 rounded-full" />
              <span className="text-sm font-medium">Hey</span>
              <span className="text-sm font-bold">Jhon</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className={`bg-white shadow-lg transition-all duration-300 ${isSidebarCollapsed ? 'w-16' : 'w-64'}`}>
          <div className="p-4">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {isSidebarCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
              </button>
              {!isSidebarCollapsed && (
                <button className="text-purple-600 hover:text-purple-700 flex items-center space-x-1">
                  <ChevronLeft className="w-4 h-4" />
                  <span className="text-sm">Back</span>
                </button>
              )}
            </div>

            {!isSidebarCollapsed && (
              <>
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Edit3 className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">New Resume 25/6/2025</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-medium text-purple-600 mb-3">Fixed Sections</h3>
                  <div className="space-y-1">
                    {sidebarItems.map((item, index) => (
                      <div
                        key={index}
                        className={`p-2 rounded-lg cursor-pointer transition-colors ${
                          item.active ? 'bg-purple-50 text-purple-600' : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <span className="text-sm">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-medium text-purple-600 mb-3">Movable Sections</h3>
                  <div className="space-y-1">
                    {movableSections.map((section, index) => (
                      <div
                        key={index}
                        className="p-2 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-sm">{section}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                    + Add Section
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            {/* Top Controls */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium">
                  Resume
                </button>
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  Cover Letter
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 bg-gray-900 text-white rounded-lg flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Add Personal Information for +25%</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Page 1 of 2</span>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>
              <div className="mt-1 text-xs text-center text-white bg-purple-600 rounded px-2 py-1 w-12">
                25%
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-purple-600 mb-6">Personal Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-4">Basics</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs text-purple-600 mb-1">First Name</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full px-3 py-2 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-purple-600 mb-1">Last Name</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full px-3 py-2 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Headline / Target Job Title"
                      value={formData.headline}
                      onChange={(e) => handleInputChange('headline', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs text-purple-600 mb-1">Email</label>
                    <div className="relative">
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-3 py-2 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none pr-10"
                      />
                      <button
                        onClick={() => setShowEmail(!showEmail)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showEmail ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs text-purple-600 mb-1">Phone</label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-3 py-2 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none pr-10"
                      />
                      <button
                        onClick={() => setShowPhone(!showPhone)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPhone ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-4">Location</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="City"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder="State"
                        value={formData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Country"
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="flex justify-end space-x-4 mt-6">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                <Edit3 className="w-4 h-4" />
                <span>Edit Template</span>
              </button>
              <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
                Change Template
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobHuntResumeBuilder;