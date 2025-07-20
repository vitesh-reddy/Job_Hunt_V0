import React, { useState, useEffect } from 'react';
import { 
  X, 
  Briefcase, 
  Bold, 
  Italic, 
  Underline, 
  Strikethrough, 
  Link, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  List, 
  ListOrdered,
  Type,
  Superscript,
  Subscript,
  ChevronDown
} from 'lucide-react';

const AddJobModal = ({ show, onClose, onAddJob }) => {
  const [formData, setFormData] = useState({
    role: '',
    company: '',
    jobUrl: '',
    location: '',
    status: '',
    description: ''
  });

  const [errors, setErrors] = useState({});

  const locationOptions = [
    'Select Location',
    'Mumbai, Maharashtra',
    'Delhi, Delhi',
    'Bangalore, Karnataka',
    'Chennai, Tamil Nadu',
    'Hyderabad, Telangana',
    'Pune, Maharashtra',
    'Kolkata, West Bengal',
    'Remote'
  ];

  const statusOptions = [
    'Select Status',
    'Saved',
    'Applied',
    'Interview',
    'Offer',
    'Rejected'
  ];

  // Reset form when modal opens
  useEffect(() => {
    if (show) {
      setFormData({
        role: '',
        company: '',
        jobUrl: '',
        location: '',
        status: '',
        description: ''
      });
      setErrors({});
    }
  }, [show]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.role.trim()) {
      newErrors.role = 'Role is required';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    
    if (!formData.location) {
      newErrors.location = 'Location is required';
    }
    
    if (!formData.status) {
      newErrors.status = 'Status is required';
    }
    
    if (formData.jobUrl && !isValidUrl(formData.jobUrl)) {
      newErrors.jobUrl = 'Please enter a valid URL';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleCancel = () => {
    setFormData({
      role: '',
      company: '',
      jobUrl: '',
      location: '',
      status: '',
      description: ''
    });
    setErrors({});
    onClose();
  };

  const handleSave = () => {
    if (validateForm()) {
      const jobData = {
        role: formData.role,
        companyName: formData.company,
        jobURL: formData.jobUrl,
        location: formData.location,
        status: formData.status,
        description: formData.description 
      };
      
      onAddJob(jobData);
      onClose();
    }
  };

  // Don't render if not shown
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0  flex items-center justify-center p-4 z-50 " style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} >
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="border-2 border-dashed border-blue-300 bg-blue-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-purple-600" />
                </div>
                <h1 className="text-xl font-semibold text-gray-900">Add a Job</h1>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-blue-100 rounded-md transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* First Row - Role and Company Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                    errors.role ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter job role"
                />
                {errors.role && (
                  <p className="mt-1 text-sm text-red-500">{errors.role}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                    errors.company ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter company name"
                />
                {errors.company && (
                  <p className="mt-1 text-sm text-red-500">{errors.company}</p>
                )}
              </div>
            </div>

            {/* Second Row - Job URL and Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job URL
                </label>
                <input
                  type="url"
                  value={formData.jobUrl}
                  onChange={(e) => handleInputChange('jobUrl', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                    errors.jobUrl ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter job URL"
                />
                {errors.jobUrl && (
                  <p className="mt-1 text-sm text-red-500">{errors.jobUrl}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white ${
                      errors.location ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    {locationOptions.map((option, index) => (
                      <option key={index} value={index === 0 ? '' : option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
                {errors.location && (
                  <p className="mt-1 text-sm text-red-500">{errors.location}</p>
                )}
              </div>
            </div>

            {/* Third Row - Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status <span className="text-red-500">*</span>
              </label>
              <div className="relative max-w-md">
                <select
                  value={formData.status}
                  onChange={(e) => handleInputChange('status', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white ${
                    errors.status ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  {statusOptions.map((option, index) => (
                    <option key={index} value={index === 0 ? '' : option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
              {errors.status && (
                <p className="mt-1 text-sm text-red-500">{errors.status}</p>
              )}
            </div>

            {/* Job Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Description
              </label>
              
              {/* Text Editor Toolbar */}
              <div className="border border-gray-300 rounded-t-md p-2 bg-gray-50">
                <div className="flex items-center space-x-1">
                  <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                    <Bold className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                    <Italic className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                    <Underline className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                    <Strikethrough className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                    <Link className="w-4 h-4 text-gray-600" />
                  </button>
                  <div className="border-l border-gray-300 h-4 mx-1"></div>
                  <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                    <AlignLeft className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                    <AlignCenter className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                    <AlignRight className="w-4 h-4 text-gray-600" />
                  </button>
                  <div className="border-l border-gray-300 h-4 mx-1"></div>
                  <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                    <List className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                    <ListOrdered className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                    <Type className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                    <Superscript className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                    <Subscript className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Text Area */}
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Job Description"
                className="w-full h-40 p-3 border-l border-r border-b border-gray-300 rounded-b-md resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-3 pt-4 border-t">
              <button
                onClick={handleCancel}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJobModal;