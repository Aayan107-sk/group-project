import React, { useState } from 'react';
import {
    ArrowLeft,
    Download,
    Star,
    Mail,
    Phone,
    Globe,
    MapPin
} from 'lucide-react';

const ResumeDetails = () => {
    const [shortlisted, setShortlisted] = useState(false);

    const skills = [
        'React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS', 'PostgreSQL',
        'Docker', 'Kubernetes', 'Python', 'TensorFlow'
    ];

    const experiences = [
        {
            title: 'Principal Engineer',
            company: 'NovaLabs',
            period: '2022 — Present',
            description: 'Led migration to microservices; 35% latency reduction'
        },
        {
            title: 'Senior Software Engineer',
            company: 'CloudPeak',
            period: '2019 — 2022',
            description: 'Built real-time analytics pipeline on AWS'
        },
        {
            title: 'Software Engineer',
            company: 'BrightApps',
            period: '2016 — 2019',
            description: 'Full-stack development with React/Node'
        }
    ];

    const education = [
        {
            degree: 'M.S. Computer Science',
            school: 'UC Berkeley',
            period: '2014 — 2016',
            focus: 'Focus: Distributed Systems'
        },
        {
            degree: 'B.S. Computer Science',
            school: 'UCLA',
            period: '2010 — 2014',
            focus: 'Magna Cum Laude'
        }
    ];

    const strengths = [
        'High impact on performance and reliability',
        'Mentorship and team leadership',
        'Strong system design capability'
    ];

    const weaknesses = [
        'Limited native mobile experience',
        'Needs deeper exposure to GCP stack'
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex">
            <div className="flex-1 p-8">

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                    <div className="flex justify-between items-start">
                        <div className="flex gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1494790108755-2616b612b589?w=80&h=80&fit=crop&crop=face"
                                alt="Jordan Lee"
                                className="w-16 h-16 rounded-full object-cover"
                            />
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-1">Jordan Lee</h2>
                                <p className="text-gray-600 mb-4">Senior Software Engineer • San Francisco, CA</p>
                                <div className="flex items-center gap-6 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        <span>jordan.lee@example.com</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone className="w-4 h-4" />
                                        <span>(415) 555-0199</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Globe className="w-4 h-4" />
                                        <span>linkedin.com/in/jordanlee</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                                <Download className="w-4 h-4" />
                                Download Resume
                            </button>
                            <button
                                onClick={() => setShortlisted(!shortlisted)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${shortlisted
                                    ? 'bg-purple-600 text-white'
                                    : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                                    }`}
                            >
                                <Star className={`w-4 h-4 ${shortlisted ? 'fill-current' : ''}`} />
                                {shortlisted ? 'Shortlisted' : 'Shortlist'} Candidate
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="flex-1">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Summary</h3>
                            <p className="text-gray-600 text-sm mb-4">Automated overview based on resume content</p>

                            <p className="text-gray-800 mb-6 leading-relaxed">
                                Jordan is a senior engineer specializing in scalable web platforms and
                                ML-powered features. Proven track record leading cross-functional teams,
                                improving performance, and mentoring juniors.
                            </p>

                            <div className="flex gap-2">
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Leadership</span>
                                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Performance</span>
                                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">System Design</span>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">Experience</h3>

                            <div className="space-y-6">
                                {experiences.map((exp, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-semibold text-gray-900">{exp.title} — {exp.company}</h4>
                                                <span className="text-sm text-gray-500">{exp.period}</span>
                                            </div>
                                            <p className="text-gray-600 text-sm">{exp.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">Education</h3>

                            <div className="space-y-6">
                                {education.map((edu, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-semibold text-gray-900">{edu.degree} — {edu.school}</h4>
                                                <span className="text-sm text-gray-500">{edu.period}</span>
                                            </div>
                                            <p className="text-gray-600 text-sm">{edu.focus}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="w-80">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Extracted Skills</h3>

                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Highlights</h3>
                            <p className="text-gray-600 text-sm mb-6">Strengths and areas to watch</p>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-3">Strengths</h4>
                                    <div className="space-y-2">
                                        {strengths.map((strength, index) => (
                                            <div key={index} className="flex items-start gap-2">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-sm text-gray-700">{strength}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-medium text-gray-900 mb-3">Weaknesses</h4>
                                    <div className="space-y-2">
                                        {weaknesses.map((weakness, index) => (
                                            <div key={index} className="flex items-start gap-2">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-sm text-gray-700">{weakness}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Ranking Score</h3>
                            <p className="text-gray-600 text-sm mb-6">Match against role requirements</p>

                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center justify-center w-16 h-16 bg-purple-600 text-white text-2xl font-bold rounded-lg">
                                    92
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium text-gray-900">Excellent match for Senior Full-Stack role</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeDetails;