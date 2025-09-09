import React, { useState } from 'react';
import { Search, Save } from 'lucide-react';

export default function AdminSettings() {
    const [jobRole, setJobRole] = useState('Senior Frontend Engineer');
    const [modelAggressiveness, setModelAggressiveness] = useState(75);
    const [recencyBoost, setRecencyBoost] = useState(60);
    const [experienceEmphasis, setExperienceEmphasis] = useState(85);
    const [reactWeight, setReactWeight] = useState(80);
    const [typescriptWeight, setTypescriptWeight] = useState(65);
    const [systemDesignWeight, setSystemDesignWeight] = useState(50);
    const [autoShortlist, setAutoShortlist] = useState(false);
    const [emailNotify, setEmailNotify] = useState(false);
    const [anonymizeNames, setAnonymizeNames] = useState(false);
    const [showSkillGaps, setShowSkillGaps] = useState(true);
    const [notes, setNotes] = useState('');

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
            <div className="max-w-7xl mx-auto">

                {/* Main Content */}
                <div className="flex flex-wrap gap-6">
                    {/* Job Role Section */}
                    <div className="bg-white rounded-xl shadow-lg p-6 flex-1 min-w-80">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Job Role</h2>
                        <p className="text-gray-600 mb-4">Select the role to tailor analysis parameters.</p>

                        <select
                            value={jobRole}
                            onChange={(e) => setJobRole(e.target.value)}
                            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                        >
                            <option>Senior Frontend Engineer</option>
                            <option>Backend Developer</option>
                            <option>Full Stack Developer</option>
                            <option>DevOps Engineer</option>
                            <option>Data Scientist</option>
                        </select>
                    </div>

                    {/* Ranking Algorithm Section */}
                    <div className="bg-white rounded-xl shadow-lg p-6 flex-1 min-w-80">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Ranking Algorithm</h2>
                        <p className="text-gray-600 mb-6">Tune how resumes are scored and prioritized.</p>

                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="font-medium text-gray-700">Model Aggressiveness</label>
                                    <span className="text-purple-600 font-semibold">{modelAggressiveness}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={modelAggressiveness}
                                    onChange={(e) => setModelAggressiveness(e.target.value)}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                                    style={{
                                        background: `linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${modelAggressiveness}%, #e5e7eb ${modelAggressiveness}%, #e5e7eb 100%)`
                                    }}
                                />
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="font-medium text-gray-700">Recency Boost</label>
                                    <span className="text-blue-600 font-semibold">{recencyBoost}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={recencyBoost}
                                    onChange={(e) => setRecencyBoost(e.target.value)}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                    style={{
                                        background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${recencyBoost}%, #e5e7eb ${recencyBoost}%, #e5e7eb 100%)`
                                    }}
                                />
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="font-medium text-gray-700">Experience Emphasis</label>
                                    <span className="text-emerald-600 font-semibold">{experienceEmphasis}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={experienceEmphasis}
                                    onChange={(e) => setExperienceEmphasis(e.target.value)}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                    style={{
                                        background: `linear-gradient(to right, #10b981 0%, #10b981 ${experienceEmphasis}%, #e5e7eb ${experienceEmphasis}%, #e5e7eb 100%)`
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Skills Weightage Section */}
                    <div className="bg-white rounded-xl shadow-lg p-6 flex-1 min-w-96">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Skills Weightage</h2>
                        <p className="text-gray-600 mb-6">Adjust importance for key skills in matching.</p>

                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="font-medium text-gray-700">React</label>
                                    <span className="text-purple-600 font-semibold">{reactWeight}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={reactWeight}
                                    onChange={(e) => setReactWeight(e.target.value)}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                    style={{
                                        background: `linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${reactWeight}%, #e5e7eb ${reactWeight}%, #e5e7eb 100%)`
                                    }}
                                />
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="font-medium text-gray-700">TypeScript</label>
                                    <span className="text-blue-600 font-semibold">{typescriptWeight}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={typescriptWeight}
                                    onChange={(e) => setTypescriptWeight(e.target.value)}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                    style={{
                                        background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${typescriptWeight}%, #e5e7eb ${typescriptWeight}%, #e5e7eb 100%)`
                                    }}
                                />
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="font-medium text-gray-700">System Design</label>
                                    <span className="text-orange-600 font-semibold">{systemDesignWeight}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={systemDesignWeight}
                                    onChange={(e) => setSystemDesignWeight(e.target.value)}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                    style={{
                                        background: `linear-gradient(to right, #ea580c 0%, #ea580c ${systemDesignWeight}%, #e5e7eb ${systemDesignWeight}%, #e5e7eb 100%)`
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Preferences Section */}
                    <div className="bg-white rounded-xl shadow-lg p-6 flex-1 min-w-80">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Preferences</h2>
                        <p className="text-gray-600 mb-6">Toggle optional behaviors for recruiters.</p>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <span className="font-medium text-gray-700">Auto-shortlist top matches</span>
                                <button
                                    onClick={() => setAutoShortlist(!autoShortlist)}
                                    className={`w-12 h-6 rounded-full transition-colors duration-200 ${autoShortlist ? 'bg-purple-500' : 'bg-gray-300'} relative`}
                                >
                                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ${autoShortlist ? 'translate-x-6' : 'translate-x-0.5'} absolute top-0.5`}></div>
                                </button>
                            </div>

                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <span className="font-medium text-gray-700">Notify via email on new fit</span>
                                <button
                                    onClick={() => setEmailNotify(!emailNotify)}
                                    className={`w-12 h-6 rounded-full transition-colors duration-200 ${emailNotify ? 'bg-blue-500' : 'bg-gray-300'} relative`}
                                >
                                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ${emailNotify ? 'translate-x-6' : 'translate-x-0.5'} absolute top-0.5`}></div>
                                </button>
                            </div>

                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <span className="font-medium text-gray-700">Anonymize candidate names</span>
                                <button
                                    onClick={() => setAnonymizeNames(!anonymizeNames)}
                                    className={`w-12 h-6 rounded-full transition-colors duration-200 ${anonymizeNames ? 'bg-emerald-500' : 'bg-gray-300'} relative`}
                                >
                                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ${anonymizeNames ? 'translate-x-6' : 'translate-x-0.5'} absolute top-0.5`}></div>
                                </button>
                            </div>

                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <span className="font-medium text-gray-700">Show skill gaps in list</span>
                                <button
                                    onClick={() => setShowSkillGaps(!showSkillGaps)}
                                    className={`w-12 h-6 rounded-full transition-colors duration-200 ${showSkillGaps ? 'bg-purple-500' : 'bg-gray-300'} relative`}
                                >
                                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ${showSkillGaps ? 'translate-x-6' : 'translate-x-0.5'} absolute top-0.5`}></div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Notes Section */}
                    <div className="bg-white rounded-xl shadow-lg p-6 w-full">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Notes</h2>
                        <textarea
                            placeholder="Add any notes or instructions for reviewers..."
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            rows={4}
                            className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                        />
                    </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end mt-8">
                    <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                        <Save className="w-5 h-5" />
                        Save Settings
                    </button>
                </div>
            </div>
        </div>
    );
}