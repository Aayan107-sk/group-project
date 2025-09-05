import React, { useState } from 'react';
import { Search, Filter, Eye, Star, Plus, ChevronDown, User, MapPin, Calendar, Award, Code, Database } from 'lucide-react';

export default function SearchCandidatesPage() {
  const [experienceRange, setExperienceRange] = useState([0, 15]);
  const [selectedEducation, setSelectedEducation] = useState('Any degree');
  const [selectedSkills, setSelectedSkills] = useState(['React', 'TypeScript', 'Node.js', 'GraphQL']);
  const [onlyActive, setOnlyActive] = useState(true);
  const [includeRemote, setIncludeRemote] = useState(true);
  const [visaSponsorship, setVisaSponsorship] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Score');
  const [roleFilter, setRoleFilter] = useState('Frontend');

  const candidates = [
    {
      id: 1,
      name: 'Ava Patel',
      role: 'Senior Frontend Engineer',
      experience: '8 yrs',
      avatar: '👩‍💻',
      score: 92,
      skills: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Node.js'],
      location: 'Remote',
      education: 'Masters'
    },
    {
      id: 2,
      name: 'Liam Chen',
      role: 'Full-stack Engineer',
      experience: '6 yrs',
      avatar: '👨‍💻',
      score: 88,
      skills: ['React', 'PostgreSQL', 'AWS'],
      location: 'San Francisco',
      education: 'Bachelors'
    },
    {
      id: 3,
      name: 'Noah Rodriguez',
      role: 'Backend Engineer',
      experience: '9 yrs',
      avatar: '👨‍🔧',
      score: 84,
      skills: ['Go', 'Kubernetes', 'gRPC', 'CI/CD', 'Python'],
      location: 'New York',
      education: 'PhD'
    },
    {
      id: 4,
      name: 'Sophia Nguyen',
      role: 'Data Scientist',
      experience: '5 yrs',
      avatar: '👩‍🔬',
      score: 81,
      skills: ['Python', 'TensorFlow', 'SQL', 'Experimentation'],
      location: 'Seattle',
      education: 'Masters'
    }
  ];

  const skillOptions = ['React', 'TypeScript', 'Node.js', 'GraphQL', 'Python', 'AWS', 'PostgreSQL', 'Go', 'Kubernetes'];

  const addSkill = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const removeSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter(s => s !== skill));
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'bg-gradient-to-r from-green-500 to-emerald-500';
    if (score >= 80) return 'bg-gradient-to-r from-blue-500 to-cyan-500';
    if (score >= 70) return 'bg-gradient-to-r from-yellow-500 to-orange-500';
    return 'bg-gradient-to-r from-red-500 to-pink-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Search Candidates
            </h1>
          </div>
          
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md mx-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by keywords, skills, titles..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Filters Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 p-6 shadow-lg">
          {/* Experience Filter */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              Experience
            </h3>
            <p className="text-sm text-gray-600 mb-4">Years of professional experience</p>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-700">{experienceRange[0]} - {experienceRange[1]} yrs</span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="15"
                  value={experienceRange[1]}
                  onChange={(e) => setExperienceRange([experienceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Education Filter */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
              Education
            </h3>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-2xl">
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white shadow-sm"
                value={selectedEducation}
                onChange={(e) => setSelectedEducation(e.target.value)}
              >
                <option>Any degree</option>
                <option>Bachelors</option>
                <option>Masters</option>
                <option>PhD</option>
              </select>
              
              <div className="flex gap-2 mt-4">
                {['Bachelors', 'Masters', 'PhD'].map((degree) => (
                  <button
                    key={degree}
                    className={`px-3 py-2 text-xs font-medium rounded-lg transition-all ${
                      selectedEducation === degree
                        ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                    }`}
                    onClick={() => setSelectedEducation(degree)}
                  >
                    {degree}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Filter */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
              Skills
            </h3>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Add skill"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                />
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedSkills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 cursor-pointer hover:from-orange-600 hover:to-red-600"
                    onClick={() => removeSkill(skill)}
                  >
                    {skill}
                    <span className="ml-1">×</span>
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillOptions.filter(skill => !selectedSkills.includes(skill)).map((skill) => (
                  <button
                    key={skill}
                    className="bg-white text-gray-600 px-3 py-1 rounded-full text-xs border border-gray-200 hover:bg-gray-50 transition-colors"
                    onClick={() => addSkill(skill)}
                  >
                    + {skill}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Toggle Filters */}
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl">
              <span className="text-sm font-medium text-gray-700">Only active candidates</span>
              <button
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-200 ${
                  onlyActive ? 'bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg' : 'bg-gray-300'
                }`}
                onClick={() => setOnlyActive(!onlyActive)}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                    onlyActive ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl">
              <span className="text-sm font-medium text-gray-700">Include remote</span>
              <button
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-200 ${
                  includeRemote ? 'bg-gradient-to-r from-green-500 to-blue-500 shadow-lg' : 'bg-gray-300'
                }`}
                onClick={() => setIncludeRemote(!includeRemote)}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                    includeRemote ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl">
              <span className="text-sm font-medium text-gray-700">Visa sponsorship</span>
              <button
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-200 ${
                  visaSponsorship ? 'bg-gradient-to-r from-yellow-500 to-orange-500 shadow-lg' : 'bg-gray-300'
                }`}
                onClick={() => setVisaSponsorship(!visaSponsorship)}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                    visaSponsorship ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <span className="text-gray-600 bg-white px-4 py-2 rounded-xl shadow-sm">
                128 candidates found
              </span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by</span>
                <select
                  className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option>Score</option>
                  <option>Experience</option>
                  <option>Name</option>
                  <option>Recent</option>
                </select>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Role:</span>
              <select
                className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm"
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
              >
                <option>Frontend</option>
                <option>Backend</option>
                <option>Full-stack</option>
                <option>Data Science</option>
              </select>
            </div>
          </div>

          {/* Table Header */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 flex items-center gap-4 border-b border-gray-200">
              <div className="flex-1">
                <span className="text-sm font-bold text-gray-700">Name</span>
              </div>
              <div className="w-48">
                <span className="text-sm font-bold text-gray-700">Top Skills</span>
              </div>
              <div className="w-24 text-center">
                <span className="text-sm font-bold text-gray-700">Score</span>
              </div>
              <div className="w-32 text-center">
                <span className="text-sm font-bold text-gray-700">Actions</span>
              </div>
            </div>

            {/* Candidates List */}
            <div className="divide-y divide-gray-100">
              {candidates.map((candidate) => (
                <div
                  key={candidate.id}
                  className="px-6 py-6 flex items-center gap-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200"
                >
                  {/* Name & Info */}
                  <div className="flex-1 flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                      {candidate.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{candidate.name}</h3>
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {candidate.role} • {candidate.experience}
                      </p>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {candidate.location}
                      </p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="w-48">
                    <div className="flex flex-wrap gap-1">
                      {candidate.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-2 py-1 rounded-lg text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {candidate.skills.length > 3 && (
                        <span className="text-xs text-gray-500">
                          +{candidate.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Score */}
                  <div className="w-24 text-center">
                    <div className={`${getScoreColor(candidate.score)} text-white px-3 py-2 rounded-xl font-bold text-sm shadow-lg`}>
                      {candidate.score}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="w-32 flex gap-2">
                    <button className="bg-gray-100 text-gray-700 p-2 rounded-xl hover:bg-gray-200 transition-colors border border-gray-200">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-xl hover:from-purple-700 hover:to-blue-700 font-medium text-sm shadow-lg transform hover:scale-105 transition-all flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Shortlist
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 flex items-center justify-between border-t border-gray-200">
              <span className="text-sm text-gray-600">Showing 1-20 of 128</span>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 text-sm bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 font-medium shadow-lg">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}