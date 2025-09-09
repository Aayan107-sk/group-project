import React, { useState } from 'react';
import { Search, Download, SlidersHorizontal, ArrowUpDown, Eye } from 'lucide-react';

const Shortlist = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const candidates = [
    {
      id: 1,
      name: "Ava Patel",
      role: "Senior Frontend Engineer",
      score: 96,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      skills: ["React", "TypeScript", "Next.js", "Design Systems"]
    },
    {
      id: 2,
      name: "Diego Martinez",
      role: "Full-Stack Engineer",
      score: 91,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      skills: ["Node.js", "GraphQL", "AWS", "PostgreSQL"]
    },
    {
      id: 3,
      name: "Mina Cho",
      role: "ML Engineer",
      score: 89,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      skills: ["Python", "TensorFlow", "MLOps", "Docker"]
    },
    {
      id: 4,
      name: "Noah Williams",
      role: "Backend Engineer",
      score: 87,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      skills: ["Go", "Kubernetes", "gRPC", "Distributed Systems"]
    },
    {
      id: 5,
      name: "Sofia Rossi",
      role: "Product Designer",
      score: 85,
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=40&h=40&fit=crop&crop=face",
      skills: ["Figma", "UX Research", "Prototyping", "Design Systems"]
    },
    {
      id: 6,
      name: "Jordan Lee",
      role: "Senior Software Engineer",
      score: 92,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      skills: ["React", "TypeScript", "AWS", "System Design"]
    }
  ];

  const getScoreColor = (score) => {
    if (score >= 90) return 'bg-green-500';
    if (score >= 85) return 'bg-blue-500';
    return 'bg-purple-500';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        

        {/* Search and Filters */}
        <div className="flex items-center justify-between mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search candidates"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-3 ml-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <SlidersHorizontal className="w-4 h-4" />
              <span className="text-sm font-medium">Filters</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <ArrowUpDown className="w-4 h-4" />
              <span className="text-sm font-medium">Sort by Score</span>
            </button>
          </div>
        </div>

        {/* Candidates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {candidates.map((candidate) => (
            <div key={candidate.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              {/* Header with Avatar and Score */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={candidate.avatar}
                    alt={candidate.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{candidate.name}</h3>
                    <p className="text-sm text-gray-600">{candidate.role}</p>
                  </div>
                </div>
                <div className={`w-10 h-10 rounded-full ${getScoreColor(candidate.score)} flex items-center justify-center`}>
                  <span className="text-white text-sm font-bold">{candidate.score}</span>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">View Details</span>
                </button>
                <button className="flex-1 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                  Remove from Shortlist
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shortlist;