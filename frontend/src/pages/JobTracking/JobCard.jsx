import { MoreVertical, X } from "lucide-react";
import { useDrag } from "react-dnd";

const ItemTypes = {
  JOBCARD: 'jobcard'
};


const JobCard = ({ job, index, getStatusColor, onSetReminder, onAcceptOffer, onRejectOffer, onJobClick }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.JOBCARD,
    item: { id: job._id, status: job.currentStatus },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }));

  const handleCardClick = (e) => {
    if (e.target.closest('button')) return;
    onJobClick(job);
  };

  return (
    <div
      ref={drag}
      className={`bg-white rounded-lg shadow-md mb-3 border border-gray-200 cursor-grab hover:shadow-lg transition-shadow overflow-hidden ${job.currentStatus === 'interview' ? '' : 'p-4'
        }`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      onClick={handleCardClick}
      id="JobCard"
    >
      {/* Header */}
      <div className={`flex justify-between items-start ${job.currentStatus === 'interview' ? 'p-3 pb-2' : 'mb-2'}`}>
        <h4 className={`font-semibold text-sm ${job.currentStatus === 'accepted' ? 'text-customcolor' : 'text-black'}`}>
          {job.role || 'Senior UI/UX Designer'}
        </h4>

        {job.currentStatus === 'interview' ? (
          <button className="text-gray-400 hover:text-gray-600">
            <X className="w-4 h-4" />
          </button>
        ) : (
          <MoreVertical className="w-4 h-4 text-gray-500 cursor-pointer" />
        )}
      </div>

      {/* Job Details */}
      <div className={`${job.currentStatus === 'interview' ? 'px-3 pb-2' : ''}`}>
        <p className="text-sm text-gray-600 mb-1">{job.company || 'Amazon'}</p>
        {job.location && job.currentStatus !== 'interview' && (
          <p className="text-xs text-gray-500 mb-2">{job.location}</p>
        )}

        {/* Interview-specific content */}
        {job.currentStatus === 'interview' && (
          <>
            <div className="text-xs text-gray-600 mb-1 font-medium">
              Interview date-time
            </div>
            <div className="text-xs text-gray-800 mb-2">
              {job.interviewDate || '27/06/25 - 13:30pm'}
            </div>
            <div className="text-xs text-blue-600 mb-4">Google meet</div>
          </>
        )}

        {/* Status and Applied Date */}
        <div className="flex items-center justify-between text-xs mb-2">
          <span className={`px-2 py-1 rounded-full ${getStatusColor(job.currentStatus) || 'bg-gray-100 text-gray-800'} capitalize`}>
            {job.currentStatus}
          </span>
          {job.createdAt && <span className="text-gray-500">Applied: {job.createdAt}</span>}
        </div>

        {/* Buttons for Interview / Offer */}
        {job.currentStatus.toLowerCase() === 'interview' && (
          <div className="mb-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSetReminder(job._id);
              }}
              className="w-full py-2 text-sm custom-pink text-white rounded-md transition-colors"
            >
              Set Reminder
            </button>
          </div>
        )}

        {job.currentStatus.toLowerCase() === 'offer' && (
          <div className="mt-3 flex space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAcceptOffer(job._id);
              }}
              className="px-3 py-1 text-sm custom-pink text-white rounded-md hover:bg-green-600"
            >
              Accepted
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRejectOffer(job._id);
              }}
              className="px-3 py-1 text-sm bg-white text-black rounded-md border border-black"
            >
              Rejected
            </button>
          </div>
        )}

        {/* Interview reminder timestamp */}
        {job.currentStatus.toLowerCase() === 'interview' && (
          <div className="text-xs text-gray-400 text-right mt-2">
            {job.reminderTime || '27/06/25 10:05pm'}
          </div>
        )}
      </div>
    </div>
  );
};
export default JobCard;