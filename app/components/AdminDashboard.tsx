'use client';

import { mentalHealthCenters, universities, clients, appointments, meditationSessions, statistics } from '../data/dummyData';
import StatsChart from './StatsChart';

export default function AdminDashboard() {
    return (
        <div className="space-y-6">
            {/* Welcome Section */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Admin Dashboard</h2>
                <p className="text-gray-600">Manage the entire Mindora healthcare ecosystem.</p>
            </div>

            {/* Main Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-r from-[#9333EA] to-purple-600 rounded-lg shadow p-6 text-white">
                    <div className="flex items-center">
                        <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium opacity-90">Total Users</p>
                            <p className="text-3xl font-bold">{statistics.totalUsers.toLocaleString()}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow p-6 text-white">
                    <div className="flex items-center">
                        <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium opacity-90">Mental Health Centers</p>
                            <p className="text-3xl font-bold">{statistics.totalMentalHealthCenters}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow p-6 text-white">
                    <div className="flex items-center">
                        <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium opacity-90">Universities</p>
                            <p className="text-3xl font-bold">{statistics.totalUniversities}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow p-6 text-white">
                    <div className="flex items-center">
                        <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium opacity-90">Monthly Growth</p>
                            <p className="text-3xl font-bold">{statistics.monthlyGrowth}%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Partner Hospitals */}
                <div className="bg-white rounded-lg shadow">
                    <div className="p-6 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900">Mental Health Centers</h3>
                    </div>
                    <div className="p-6">
                        <div className="space-y-3">
                            {mentalHealthCenters.map((center, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                        <span className="font-medium text-gray-900">{center}</span>
                                    </div>
                                    <span className="text-sm text-gray-500">Active</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Partner Universities */}
                <div className="bg-white rounded-lg shadow">
                    <div className="p-6 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900">Partner Universities</h3>
                    </div>
                    <div className="p-6">
                        <div className="space-y-3">
                            {universities.map((university, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                        <span className="font-medium text-gray-900">{university}</span>
                                    </div>
                                    <span className="text-sm text-gray-500">Active</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* System Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow">
                    <div className="p-6 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900">Session Analytics</h3>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Total Sessions</span>
                                <span className="font-semibold text-gray-900">{statistics.totalSessions}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Completed</span>
                                <span className="font-semibold text-green-600">{statistics.completedSessions}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Pending</span>
                                <span className="font-semibold text-yellow-600">{statistics.pendingSessions}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-[#9333EA] h-2 rounded-full"
                                    style={{ width: `${(statistics.completedSessions / statistics.totalSessions) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow">
                    <div className="p-6 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900">Community Engagement</h3>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Community Members</span>
                                <span className="font-semibold text-gray-900">{statistics.communityMembers}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Active Sessions</span>
                                <span className="font-semibold text-blue-600">{statistics.meditationSessions}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Engagement Rate</span>
                                <span className="font-semibold text-green-600">85.7%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow">
                    <div className="p-6 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900">Popular Meditation Sessions</h3>
                    </div>
                    <div className="p-6">
                        <div className="space-y-3">
                            {meditationSessions.slice(0, 4).map((session) => (
                                <div key={session.id} className="flex justify-between items-center">
                                    <div>
                                        <p className="font-medium text-gray-900 text-sm">{session.title}</p>
                                        <p className="text-xs text-gray-500">{session.duration} • {session.category}</p>
                                    </div>
                                    <span className="text-sm font-semibold text-[#9333EA]">{session.participants}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <StatsChart
                    title="User Distribution by Province"
                    data={[
                        { label: 'Kigali City', value: 456, color: '#9333EA' },
                        { label: 'Southern Province', value: 234, color: '#10B981' },
                        { label: 'Northern Province', value: 178, color: '#3B82F6' },
                        { label: 'Western Province', value: 102, color: '#F59E0B' },
                        { label: 'Eastern Province', value: 70, color: '#EF4444' }
                    ]}
                />

                <StatsChart
                    title="Most Common Conditions"
                    data={[
                        { label: 'Hypertension', value: 89, color: '#DC2626' },
                        { label: 'Diabetes', value: 67, color: '#7C3AED' },
                        { label: 'Arthritis', value: 45, color: '#059669' },
                        { label: 'Migraine', value: 33, color: '#D97706' },
                        { label: 'Back Pain', value: 28, color: '#2563EB' }
                    ]}
                />
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Recent System Activity</h3>
                </div>
                <div className="p-6">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">New user registration from Kigali University Teaching Hospital</span>
                            <span className="text-xs text-gray-500">2 minutes ago</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">Meditation session "Morning Mindfulness" completed by 23 users</span>
                            <span className="text-xs text-gray-500">15 minutes ago</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">System maintenance scheduled for tonight at 2:00 AM</span>
                            <span className="text-xs text-gray-500">1 hour ago</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">New community post published by Dr. Uwimana Jean</span>
                            <span className="text-xs text-gray-500">3 hours ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}