import { useState, useEffect } from 'react';
import {
  IconX,
  IconRefresh,
} from '@tabler/icons-react';

const listStyleOptions = [
  { type: 'disc', label: '•' },
  { type: 'circle', label: '○' },
  { type: 'square', label: '■' },
  { type: 'diamond', label: '◆' },
  { type: 'alpha', label: 'Alpha' },
  { type: 'numbers', label: 'Numbers' },
  { type: 'none', label: 'None' },
];

const TemplateEditor = ({ isOpen, onClose, initialTemplate, onSave }) => {
  const [template, setTemplate] = useState({
    fontFamily: 'Times New Roman',
    fontSize: 11,
    lineHeight: 1.25,
    sectionGap: 0.93,
    margins: { leftRight: 0.93, topBottom: 0.93 },
    accentColor: '#ec4899',
    linkColor: '#0000FF',
    nameCase: 'capitalize',
    listStyle: 'disc',
    workExperienceGroupBy: 'organization',
    groupWorkPreferences: false,
    ...initialTemplate
  });

  const [previewHtml, setPreviewHtml] = useState('');

  useEffect(() => {
    const style = `
      <style>
        .resume-preview {
          font-family: ${template.fontFamily};
          font-size: ${template.fontSize}pt;
          line-height: ${template.lineHeight};
          margin: ${template.margins.topBottom}in ${template.margins.leftRight}in;
        }
        .section { margin-bottom: ${template.sectionGap}in; }
        .accent { color: ${template.accentColor}; }
        .link { color: ${template.linkColor}; }
        .name { text-transform: ${template.nameCase}; }
        ol { list-style-type: ${template.listStyle === 'alpha' ? 'lower-alpha' : template.listStyle === 'numbers' ? 'decimal' : template.listStyle}; }
        ul { list-style-type: ${template.listStyle}; }
      </style>
    `;

    const content = `
      <div class="resume-preview">
        <h1 class="name accent">John Doe</h1>
        <p class="link">john.doe@example.com | (123) 456-7890</p>
        <div class="section">
          <h2 class="accent">Professional Summary</h2>
          <p>Experienced software engineer with 5+ years in web development...</p>
        </div>
        <div class="section">
          <h2 class="accent">Work Experience</h2>
          ${template.workExperienceGroupBy === 'position' ? `
            <h3>Senior Developer</h3>
            <p>Tech Company Inc. | 2020-Present</p>
          ` : `
            <h3>Tech Company Inc.</h3>
            <p>Senior Developer | 2020-Present</p>
          `}
          <ul>
            <li>Developed modern web applications</li>
            <li>Led team of 5 developers</li>
          </ul>
        </div>
      </div>
    `;

    setPreviewHtml(style + content);
  }, [template]);

  const handleChange = (field, value) => setTemplate(prev => ({ ...prev, [field]: value }));
  const handleNestedChange = (parent, field, value) =>
    setTemplate(prev => ({ ...prev, [parent]: { ...prev[parent], [field]: value } }));

  const resetToDefault = () => {
    setTemplate({
      fontFamily: 'Times New Roman',
      fontSize: 11,
      lineHeight: 1.25,
      sectionGap: 0.93,
      margins: { leftRight: 0.93, topBottom: 0.93 },
      accentColor: '#ec4899',
      linkColor: '#0000FF',
      nameCase: 'capitalize',
      listStyle: 'disc',
      workExperienceGroupBy: 'organization',
      groupWorkPreferences: false
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-xl font-bold">Edit Template</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <IconX size={24} />
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="w-1/2 border-r p-6 overflow-y-auto">

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Font Family</label>
              <select
                value={template.fontFamily}
                onChange={(e) => handleChange('fontFamily', e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option>Times New Roman</option>
                <option>Arial</option>
                <option>Calibri</option>
                <option>Georgia</option>
                <option>Helvetica</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Font Size</label>
                <input
                  type="number"
                  value={template.fontSize}
                  min="8"
                  max="14"
                  onChange={(e) => handleChange('fontSize', parseInt(e.target.value))}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Line Height</label>
                <input
                  type="number"
                  step="0.05"
                  value={template.lineHeight}
                  onChange={(e) => handleChange('lineHeight', parseFloat(e.target.value))}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Left & Right Margins</label>
                <input
                  type="number"
                  step="0.01"
                  value={template.margins.leftRight}
                  onChange={(e) => handleNestedChange('margins', 'leftRight', parseFloat(e.target.value))}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Top & Bottom Margins</label>
                <input
                  type="number"
                  step="0.01"
                  value={template.margins.topBottom}
                  onChange={(e) => handleNestedChange('margins', 'topBottom', parseFloat(e.target.value))}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">List Styles</label>
              <div className="flex flex-wrap gap-2">
                {listStyleOptions.map(option => (
                  <button
                    key={option.type}
                    onClick={() => handleChange('listStyle', option.type)}
                    className={`px-3 py-1 rounded border ${template.listStyle === option.type ? 'bg-pink-600 text-white' : ''}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Show Work Experience By</label>
              <div className="flex">
                {['organization', 'position'].map(option => (
                  <button
                    key={option}
                    onClick={() => handleChange('workExperienceGroupBy', option)}
                    className={`flex-1 px-3 py-1 rounded border ${template.workExperienceGroupBy === option ? 'bg-pink-600 text-white' : ''}`}
                  >
                    {option === 'organization' ? 'Group By Organization' : 'Group By Position'}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-medium">Group Work Preferences</span>
              <label className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={template.groupWorkPreferences}
                  onChange={(e) => handleChange('groupWorkPreferences', e.target.checked)} />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-pink-600 after:content-[''] after:absolute after:left-[4px] after:top-[4px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
              </label>
            </div>

            <button
              onClick={resetToDefault}
              className="flex items-center text-gray-600 hover:text-gray-800 mt-4"
            >
              <IconRefresh className="mr-2" size={18} />
              Reset to default
            </button>

          </div>

          <div className="w-1/2 p-6 overflow-y-auto">
            <div className="border rounded-lg p-4 h-full">
              <div dangerouslySetInnerHTML={{ __html: previewHtml }} />
            </div>
          </div>
        </div>

        <div className="border-t p-4 flex justify-end">
          <button
            onClick={() => onSave(template)}
            className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
          >
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
};

export default TemplateEditor;
