import { useState } from 'react';
import { Search, Eye, Heart, ChevronDown } from 'lucide-react';

const CandidateSearch = () => {
  const [experienceRange, setExperienceRange] = useState(15);
  const [selectedDegree, setSelectedDegree] = useState('Any degree');
  const [selectedSkills, setSelectedSkills] = useState(['React', 'TypeScript', 'Node.js', 'GraphQL']);
  const [onlyActive, setOnlyActive] = useState(true);
  const [includeRemote, setIncludeRemote] = useState(true);
  const [visaSponsorship, setVisaSponsorship] = useState(false);
  const [sortBy, setSortBy] = useState('Score');
  const [role, setRole] = useState('Frontend');
  const [searchQuery, setSearchQuery] = useState('');

  const candidates = [
    {
      id: 1,
      name: 'Ava Patel',
      role: 'Senior Frontend Engineer',
      experience: '8 yrs',
      score: 92,
      avatar: '👩🏻‍💻',
      skills: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Node.js']
    },
    {
      id: 2,
      name: 'Liam Chen',
      role: 'Full-stack Engineer',
      experience: '6 yrs',
      score: 88,
      avatar: '👨🏻‍💻',
      skills: ['React', 'PostgreSQL', 'AWS', 'Go', 'Kubernetes']
    },
    {
      id: 3,
      name: 'Noah Rodriguez',
      role: 'Backend Engineer',
      experience: '9 yrs',
      score: 84,
      avatar: '👨🏽‍💻',
      skills: ['Go', 'Kubernetes', 'gRPC', 'CI/CD', 'Python']
    },
    {
      id: 4,
      name: 'Sophia Nguyen',
      role: 'Data Scientist',
      experience: '5 yrs',
      score: 81,
      avatar: '👩🏻‍💻',
      skills: ['Python', 'TensorFlow', 'SQL', 'Experimentation', 'Machine Learning']
    }
  ];

  const degrees = ['Any degree', 'Bachelors', 'Masters', 'PhD'];
  const allSkills = ['React', 'TypeScript', 'Node.js', 'GraphQL', 'Python', 'AWS', 'PostgreSQL', 'Go', 'Kubernetes'];

  const addSkill = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const removeSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter(s => s !== skill));
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'bg-green-500';
    if (score >= 80) return 'bg-green-400';
    return 'bg-green-300';
  };

  return (
    
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Filters */}
      <div className="w-80 bg-white p-6 shadow-sm border-r">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Search Candidates</h2>
        
        {/* Search Input */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by keywords, skills, titles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Experience Filter */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Experience</h3>
          <p className="text-sm text-gray-500 mb-2">Years of professional experience</p>
          <div className="px-2">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>0 - {experienceRange} yrs</span>
            </div>
            <input
              type="range"
              min="0"
              max="20"
              value={experienceRange}
              onChange={(e) => setExperienceRange(e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        </div>

        {/* Education Filter */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Education</h3>
          <div className="relative">
            <select
              value={selectedDegree}
              onChange={(e) => setSelectedDegree(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
            >
              {degrees.map(degree => (
                <option key={degree} value={degree}>{degree}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
          <div className="flex gap-2 mt-3">
            {['Bachelors', 'Masters', 'PhD'].map(degree => (
              <button
                key={degree}
                onClick={() => setSelectedDegree(degree)}
                className={`px-3 py-1 rounded-full text-xs ${
                  selectedDegree === degree
                    ? 'bg-blue-100 text-blue-800 border border-blue-200'
                    : 'bg-gray-100 text-gray-700 border border-gray-200'
                }`}
              >
                {degree}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Filter */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {selectedSkills.map(skill => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm cursor-pointer hover:bg-blue-200"
                onClick={() => removeSkill(skill)}
              >
                {skill} ×
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {allSkills.filter(skill => !selectedSkills.includes(skill)).map(skill => (
              <button
                key={skill}
                onClick={() => addSkill(skill)}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200"
              >
                + {skill}
              </button>
            ))}
          </div>
        </div>

        {/* Toggle Filters */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Only active candidates</span>
            <button
              onClick={() => setOnlyActive(!onlyActive)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                onlyActive ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                onlyActive ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Include remote</span>
            <button
              onClick={() => setIncludeRemote(!includeRemote)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                includeRemote ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                includeRemote ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Visa sponsorship</span>
            <button
              onClick={() => setVisaSponsorship(!visaSponsorship)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                visaSponsorship ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                visaSponsorship ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">{candidates.length} candidates found</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>Score</option>
                <option>Experience</option>
                <option>Name</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Role:</span>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>Frontend</option>
                <option>Backend</option>
                <option>Full-stack</option>
                <option>Data Science</option>
              </select>
            </div>
          </div>
        </div>

        {/* Candidates Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Top Skills</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {candidates.map((candidate) => (
                <tr key={candidate.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-lg">
                          {candidate.avatar}
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{candidate.name}</div>
                        <div className="text-sm text-gray-500">{candidate.role} • {candidate.experience}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {candidate.skills.slice(0, 5).map((skill, index) => (
                        <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white ${getScoreColor(candidate.score)}`}>
                      {candidate.score}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex gap-2">
                      <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 bg-white hover:bg-gray-50">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </button>
                      <button className="inline-flex items-center px-3 py-2 border border-transparent rounded-md text-sm leading-4 font-medium text-white bg-blue-600 hover:bg-blue-700">
                        <Heart className="h-4 w-4 mr-1" />
                        Shortlist
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-gray-700">
            Showing 1-20 of {candidates.length}
          </p>
          <div className="flex gap-2">
            <button className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              Next
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default CandidateSearch;