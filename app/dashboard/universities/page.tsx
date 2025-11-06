'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    GraduationCap,
    MapPin,
    Phone,
    Users,
    BookOpen,
    Plus
} from 'lucide-react';

const universityDetails = [
    {
        name: 'University of Rwanda',
        location: 'Multiple Campuses',
        phone: '+250788234001',
        students: 2340,
        programs: 15,
        status: 'Active',
        type: 'Public University',
        healthPrograms: ['Clinical Psychology', 'Counseling Psychology', 'Psychiatry', 'Mental Health Nursing']
    },
    {
        name: 'Kigali Independent University (ULK)',
        location: 'Kigali, Gasabo',
        phone: '+250788234002',
        students: 1890,
        programs: 8,
        status: 'Active',
        type: 'Private University',
        healthPrograms: ['Clinical Psychology', 'Mental Health Counseling', 'Behavioral Therapy']
    },
    {
        name: 'Mount Kenya University Rwanda',
        location: 'Kigali, Nyarugenge',
        phone: '+250788234003',
        students: 1456,
        programs: 6,
        status: 'Active',
        type: 'Private University',
        healthPrograms: ['Counseling Psychology', 'Mental Health Studies', 'Psychological Research']
    }
];

export default function UniversitiesPage() {
    const totalStudents = universityDetails.reduce((sum, uni) => sum + uni.students, 0);
    const totalPrograms = universityDetails.reduce((sum, uni) => sum + uni.programs, 0);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Partner Universities</h1>
                    <p className="text-gray-600 mt-1">Educational partnerships for mental health professional training</p>
                </div>
                <Button className="mt-4 sm:mt-0 bg-[#9333EA] hover:bg-purple-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add University
                </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Universities</p>
                                <p className="text-2xl font-bold">{universityDetails.length}</p>
                            </div>
                            <GraduationCap className="h-8 w-8 text-[#9333EA]" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Students</p>
                                <p className="text-2xl font-bold">{totalStudents.toLocaleString()}</p>
                            </div>
                            <Users className="h-8 w-8 text-green-600" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Psychology Programs</p>
                                <p className="text-2xl font-bold">{totalPrograms}</p>
                            </div>
                            <BookOpen className="h-8 w-8 text-blue-600" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Active Partnerships</p>
                                <p className="text-2xl font-bold">{universityDetails.filter(u => u.status === 'Active').length}</p>
                            </div>
                            <GraduationCap className="h-8 w-8 text-orange-600" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Universities Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {universityDetails.map((university, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-[#9333EA] bg-opacity-10 rounded-lg">
                                        <GraduationCap className="h-6 w-6 text-[#9333EA]" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg">{university.name}</CardTitle>
                                        <CardDescription>{university.type}</CardDescription>
                                    </div>
                                </div>
                                <Badge variant="secondary" className="bg-green-100 text-green-800">
                                    {university.status}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center text-sm text-gray-600">
                                <MapPin className="h-4 w-4 mr-2" />
                                {university.location}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <Phone className="h-4 w-4 mr-2" />
                                {university.phone}
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-gray-900">{university.students.toLocaleString()}</p>
                                    <p className="text-xs text-gray-500">Students</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-gray-900">{university.programs}</p>
                                    <p className="text-xs text-gray-500">Psychology Programs</p>
                                </div>
                            </div>

                            <div className="pt-4 border-t">
                                <h4 className="text-sm font-medium text-gray-900 mb-2">Psychology Programs</h4>
                                <div className="flex flex-wrap gap-1">
                                    {university.healthPrograms.map((program, idx) => (
                                        <Badge key={idx} variant="outline" className="text-xs">
                                            {program}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="flex space-x-2 pt-4">
                                <Button variant="outline" size="sm" className="flex-1">
                                    View Details
                                </Button>
                                <Button size="sm" className="flex-1 bg-[#9333EA] hover:bg-purple-700">
                                    Manage
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}