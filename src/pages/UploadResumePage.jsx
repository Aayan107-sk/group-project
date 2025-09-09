import React, { useState } from 'react';
import {
  Upload,
  Search,
  FileText,
  File,
  FileCheck,
  Clock,
  Sparkles
} from 'lucide-react';

const UploadResumePage = () => {
  const [uploadProgress, setUploadProgress] = useState(56);
  const [fileName, setFileName] = useState('resume.pdf');
  const [candidateInfo, setCandidateInfo] = useState({
    fullName: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+1 (555) 123-4567'
  });

  const recentUploads = [
    { name: 'john_doe.pdf', time: '2m ago' },
    { name: 'ava_patel.docx', time: '14m ago' },
    { name: 'liam_chen.pdf', time: '1h ago' }
  ];

  const handleInputChange = (field, value) => {
    setCandidateInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleClear = () => {
    setCandidateInfo({
      fullName: '',
      email: '',
      phone: ''
    });
  };

  const handleSaveCandidate = () => {
    console.log('Saving candidate:', candidateInfo);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="p-8">
        <div className="flex gap-6">
          {/* Left Column - Upload Area */}
          <div className="flex-1">
            {/* Upload Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Upload className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">Drag & drop resume here</h3>
                <p className="text-gray-600 mb-6">or</p>

                <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
                  Browse files
                </button>

                <p className="text-sm text-gray-500 mt-4">PDF or DOCX up to 10MB</p>
              </div>

              {/* Upload Progress */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <File className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-700">{fileName}</span>
                  </div>
                  <span className="text-sm text-gray-500">{uploadProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Candidate Information */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Candidate Information</h3>

              <div className="flex gap-4 mb-4">
                <div className="flex-1">
                  <label className="block text-sm text-gray-600 mb-2">Full name</label>
                  <input
                    type="text"
                    value={candidateInfo.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div className="flex-1">
                  <label className="block text-sm text-gray-600 mb-2">Email</label>
                  <input
                    type="email"
                    value={candidateInfo.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm text-gray-600 mb-2">Phone</label>
                <input
                  type="tel"
                  value={candidateInfo.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleClear}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Clear
                </button>
                <button
                  onClick={handleSaveCandidate}
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                >
                  Save Candidate
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Guidelines & Recent Uploads */}
          <div className="w-80">
            {/* Guidelines */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Guidelines</h3>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Accepted: PDF, DOCX</span>
                </div>

                <div className="flex items-center gap-2">
                  <File className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Max size: 10MB</span>
                </div>

                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Auto-extracts name, email, phone</span>
                </div>
              </div>
            </div>

            {/* Recent Uploads */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Uploads</h3>

              <div className="space-y-3">
                {recentUploads.map((upload, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <File className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-700">{upload.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{upload.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadResumePage;