'use client';

import { useState } from 'react';

interface Client {
    id: number;
    name: string;
    age: number;
    gender: string;
    phone: string;
    location: string;
    lastSession: string;
    condition: string;
    status: string;
    therapist: string;
}

interface PatientModalProps {
    patient: Client | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function PatientModal({ patient, isOpen, onClose }: PatientModalProps) {
    if (!isOpen || !patient) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                <div className="p-6 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-gray-900">Client Details</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
                            <div className="space-y-3">
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Full Name</label>
                                    <p className="text-gray-900">{patient.name}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Age</label>
                                    <p className="text-gray-900">{patient.age} years old</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Gender</label>
                                    <p className="text-gray-900">{patient.gender}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Phone</label>
                                    <p className="text-gray-900">{patient.phone}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Location</label>
                                    <p className="text-gray-900">{patient.location}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Medical Information</h3>
                            <div className="space-y-3">
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Primary Condition</label>
                                    <p className="text-gray-900">{patient.condition}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Status</label>
                                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${patient.status === 'Active'
                                        ? 'bg-green-100 text-green-800'
                                        : patient.status === 'Follow-up'
                                            ? 'bg-yellow-100 text-yellow-800'
                                            : 'bg-blue-100 text-blue-800'
                                        }`}>
                                        {patient.status}
                                    </span>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Last Session</label>
                                    <p className="text-gray-900">{new Date(patient.lastSession).toLocaleDateString()}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Therapist</label>
                                    <p className="text-gray-900">{patient.therapist}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Notes</h3>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-gray-700">
                                Patient shows good progress with current treatment plan.
                                Recommended to continue medication and schedule follow-up in 2 weeks.
                                Blood pressure readings have improved significantly.
                            </p>
                            <p className="text-sm text-gray-500 mt-2">Last updated: {new Date(patient.lastSession).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        Close
                    </button>
                    <button className="px-4 py-2 bg-[#9333EA] text-white rounded-lg hover:bg-purple-700 transition-colors">
                        Schedule Session
                    </button>
                </div>
            </div>
        </div>
    );
}