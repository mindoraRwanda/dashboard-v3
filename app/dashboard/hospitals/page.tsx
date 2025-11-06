'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Hospital,
    MapPin,
    Phone,
    Users,
    Activity,
    Plus,
    Heart
} from 'lucide-react';

const mentalHealthCenterDetails = [
    {
        name: 'Ndera Neuropsychiatric Hospital',
        location: 'Gasabo, Kigali',
        phone: '+250788123001',
        clients: 156,
        therapists: 23,
        status: 'Active',
        type: 'Specialized Mental Health Hospital',
        services: ['Inpatient Care', 'Outpatient Therapy', 'Crisis Intervention']
    },
    {
        name: 'Caraes Ndera Mental Health Center',
        location: 'Gasabo, Kigali',
        phone: '+250788123002',
        clients: 134,
        therapists: 19,
        status: 'Active',
        type: 'Community Mental Health Center',
        services: ['Counseling', 'Group Therapy', 'Family Support']
    },
    {
        name: 'King Faisal Hospital - Mental Health Unit',
        location: 'Kigali, Gasabo',
        phone: '+250788123003',
        clients: 189,
        therapists: 31,
        status: 'Active',
        type: 'Hospital Mental Health Unit',
        services: ['Psychiatric Care', 'Psychology Services', 'Medication Management']
    },
    {
        name: 'CHUK Psychiatry Department',
        location: 'Kigali, Nyarugenge',
        phone: '+250788123004',
        clients: 98,
        therapists: 15,
        status: 'Active',
        type: 'University Hospital Department',
        services: ['Clinical Psychology', 'Psychiatry', 'Research']
    },
    {
        name: 'CHUB Mental Health Services',
        location: 'Huye, Southern Province',
        phone: '+250788123005',
        clients: 87,
        therapists: 12,
        status: 'Active',
        type: 'Teaching Hospital Mental Health',
        services: ['Student Training', 'Community Outreach', 'Therapy']
    },
    {
        name: 'Rwanda Military Hospital - Psychology Unit',
        location: 'Kigali, Gasabo',
        phone: '+250788123006',
        clients: 76,
        therapists: 10,
        status: 'Active',
        type: 'Military Mental Health Unit',
        services: ['PTSD Treatment', 'Military Psychology', 'Family Counseling']
    },
    {
        name: 'Kibagabaga Hospital - Mental Health Clinic',
        location: 'Kigali, Gasabo',
        phone: '+250788123007',
        clients: 92,
        therapists: 14,
        status: 'Active',
        type: 'District Hospital Mental Health',
        services: ['Community Mental Health', 'Crisis Support', 'Therapy']
    }
];

export default function MentalHealthCentersPage() {
    const totalClients = mentalHealthCenterDetails.reduce((sum, center) => sum + center.clients, 0);
    const totalTherapists = mentalHealthCenterDetails.reduce((sum, center) => sum + center.therapists, 0);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Mental Health Centers</h1>
                    <p className="text-gray-600 mt-1">Manage mental health center partnerships across Rwanda</p>
                </div>
                <Button className="mt-4 sm:mt-0 bg-[#9333EA] hover:bg-purple-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Center
                </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Mental Health Centers</p>
                                <p className="text-2xl font-bold">{mentalHealthCenterDetails.length}</p>
                            </div>
                            <Hospital className="h-8 w-8 text-[#9333EA]" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Clients</p>
                                <p className="text-2xl font-bold">{totalClients}</p>
                            </div>
                            <Users className="h-8 w-8 text-green-600" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Mental Health Professionals</p>
                                <p className="text-2xl font-bold">{totalTherapists}</p>
                            </div>
                            <Heart className="h-8 w-8 text-blue-600" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Active Partnerships</p>
                                <p className="text-2xl font-bold">{mentalHealthCenterDetails.filter(h => h.status === 'Active').length}</p>
                            </div>
                            <Activity className="h-8 w-8 text-orange-600" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Mental Health Centers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mentalHealthCenterDetails.map((center, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-[#9333EA] bg-opacity-10 rounded-lg">
                                        <Hospital className="h-6 w-6 text-[#9333EA]" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg">{center.name}</CardTitle>
                                        <CardDescription>{center.type}</CardDescription>
                                    </div>
                                </div>
                                <Badge variant="secondary" className="bg-green-100 text-green-800">
                                    {center.status}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center text-sm text-gray-600">
                                <MapPin className="h-4 w-4 mr-2" />
                                {center.location}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <Phone className="h-4 w-4 mr-2" />
                                {center.phone}
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-gray-900">{center.clients}</p>
                                    <p className="text-xs text-gray-500">Clients</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-gray-900">{center.therapists}</p>
                                    <p className="text-xs text-gray-500">Therapists</p>
                                </div>
                            </div>

                            <div className="pt-4 border-t">
                                <h4 className="text-sm font-medium text-gray-900 mb-2">Services</h4>
                                <div className="flex flex-wrap gap-1">
                                    {center.services.map((service, idx) => (
                                        <Badge key={idx} variant="outline" className="text-xs">
                                            {service}
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