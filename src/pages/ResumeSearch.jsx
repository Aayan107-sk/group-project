import React, { useState } from 'react';
import { Search, Filter, Eye, Trash2, Download, SortAsc, Star, User } from 'lucide-react';

export default function ShortlistedCandidatesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Score');

  const candidates = [
    {
      id: 1,
      name: 'Ava Patel',
      role: 'Senior Frontend Engineer',
      avatar: '👩‍💻',
      score: 94,
      skills: ['React', 'TypeScript', 'Next.js', 'Design Systems'],
      bgColor: 'bg-gradient-to-br from-pink-500 to-purple-600'
    },
    {
      id: 2,
      name: 'Diego Martinez',
      role: 'Full-Stack Engineer',
      avatar: '👨‍💻',
      score: 91,
      skills: ['Node.js', 'GraphQL', 'AWS', 'PostgreSQL'],
      bgColor: 'bg-gradient-to-br from-blue-500 to-indigo-600'
    },
    {
      id: 3,
      name: 'Mina Cho',
      role: 'ML Engineer',
      avatar: '👩‍🔬',
      score: 89,
      skills: ['Python', 'TensorFlow', 'MLOps', 'Docker'],
      bgColor: 'bg-gradient-to-br from-green-500 to-teal-600'
    },
    {
      id: 4,
      name: 'Noah Williams',
      role: 'Backend Engineer',
      avatar: '👨‍🔧',
      score: 87,
      skills: ['Go', 'Kubernetes', 'gRPC', 'Distributed Systems'],
      bgColor: 'bg-gradient-to-br from-orange-500 to-red-600'
    },
    {
      id: 5,
      name: 'Sofia Rossi',
      role: 'Product Designer',
      avatar: '👩‍🎨',
      score: 85,
      skills: ['Figma', 'UX Research', 'Prototyping', 'Design Systems'],
      bgColor: 'bg-gradient-to-br from-purple-500 to-pink-600'
    },
    {
      id: 6,
      name: 'Jordan Lee',
      role: 'Senior Software Engineer',
      avatar: '👨‍💼',
      score: 82,
      skills: ['React', 'TypeScript', 'AWS', 'System Design'],
      bgColor: 'bg-gradient-to-br from-cyan-500 to-blue-600'
    }
  ];

  const getScoreColor = (score) => {
    if (score >= 90) return 'bg-gradient-to-r from-green-500 to-emerald-500';
    if (score >= 85) return 'bg-gradient-to-r from-blue-500 to-cyan-500';
    if (score >= 80) return 'bg-gradient-to-r from-yellow-500 to-orange-500';
    return 'bg-gradient-to-r from-red-500 to-pink-500';
  };

  const filteredCandidates = candidates.filter(candidate =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-xl border-b border-gray-200 px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-2xl shadow-lg">
              <Star className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Shortlisted Candidates
            </h1>
          </div>
          
          <button className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-xl hover:from-green-600 hover:to-teal-600 font-medium shadow-lg transform hover:scale-105 transition-all">
            <Download className="w-5 h-5" />
            Export List
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="px-6 py-6">
        <div className="flex items-center justify-between mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search candidates..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-white text-gray-700 px-4 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 shadow-lg transition-colors">
              <Filter className="w-4 h-4" />
              Filters
            </button>
            
            <div className="flex items-center gap-2">
              <SortAsc className="w-4 h-4 text-gray-600" />
              <select
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-lg"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option>Sort by Score</option>
                <option>Sort by Name</option>
                <option>Sort by Role</option>
                <option>Sort by Date</option>
              </select>
            </div>
          </div>
        </div>

        {/* Candidates Grid */}
        <div className="flex flex-wrap gap-6">
          {filteredCandidates.map((candidate) => (
            <div
              key={candidate.id}
              className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 w-80"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`${candidate.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                    {candidate.avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{candidate.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{candidate.role}</p>
                  </div>
                </div>
                
                <div className={`${getScoreColor(candidate.score)} text-white px-4 py-2 rounded-2xl font-bold text-lg shadow-lg`}>
                  {candidate.score}
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((skill, index) => (
                    <span
                      key={skill}
                      className={`px-3 py-2 rounded-xl text-xs font-medium ${
                        index % 4 === 0 ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800' :
                        index % 4 === 1 ? 'bg-gradient-to-r from-green-100 to-teal-100 text-green-800' :
                        index % 4 === 2 ? 'bg-gradient-to-r from-orange-100 to-red-100 text-orange-800' :
                        'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-xl hover:bg-gray-200 transition-colors flex-1 border border-gray-200">
                  <Eye className="w-4 h-4" />
                  View Details
                </button>
                <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-3 rounded-xl hover:from-red-600 hover:to-pink-600 font-medium shadow-lg transform hover:scale-105 transition-all flex-1">
                  <Trash2 className="w-4 h-4" />
                  Remove from Shortlist
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCandidates.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-gradient-to-r from-gray-400 to-gray-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No candidates found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}

        {/* Stats Footer */}
        <div className="mt-12 bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {filteredCandidates.length}
                </div>
                <div className="text-sm text-gray-600">Total Shortlisted</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  {Math.round(filteredCandidates.reduce((acc, c) => acc + c.score, 0) / filteredCandidates.length) || 0}
                </div>
                <div className="text-sm text-gray-600">Avg Score</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  {filteredCandidates.filter(c => c.score >= 90).length}
                </div>
                <div className="text-sm text-gray-600">Top Performers</div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-purple-600 font-medium shadow-lg transform hover:scale-105 transition-all">
                Schedule Interviews
              </button>
              <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-xl hover:from-green-600 hover:to-teal-600 font-medium shadow-lg transform hover:scale-105 transition-all">
                Send to Next Round
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}