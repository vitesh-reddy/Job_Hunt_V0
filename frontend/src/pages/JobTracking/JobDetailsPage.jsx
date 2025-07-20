import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, 
  Calendar, 
  Bell, 
  Trash2, 
  X, 
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
  Edit,
  Send,
  MoreHorizontal
} from 'lucide-react';

const JobDetailsPage = ({ job, onBack, scrollToReminder }) => {
  const [selectedStatus, setSelectedStatus] = useState(job.currentStatus);
  const [noteContent, setNoteContent] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [reminderDate, setReminderDate] = useState('');
  const [reminderTime, setReminderTime] = useState('');
  const [reminderNote, setReminderNote] = useState('');
  const [reminders, setReminders] = useState([
    { id: 1, message: 'Message...', date: 'Tue, 01/07/25', time: '9:00 AM' },
    { id: 2, message: 'Message...', date: 'Tue, 01/07/25', time: '2:00 PM' },
    { id: 3, message: 'Message...', date: 'Tue, 01/07/25', time: '5:00 PM' },
    { id: 4, message: 'Message...', date: 'Tue, 01/07/25', time: '8:00 PM' }
  ]);

  const reminderRef = useRef(null);

  useEffect(() => {
    if (scrollToReminder) {
      setActiveTab('reminder');
    }
  }, [scrollToReminder]);

  useEffect(() => {
    if (activeTab === 'reminder' && reminderRef.current) {
      reminderRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeTab]);

  const statusOptions = [
    { value: 'Applied', label: 'Applied' },
    { value: 'Interview', label: 'Interview' },
    { value: 'Offer', label: 'Offer' },
    { value: 'Rejected', label: 'Rejected' },
    { value: 'Saved', label: 'Saved' }
  ];

  const statusOrder = ['saved', 'applied', 'interview', 'offer', 'accepted', 'rejected'];

  const [statusDates, setStatusDates] = useState({});

  useEffect(() => {
    setStatusDates(prevDates => {
        const newStatusDates = { ...prevDates };
        let updated = false;

        if (job.createdAt && !newStatusDates.applied) {
            newStatusDates.applied = new Date(job.createdAt).toLocaleString();
            updated = true;
        }

        if (selectedStatus) {
            const currentStatusIndex = statusOrder.indexOf(selectedStatus.toLowerCase());
            for (let i = 0; i <= currentStatusIndex; i++) {
                const status = statusOrder[i];
                if (!newStatusDates[status]) {
                    newStatusDates[status] = new Date().toLocaleString();
                    updated = true;
                }
            }
        }
        
        return updated ? newStatusDates : prevDates;
    });
  }, [selectedStatus, job.createdAt]);

  const applicationTimeline = statusOrder.map(status => {
    const statusKey = status.toLowerCase();
    const isActive = statusOrder.indexOf(statusKey) <= statusOrder.indexOf(selectedStatus.toLowerCase());
    
    return {
      status: status.charAt(0).toUpperCase() + status.slice(1),
      date: isActive ? (statusDates[statusKey] || 'Recording...') : 'Not yet',
      color: isActive ? 'bg-purple-600' : 'bg-gray-400',
      active: isActive
    };
  });

  const messages = [
    { id: 1, content: 'Message...', date: 'Tue, 01/07/25' },
    { id: 2, content: 'Message...', date: 'Tue, 01/07/25' }
  ];

  const handleSaveNote = () => {
    console.log('Note saved:', noteContent);
    setNoteContent('');
  };

  const handleCancelNote = () => {
    setNoteContent('');
  };

  const handleSaveReminder = () => {
    if (reminderDate && reminderTime && reminderNote) {
      const newReminder = {
        id: reminders.length + 1,
        message: reminderNote,
        date: reminderDate,
        time: reminderTime
      };
      setReminders([...reminders, newReminder]);
      setReminderDate('');
      setReminderTime('');
      setReminderNote('');
    }
  };

  const handleCancelReminder = () => {
    setReminderDate('');
    setReminderTime('');
    setReminderNote('');
  };

  const handleDeleteReminder = (id) => {
    setReminders(reminders.filter(reminder => reminder.id !== id));
  };

  const ReminderContent = () => (
    <div className="space-y-6 p-3">
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Set Interview Reminders</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">INTERVIEW DATE</label>
            <input
              type="date"
              value={reminderDate}
              onChange={(e) => setReminderDate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">INTERVIEW TIME</label>
            <input
              type="time"
              value={reminderTime}
              onChange={(e) => setReminderTime(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">REMINDER</label>
          
          {/* Text Editor Toolbar */}
          <div className="border border-gray-300 rounded-t-md p-2 bg-gray-50">
            <div className="flex items-center space-x-1">
              <button className="p-1 hover:bg-gray-200 rounded">
                <Bold className="w-4 h-4" />
              </button>
              <button className="p-1 hover:bg-gray-200 rounded">
                <Italic className="w-4 h-4" />
              </button>
              <button className="p-1 hover:bg-gray-200 rounded">
                <Underline className="w-4 h-4" />
              </button>
              <button className="p-1 hover:bg-gray-200 rounded">
                <Strikethrough className="w-4 h-4" />
              </button>
              <button className="p-1 hover:bg-gray-200 rounded">
                <Link className="w-4 h-4" />
              </button>
              <div className="border-l border-gray-300 h-4 mx-1"></div>
              <button className="p-1 hover:bg-gray-200 rounded">
                <AlignLeft className="w-4 h-4" />
              </button>
              <button className="p-1 hover:bg-gray-200 rounded">
                <AlignCenter className="w-4 h-4" />
              </button>
              <button className="p-1 hover:bg-gray-200 rounded">
                <AlignRight className="w-4 h-4" />
              </button>
              <div className="border-l border-gray-300 h-4 mx-1"></div>
              <button className="p-1 hover:bg-gray-200 rounded">
                <List className="w-4 h-4" />
              </button>
              <button className="p-1 hover:bg-gray-200 rounded">
                <ListOrdered className="w-4 h-4" />
              </button>
              <button className="p-1 hover:bg-gray-200 rounded">
                <Type className="w-4 h-4" />
              </button>
              <button className="p-1 hover:bg-gray-200 rounded">
                <Superscript className="w-4 h-4" />
              </button>
              <button className="p-1 hover:bg-gray-200 rounded">
                <Subscript className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Text Area */}
          <textarea
            value={reminderNote}
            onChange={(e) => setReminderNote(e.target.value)}
            placeholder="Interview with Google, Need to carry a copy of Resume, Aadhar Card & Pan Card"
            className="w-full h-32 p-3 border-l border-r border-gray-300 resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />

          {/* Editor Footer */}
          <div className="border border-gray-300 rounded-b-md p-2 bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <button 
                  onClick={handleCancelReminder}
                  className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSaveReminder}
                  className="px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700"
                >
                  Save
                </button>
              </div>
              <span className="text-xs text-gray-500">500/500 Characters</span>
            </div>
          </div>
        </div>
      </div>

      {/* Your Reminders Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Reminders</h3>
        <div className="space-y-3">
          {reminders.map((reminder) => (
            <div key={reminder.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <span className="text-sm text-gray-800">{reminder.message}</span>
                <div className="flex items-center space-x-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleDeleteReminder(reminder.id)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <span>📅 {reminder.date}</span>
                <span>🕒 {reminder.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

return (
  <div className="bg-white min-h-screen" style={{ position: "fixed", right: 0, left: "30%", top: 0, bottom: 0, zIndex: 50 , backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
    {/* Header */}
    <div className="p-6 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <Building2 className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{job?.role}</h1>
            <div className="flex items-center space-x-2 text-gray-600">
              <Building2 className="w-4 h-4" />
              <span>{job?.company}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 flex items-center space-x-1">
            <Trash2 className="w-4 h-4" />
            <span>Delete</span>
          </button>
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-md">
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-500">
        Last Edited On 27/06/25 at 21:29pm
      </div>
    </div>

    <div className="flex gap-8 border-t border-gray-200">
      {/* Left Content */}
      <div className="flex-1 p-2 border-r border-gray-200">
        {/* Navigation Tabs */}
        <div className="flex space-x-6 border-b border-gray-200 mb-6">
          {["overview", "company", "reminder"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 text-sm font-medium border-b-2 flex items-center space-x-2 ${
                activeTab === tab
                  ? "border-purple-600 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab === "overview" && <div className="w-2 h-2 bg-purple-600 rounded-full" />}
              {tab === "company" && <Building2 className="w-4 h-4" />}
              {tab === "reminder" && <Bell className="w-4 h-4" />}
              <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        {activeTab === "overview" && (
          <div className="mb-8 p-5">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Job Posting</h2>
            <div className="grid grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">{job?.location}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Salary</h3>
                <p className="text-gray-600">{job?.salary || "Not specified"}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Job Type</h3>
                <p className="text-gray-600">{job?.jobType || "Not specified"}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">URL</h3>
                <a href={job?.jobUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm break-all">
                  {job?.jobUrl}
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
              <div className="text-gray-600 text-sm leading-relaxed space-y-3">
                <p>{job?.description}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "company" && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Company Information</h2>
            <p className="text-gray-600">Company details will be displayed here...</p>
          </div>
        )}

        {activeTab === "reminder" && <div ref={reminderRef}><ReminderContent /></div>}
      </div>

      {/* Right Sidebar */}
      <div className="w-80 space-y-6 p-2">
        {/* Application Status */}
        <div className="custom-pink3 p-3 rounded-md">
          <h3 className="font-semibold text-gray-900 mb-3">Application Status</h3>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {statusOptions?.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>

          <div className="mt-4 space-y-3">
            {applicationTimeline?.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${item.color}`} />
                <span className={`text-sm ${item.active ? "text-gray-900" : "text-gray-400"}`}>
                  {item.status}
                </span>
                <span className="text-xs text-gray-400 ml-auto flex items-center space-x-1">
                  <span>{item.date}</span>
                  {item.active && <Edit className="w-3 h-3" />}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Notes Section */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900 text-customcolor">Notes</h3>
            <span className="text-xs text-gray-500">Add Note</span>
          </div>

          <div className="border custom-bordercolor1 rounded-md">
            <div className="custom-bordercolor2 p-2 bg-gray-50 rounded-t-md">
              <div className="flex items-center space-x-0.5">
                {[Bold, Italic, Underline, Strikethrough, Link, AlignLeft, AlignCenter, AlignRight, List, Type, Superscript, Subscript].map((Icon, i) => (
                  <button key={i} className="p-1 hover:bg-gray-200 rounded">
                    <Icon className="w-3 h-3" />
                  </button>
                ))}
              </div>
            </div>

            <textarea
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              placeholder="Type here..."
              className="w-full h-32 p-3 resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />

            <div className="custom-bordercolor3 p-2 bg-gray-50 rounded-b-md">
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <button onClick={handleCancelNote} className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800">Cancel</button>
                  <button onClick={handleSaveNote} className="px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700">Save</button>
                </div>
                <span className="text-xs text-gray-500">{noteContent.length}/500 Characters</span>
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="space-y-3">
          {messages?.map((message) => (
            <div key={message.id} className="border border-gray-200 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">{message.content}</span>
                <div className="flex items-center space-x-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="text-xs text-gray-400">{message.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
};
 
export default JobDetailsPage;