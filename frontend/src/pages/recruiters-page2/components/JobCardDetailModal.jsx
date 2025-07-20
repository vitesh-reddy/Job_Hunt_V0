
import React, { useState } from 'react';
import JobCardDetail from './JobCardDetail';

const JobCardDetailModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
         <JobCardDetail onClose={onClose} />
    </div>
  );
};

export default JobCardDetailModal;
