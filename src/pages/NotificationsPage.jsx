import React, { useState } from 'react';
import { Search, Check, Filter, Calendar, User, Star, Trash2, Bell, Eye, UserPlus, RefreshCw, X } from 'lucide-react';

export default function NotificationsPage() {
  const [selectedFilter, setSelectedFilter] = useState('All types');
  const [readStatus, setReadStatus] = useState('Unread');
  const [timeRange, setTimeRange] = useState('Today');
  const [dailySummary, setDailySummary] = useState(true);
  const [weeklySummary, setWeeklySummary] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const notifications = [
    {
      id: 1,
      type: 'upload',
      title: 'New Resume Uploaded',
      description: 'John Doe\'s resume added to role "Senior Frontend Engineer".',
      time: '2m ago',
      icon: <User className="w-5 h-5" />,
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      actions: ['View', 'Open Role'],
      unread: true
    },
    {
      id: 2,
      type: 'match',
      title: 'Top Candidate Found',
      description: 'Ava Patel matches 92% for "Staff Frontend Engineer".',
      time: '12m ago',
      icon: <Star className="w-5 h-5" />,
      color: 'bg-gradient-to-r from-purple-500 to-purple-600',
      actions: ['View Profile', 'Shortlist'],
      unread: true
    },
    {
      id: 3,
      type: 'update',
      title: 'Shortlist Updated',
      description: '3 candidates moved to "Onsite Interview".',
      time: '1h ago',
      icon: <RefreshCw className="w-5 h-5" />,
      color: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
      actions: ['Review', 'Open Shortlist'],
      unread: true
    },
    {
      id: 4,
      type: 'recommendation',
      title: 'New Recommendation',
      description: 'System recommends reviewing "Machine Learning Engineer" candidates.',
      time: 'Today, 9:24 AM',
      icon: <Bell className="w-5 h-5" />,
      color: 'bg-gradient-to-r from-green-500 to-green-600',
      actions: ['View', 'Dismiss'],
      unread: false
    },
    {
      id: 5,
      type: 'reminder',
      title: 'Interview Reminder',
      description: 'Interview with Liam Chen scheduled for tomorrow at 10:00 AM.',
      time: 'Yesterday',
      icon: <Calendar className="w-5 h-5" />,
      color: 'bg-gradient-to-r from-orange-500 to-orange-600',
      actions: ['View Details', 'Reschedule'],
      unread: false
    },
    {
      id: 6,
      type: 'removal',
      title: 'Resume Removed',
      description: 'Obsolete resume deleted from candidate profile.',
      time: '2d ago',
      icon: <Trash2 className="w-5 h-5" />,
      color: 'bg-gradient-to-r from-red-500 to-red-600',
      actions: ['Undo', 'View Profile'],
      unread: false
    }
  ];

  const filteredNotifications = notifications.filter(notification => {
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         notification.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRead = readStatus === 'All' || 
                       (readStatus === 'Unread' && notification.unread) || 
                       (readStatus === 'Read' && !notification.unread);
    return matchesSearch && matchesRead;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Main Content */}
      <div className="flex flex-col">
        {/* Header */}
        <div className="bg-white shadow-lg border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Notifications
              </h1>
            </div>
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors">
              ✓ Mark all as read
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex">
          {/* Notifications List */}
          <div className="flex-1 p-6">
            {/* Search and Filters */}
            <div className="mb-6 flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search notifications..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Filter Dropdowns */}
              <div className="flex gap-3">
                <select
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm"
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                >
                  <option>All types</option>
                  <option>Upload</option>
                  <option>Match</option>
                  <option>Update</option>
                  <option>Recommendation</option>
                  <option>Reminder</option>
                </select>

                <select
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm"
                  value={readStatus}
                  onChange={(e) => setReadStatus(e.target.value)}
                >
                  <option>Unread</option>
                  <option>Read</option>
                  <option>All</option>
                </select>

                <select
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm"
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                >
                  <option>Today</option>
                  <option>Yesterday</option>
                  <option>This Week</option>
                  <option>This Month</option>
                </select>
              </div>
            </div>

            {/* Notifications */}
            <div className="space-y-4">
              {filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                    notification.unread ? 'border-l-4 border-l-purple-500 shadow-purple-100' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`${notification.color} rounded-2xl p-3 text-white flex-shrink-0 shadow-lg`}>
                      {notification.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-bold text-gray-900">
                              {notification.title}
                            </h3>
                            {notification.unread && (
                              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                            {notification.description}
                          </p>
                          <p className="text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded-full inline-block">
                            {notification.time}
                          </p>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2 ml-4">
                          {notification.actions.map((action, index) => (
                            <button
                              key={index}
                              className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 transform hover:scale-105 ${
                                index === notification.actions.length - 1
                                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg'
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                              }`}
                            >
                              {action}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-8 flex justify-between items-center bg-white rounded-2xl p-6 shadow-lg">
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <Bell className="w-4 h-4" />
                Showing recent notifications
              </p>
              <div className="flex gap-3">
                <button className="px-6 py-2 text-sm text-gray-600 hover:text-gray-900 font-medium bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  Load older
                </button>
                <button className="px-6 py-2 text-sm bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 font-medium shadow-lg transform hover:scale-105 transition-all">
                  Preferences
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar Filters */}
          <div className="w-80 bg-white border-l border-gray-200 p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-lg">
                <Filter className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Filters</h2>
            </div>

            {/* Filter Sections */}
            <div className="space-y-8">
              {/* Type Filter */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-2xl">
                <h3 className="text-sm font-bold text-gray-700 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Type
                </h3>
                <div className="space-y-3">
                  {['All types', 'Upload', 'Match', 'Update', 'Recommendation', 'Reminder'].map((type) => (
                    <label key={type} className="flex items-center group cursor-pointer">
                      <input
                        type="radio"
                        name="type"
                        className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                        checked={selectedFilter === type}
                        onChange={() => setSelectedFilter(type)}
                      />
                      <span className="ml-3 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Time Range Filter */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-2xl">
                <h3 className="text-sm font-bold text-gray-700 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Time range
                </h3>
                <div className="space-y-3">
                  {['Today', 'Yesterday', 'This Week', 'This Month'].map((range) => (
                    <label key={range} className="flex items-center group cursor-pointer">
                      <input
                        type="radio"
                        name="timeRange"
                        className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                        checked={timeRange === range}
                        onChange={() => setTimeRange(range)}
                      />
                      <span className="ml-3 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        {range}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Read Status Filter */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-2xl">
                <h3 className="text-sm font-bold text-gray-700 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Read status
                </h3>
                <div className="space-y-3">
                  {['All', 'Unread', 'Read'].map((status) => (
                    <label key={status} className="flex items-center group cursor-pointer">
                      <input
                        type="radio"
                        name="readStatus"
                        className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500"
                        checked={readStatus === status}
                        onChange={() => setReadStatus(status)}
                      />
                      <span className="ml-3 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        {status}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Digest Settings */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-lg">
                  <Bell className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Digest</h2>
              </div>
              <p className="text-sm text-gray-600 mb-6 bg-gray-50 p-3 rounded-lg">
                Control daily/weekly summaries
              </p>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <span className="text-sm font-medium text-gray-700">Daily summary</span>
                  <button
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-200 transform hover:scale-110 ${
                      dailySummary ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg' : 'bg-gray-300'
                    }`}
                    onClick={() => setDailySummary(!dailySummary)}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 shadow-sm ${
                        dailySummary ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                  <span className="text-sm font-medium text-gray-700">Weekly summary</span>
                  <button
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-200 transform hover:scale-110 ${
                      weeklySummary ? 'bg-gradient-to-r from-green-500 to-blue-500 shadow-lg' : 'bg-gray-300'
                    }`}
                    onClick={() => setWeeklySummary(!weeklySummary)}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 shadow-sm ${
                        weeklySummary ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}