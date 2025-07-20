import { X } from "lucide-react";
import { useState } from "react";

const AddColumnModal = ({ show, onClose, onAddColumn, onDeleteColumn }) => {
  const [columnName, setColumnName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (columnName.trim() === '') {
      alert('Column name cannot be empty.');
      return;
    }
    onAddColumn(columnName.toLowerCase().replace(/ /g, '')); // Convert to a valid key
    onClose();
    setColumnName('');
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0  flex justify-center items-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Add New Column</h3>
          <button onClick={onClose} className="columns text-gray-500 hover:text-gray-700" >
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="columnName" className="block text-sm font-medium text-gray-700">Column Name</label>
            <input
              type="text"
              id="columnName"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={columnName}
              onChange={(e) => setColumnName(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Add Column
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddColumnModal;