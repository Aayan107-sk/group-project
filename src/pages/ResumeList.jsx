import React from 'react';



const ResumesPage = () => {

    const ResumeList = [
        {
            id: 1,
            name: 'Ava Patel',
            role: 'Frontend Engineer',
            skills: ['React', 'TypeScript', 'CSS'],
            experience: '4 yrs',
            score: 96,
        },
        {
            id: 2,
            name: 'Lucas Nguyen',
            role: 'Data Scientist',
            skills: ['Python', 'TensorFlow', 'SQL'],
            experience: '5 yrs',
            score: 93,
        },
        {
            id: 3,
            name: 'Mia Rodriguez',
            role: 'Backend Engineer',
            skills: ['Node.js', 'PostgreSQL', 'AWS'],
            experience: '6 yrs',
            score: 91,
        },
        {
            id: 4,
            name: 'Ethan Chen',
            role: 'ML Engineer',
            skills: ['PyTorch', 'MLOps', 'Kubernetes'],
            experience: '3 yrs',
            score: 88,
        },
        {
            id: 5,
            name: 'Sofia Ahmed',
            role: 'Full-Stack Developer',
            skills: ['Next.js', 'Prisma', 'GraphQL'],
            experience: '7 yrs',
            score: 85,
        },
    ];

    return (
        <div className="p-6 bg-white rounded-lg shadow-md max-w-full">
            

            {/* Search & Filters */}
            <div className="bg-gray-50 p-5 rounded-xl mb-8 flex flex-wrap gap-3">
                <input
                    type="text"
                    placeholder="Search by candidate or keyword"
                    className="flex-1 min-w-[180px] px-4 py-2 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
                <input
                    type="text"
                    placeholder="Filter by skills (e.g., React, Python)"
                    className="flex-1 min-w-[220px] px-4 py-2 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                    type="text"
                    placeholder="AI score ≥ 80"
                    className="w-[130px] px-3 py-2 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                    type="text"
                    placeholder="Experience ≥ 3y"
                    className="w-[130px] px-3 py-2 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300">Clear</button>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">Apply Filters</button>
            </div>

            {/* Resume List */}
            <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="font-semibold text-lg mb-2 text-gray-900">Resume List</h2>
                <p className="text-gray-400 text-sm mb-6">Searchable, filterable table of candidates</p>

                {/* Table Header */}
                <div className="grid grid-cols-[2.5fr_2fr_1fr_1fr_1.5fr] gap-4 px-4 py-2 text-gray-500 font-semibold border-b border-gray-200">
                    <div>Candidate Name</div>
                    <div>Skills</div>
                    <div>Experience</div>
                    <div>AI Ranking Score</div>
                    <div>Actions</div>
                </div>

                {/* Table Rows */}
                {ResumeList.map(({ id, name, role, skills, experience, score }) => (
                    <div
                        key={id}
                        className="grid grid-cols-[2.5fr_2fr_1fr_1fr_1.5fr] items-center gap-4 px-4 py-4 hover:bg-purple-50 rounded-lg"
                    >
                        {/* Candidate Name and Avatar */}
                        <div className="flex items-center space-x-3">
                            <img
                                src={`https://i.pravatar.cc/40?img=${id + 30}`}
                                alt={`${name} avatar`}
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <span className="font-semibold text-gray-800">{name}</span>
                                <br />
                                <span className="text-gray-400 text-sm">{role}</span>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="flex gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Experience */}
                        <div className="font-semibold text-gray-800">{experience}</div>

                        {/* AI Ranking Score */}
                        <div>
                            <span className="bg-purple-600 text-white rounded-full px-3 py-1 text-sm font-semibold">
                                {score}
                            </span>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                            <button className="bg-gray-100 px-4 py-1 rounded-full font-semibold text-gray-600 hover:bg-gray-200">
                                View
                            </button>
                            <button className="bg-purple-600 text-white px-4 py-1 rounded-full font-semibold hover:bg-purple-700">
                                Shortlist
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResumesPage;

