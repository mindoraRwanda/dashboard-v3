'use client';

import { useState } from 'react';
import { clients, appointments, communityPosts, statistics } from '../data/dummyData';
import PatientModal from './PatientModal';

export default function DoctorDashboard() {
    const [selectedPatient, setSelectedPatient] = useState<typeof clients[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePatientClick = (client: typeof clients[0]) => {
        setSelectedPatient(client);
        setIsModalOpen(true);
    };

    return (
        <>
            <div className="space-y-6">
                {/* Welcome Section */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, Dr. Uwimana</h2>
                    <p className="text-gray-600">Here's what's happening with your patients today.</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className="p-2 bg-[#9333EA] bg-opacity-10 rounded-lg">
                                <svg className="w-6 h-6 text-[#9333EA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Active Clients</p>
                                <p className="text-2xl font-semibold text-gray-900">{statistics.activeClients}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Today's Appointments</p>
                                <p className="text-2xl font-semibold text-gray-900">{appointments.filter(apt => apt.date === '2024-11-05').length}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Completed This Month</p>
                                <p className="text-2xl font-semibold text-gray-900">{statistics.completedSessions}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <div className="p-2 bg-yellow-100 rounded-lg">
                                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Pending Appointments</p>
                                <p className="text-2xl font-semibold text-gray-900">{statistics.pendingSessions}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Today's Appointments */}
                    <div className="bg-white rounded-lg shadow">
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900">Today's Appointments</h3>
                        </div>
                        <div className="p-6">
                            <div className="space-y-4">
                                {appointments.filter(apt => apt.date === '2024-11-05').map((appointment) => (
                                    <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                        <div>
                                            <p className="font-medium text-gray-900">{appointment.patientName}</p>
                                            <p className="text-sm text-gray-600">{appointment.time} - {appointment.type}</p>
                                        </div>
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${appointment.status === 'Confirmed'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {appointment.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Recent Patients */}
                    <div className="bg-white rounded-lg shadow">
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900">Recent Clients</h3>
                        </div>
                        <div className="p-6">
                            <div className="space-y-4">
                                {clients.slice(0, 4).map((client) => (
                                    <div
                                        key={client.id}
                                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                                        onClick={() => handlePatientClick(client)}
                                    >
                                        <div>
                                            <p className="font-medium text-gray-900">{client.name}</p>
                                            <p className="text-sm text-gray-600">{client.condition} • {client.location}</p>
                                        </div>
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${client.status === 'Active'
                                            ? 'bg-green-100 text-green-800'
                                            : client.status === 'Follow-up'
                                                ? 'bg-yellow-100 text-yellow-800'
                                                : 'bg-blue-100 text-blue-800'
                                            }`}>
                                            {client.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Community Activity */}
                <div className="bg-white rounded-lg shadow">
                    <div className="p-6 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900">Community Activity</h3>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            {communityPosts.slice(0, 3).map((post) => (
                                <div key={post.id} className="border-l-4 border-[#9333EA] pl-4">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-medium text-gray-900">{post.title}</h4>
                                        <span className="text-sm text-gray-500">{post.date}</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1">by {post.author}</p>
                                    <p className="text-sm text-gray-700 mt-2">{post.content}</p>
                                    <div className="flex items-center space-x-4 mt-2">
                                        <span className="text-xs text-gray-500">❤️ {post.likes}</span>
                                        <span className="text-xs text-gray-500">💬 {post.comments}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <PatientModal
                patient={selectedPatient}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}