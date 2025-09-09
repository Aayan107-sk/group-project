import React from "react";

const resumes = [
  {
    id: 1,
    name: "Ava Patel",
    role: "Frontend Engineer",
    avatar:
      "https://randomuser.me/api/portraits/women/68.jpg",
    skills: ["React", "TypeScript", "CSS"],
    experience: "4 yrs",
    aiScore: 96,
  },
  {
    id: 2,
    name: "Lucas Nguyen",
    role: "Data Scientist",
    avatar:
      "https://randomuser.me/api/portraits/men/69.jpg",
    skills: ["Python", "TensorFlow", "SQL"],
    experience: "5 yrs",
    aiScore: 93,
  },
  {
    id: 3,
    name: "Mia Rodriguez",
    role: "Backend Engineer",
    avatar:
      "https://randomuser.me/api/portraits/men/70.jpg",
    skills: ["Node.js", "PostgreSQL", "AWS"],
    experience: "6 yrs",
    aiScore: 91,
  },
  {
    id: 4,
    name: "Ethan Chen",
    role: "ML Engineer",
    avatar:
      "https://randomuser.me/api/portraits/women/71.jpg",
    skills: ["PyTorch", "MLOps", "Kubernetes"],
    experience: "3 yrs",
    aiScore: 88,
  },
  {
    id: 5,
    name: "Sofia Ahmed",
    role: "Full-Stack Developer",
    avatar:
      "https://randomuser.me/api/portraits/women/72.jpg",
    skills: ["Next.js", "Prisma", "GraphQL"],
    experience: "7 yrs",
    aiScore: 85,
  },
];

export default function ResumePage() {
  return (
    <div className="flex flex-col p-8 space-y-6 bg-[#F9FAFB] min-h-screen">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-900">Resumes</h1>

      {/* Search & Filters */}
      <section className="bg-white p-4 rounded-lg shadow-sm flex flex-wrap gap-4">
        <label className="basis-full font-semibold text-gray-800">
          Search & Filters
        </label>
        <input
          type="search"
          placeholder="Search by candidate or keyword"
          className="flex-grow min-w-[220px] px-4 py-2 border border-gray-200 rounded-md text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          placeholder="Filter by skills (e.g., React, Python)"
          className="flex-grow min-w-[220px] px-4 py-2 border border-gray-200 rounded-md text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="number"
          placeholder="AI score ≥ 80"
          className="w-28 px-4 py-2 border border-gray-200 rounded-md text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          min={0}
          max={100}
        />
        <input
          type="text"
          placeholder="Experience ≥ 3y"
          className="w-28 px-4 py-2 border border-gray-200 rounded-md text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <div className="flex items-center space-x-2 ml-auto">
          <button className="px-3 py-1 rounded-md text-gray-600 bg-gray-200 hover:bg-gray-300">
            Clear
          </button>
          <button className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
            Apply Filters
          </button>
        </div>
      </section>

      {/* Resume List */}
      <section className="bg-white p-4 rounded-lg shadow-sm flex flex-col space-y-4">
        <h2 className="font-semibold text-gray-900 mb-2">Resume List</h2>
        <p className="text-gray-400 text-sm mb-4">
          Searchable, filterable table of candidates
        </p>

        {/* Table Header */}
        <div className="flex text-gray-500 text-sm font-semibold border-b border-gray-200 pb-2 px-2">
          <div className="flex-1">Candidate Name</div>
          <div className="flex-[2]">Skills</div>
          <div className="w-16 text-center">Experience</div>
          <div className="w-24 text-center">AI Ranking Score</div>
          <div className="w-36 text-center">Actions</div>
        </div>

        {/* List Items */}
        {resumes.map((r) => (
          <div
            key={r.id}
            className="flex items-center bg-[#F8FAFC] rounded-2xl hover:shadow-lg hover:bg-white transition-shadow px-2 py-3 space-x-4"
          >
            {/* Candidate Info */}
            <div className="flex-1 flex items-center space-x-3">
              <img
                src={r.avatar}
                alt={r.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">{r.name}</p>
                <p className="text-sm text-gray-400">{r.role}</p>
              </div>
            </div>

            {/* Skills */}
            <div className="flex-[2] flex space-x-2">
              {r.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-indigo-100 text-indigo-600 text-xs font-semibold px-2 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Experience */}
            <div className="w-16 text-center text-gray-900 font-medium">
              {r.experience}
            </div>

            {/* AI Ranking Score */}
            <div className="w-24 text-center">
              <span className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {r.aiScore}
              </span>
            </div>

            {/* Actions */}
            <div className="w-36 flex justify-center items-center space-x-4">
              <button className="text-indigo-700 font-medium hover:underline">
                View
              </button>
              <button className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-700">
                Shortlist
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
