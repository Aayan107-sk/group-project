import { useState } from 'react';
import { Search, Share, Star, MapPin, Calendar, User, TrendingUp, AlertTriangle, CheckCircle2, BarChart3, Users, Database, Link, FileText, RotateCcw, Download } from 'lucide-react';

export default function CandidateResult() {
  const [isShortlisted, setIsShortlisted] = useState(false);

  const CircularProgress = ({ value, size = 120 }) => {
    const radius = (size - 8) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#8b5cf6"
            strokeWidth="8"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-300 ease-in-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-gray-800">{value}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
   

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6">
        {/* Search and Actions Bar */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Candidate Result</h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search candidates..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Share className="w-4 h-4" />
              Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              <FileText className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>

        {/* Candidate Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                A
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Jane Smith · Senior Product Designer</h3>
                <p className="text-gray-600 text-sm mt-1 max-w-md">
                  8+ years experience in SaaS and fintech. Strong in end-to-end product design, 
                  systems thinking, and cross-functional collaboration.
                </p>
                <div className="flex items-center gap-6 mt-3 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Location: Remote
                  </div>
                  <div className="flex items-center gap-1">
                    <span>Last role: Lead Designer @ Finty</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Availability: 2 weeks
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsShortlisted(!isShortlisted)}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  isShortlisted 
                    ? 'bg-purple-50 text-purple-600' 
                    : 'hover:bg-gray-50 text-gray-600'
                }`}
              >
                <Star className={`w-5 h-5 ${isShortlisted ? 'fill-current' : ''}`} />
                <span className="text-xs">Shortlist</span>
              </button>
              <button className="flex flex-col items-center gap-1 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                <User className="w-5 h-5" />
                <span className="text-xs">Request Interview</span>
              </button>
            </div>
          </div>
        </div>

        {/* Skills, Strengths, Weaknesses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Extracted Skills */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Extracted Skills
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Figma, Design Systems, Prototyping, UX Research</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Interaction Design, Accessibility, Usability Testing</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Stakeholder Management, Roadmapping</span>
              </div>
            </div>
          </div>

          {/* Strengths */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Strengths
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <TrendingUp className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Built scalable design system used across 6 products.</span>
              </div>
              <div className="flex items-start gap-2">
                <Users className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Mentored 4 designers; improved team delivery cadence.</span>
              </div>
              <div className="flex items-start gap-2">
                <Database className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Data-informed decision making; measurable impact on KPIs.</span>
              </div>
            </div>
          </div>

          {/* Weaknesses */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Weaknesses
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Limited experience with native mobile platforms.</span>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Basic frontend coding; relies on engineers for prototypes/fixes.</span>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Mostly remote teams; fewer on-site collaboration examples.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Resume Improvement Tips */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Resume Improvement Tips
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <BarChart3 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Quantify outcomes for key projects (e.g., +18% activation, -12% churn).</span>
                </div>
                <div className="flex items-start gap-2">
                  <FileText className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Group work by product areas and highlight system ownership.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FileText className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Reduce summary length; front-load top strengths and tools.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Link className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Add links to portfolio case studies and prototypes.</span>
                </div>
              </div>
            </div>
            
            <div className="ml-8 flex flex-col items-center">
              <div className="mb-4">
                <CircularProgress value={72} />
              </div>
              <div className="text-center mb-6">
                <p className="text-sm text-gray-500 mb-2">Overall Resume Score</p>
                <div className="space-y-2 w-32">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Clarity</span>
                    <div className="w-16 h-1.5 bg-gray-200 rounded-full">
                      <div className="w-4/5 h-full bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Impact</span>
                    <div className="w-16 h-1.5 bg-gray-200 rounded-full">
                      <div className="w-3/5 h-full bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Relevance</span>
                    <div className="w-16 h-1.5 bg-gray-200 rounded-full">
                      <div className="w-4/5 h-full bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-1 px-3 py-2 text-purple-600 border border-purple-300 rounded-lg hover:bg-purple-50 text-sm">
                  <RotateCcw className="w-4 h-4" />
                  Re-analyze
                </button>
                <button className="flex items-center gap-1 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm">
                  <Download className="w-4 h-4" />
                  Download Tips
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}