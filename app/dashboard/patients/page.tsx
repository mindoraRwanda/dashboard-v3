'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import {
    Search,
    Filter,
    Plus,
    Phone,
    MapPin,
    Calendar,
    FileText,
    Activity,
    Heart
} from 'lucide-react';
import { clients } from '../../data/dummyData';

export default function ClientsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedClient, setSelectedClient] = useState<typeof clients[0] | null>(null);

    const filteredClients = clients.filter(client =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active':
                return 'bg-green-100 text-green-800';
            case 'Follow-up':
                return 'bg-yellow-100 text-yellow-800';
            case 'Stable':
                return 'bg-blue-100 text-blue-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Clients</h1>
                    <p className="text-gray-600 mt-1">Manage your client records and therapy sessions</p>
                </div>
                <Button className="mt-4 sm:mt-0 bg-[#9333EA] hover:bg-purple-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Client
                </Button>
            </div>

            {/* Search and Filter */}
            <Card>
                <CardContent className="pt-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <Input
                                placeholder="Search clients by name, condition, or location..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                        <Button variant="outline">
                            <Filter className="h-4 w-4 mr-2" />
                            Filter
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Client Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Clients</p>
                                <p className="text-2xl font-bold">{clients.length}</p>
                            </div>
                            <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <Activity className="h-4 w-4 text-blue-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Active</p>
                                <p className="text-2xl font-bold">{clients.filter(c => c.status === 'Active').length}</p>
                            </div>
                            <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                                <Activity className="h-4 w-4 text-green-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Follow-up</p>
                                <p className="text-2xl font-bold">{clients.filter(c => c.status === 'Follow-up').length}</p>
                            </div>
                            <div className="h-8 w-8 bg-yellow-100 rounded-full flex items-center justify-center">
                                <Activity className="h-4 w-4 text-yellow-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Stable</p>
                                <p className="text-2xl font-bold">{clients.filter(c => c.status === 'Stable').length}</p>
                            </div>
                            <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <Heart className="h-4 w-4 text-blue-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Clients List */}
            <Card>
                <CardHeader>
                    <CardTitle>Client Records</CardTitle>
                    <CardDescription>
                        {filteredClients.length} of {clients.length} clients
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredClients.map((client) => (
                            <Dialog key={client.id}>
                                <DialogTrigger asChild>
                                    <Card className="cursor-pointer hover:shadow-md transition-shadow">
                                        <CardContent className="pt-6">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center space-x-3">
                                                    <Avatar>
                                                        <AvatarFallback>
                                                            {client.name.split(' ').map(n => n[0]).join('')}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900">{client.name}</h3>
                                                        <p className="text-sm text-gray-600">{client.age} years, {client.gender}</p>
                                                    </div>
                                                </div>
                                                <Badge className={getStatusColor(client.status)}>
                                                    {client.status}
                                                </Badge>
                                            </div>

                                            <div className="space-y-2">
                                                <div className="flex items-center text-sm text-gray-600">
                                                    <FileText className="h-4 w-4 mr-2" />
                                                    {client.condition}
                                                </div>
                                                <div className="flex items-center text-sm text-gray-600">
                                                    <MapPin className="h-4 w-4 mr-2" />
                                                    {client.location}
                                                </div>
                                                <div className="flex items-center text-sm text-gray-600">
                                                    <Calendar className="h-4 w-4 mr-2" />
                                                    Last session: {new Date(client.lastSession).toLocaleDateString()}
                                                </div>
                                                <div className="flex items-center text-sm text-gray-600">
                                                    <Heart className="h-4 w-4 mr-2" />
                                                    Therapist: {client.therapist}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </DialogTrigger>

                                <DialogContent className="max-w-2xl">
                                    <DialogHeader>
                                        <DialogTitle>Client Details</DialogTitle>
                                        <DialogDescription>
                                            Comprehensive information for {client.name}
                                        </DialogDescription>
                                    </DialogHeader>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
                                            <div className="space-y-3">
                                                <div>
                                                    <label className="text-sm font-medium text-gray-500">Full Name</label>
                                                    <p className="text-gray-900">{client.name}</p>
                                                </div>
                                                <div>
                                                    <label className="text-sm font-medium text-gray-500">Age</label>
                                                    <p className="text-gray-900">{client.age} years old</p>
                                                </div>
                                                <div>
                                                    <label className="text-sm font-medium text-gray-500">Gender</label>
                                                    <p className="text-gray-900">{client.gender}</p>
                                                </div>
                                                <div>
                                                    <label className="text-sm font-medium text-gray-500">Phone</label>
                                                    <p className="text-gray-900 flex items-center">
                                                        <Phone className="h-4 w-4 mr-2" />
                                                        {client.phone}
                                                    </p>
                                                </div>
                                                <div>
                                                    <label className="text-sm font-medium text-gray-500">Location</label>
                                                    <p className="text-gray-900 flex items-center">
                                                        <MapPin className="h-4 w-4 mr-2" />
                                                        {client.location}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900 mb-4">Mental Health Information</h3>
                                            <div className="space-y-3">
                                                <div>
                                                    <label className="text-sm font-medium text-gray-500">Primary Condition</label>
                                                    <p className="text-gray-900">{client.condition}</p>
                                                </div>
                                                <div>
                                                    <label className="text-sm font-medium text-gray-500">Status</label>
                                                    <Badge className={getStatusColor(client.status)}>
                                                        {client.status}
                                                    </Badge>
                                                </div>
                                                <div>
                                                    <label className="text-sm font-medium text-gray-500">Last Session</label>
                                                    <p className="text-gray-900">{new Date(client.lastSession).toLocaleDateString()}</p>
                                                </div>
                                                <div>
                                                    <label className="text-sm font-medium text-gray-500">Assigned Therapist</label>
                                                    <p className="text-gray-900">{client.therapist}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Session Notes</h3>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <p className="text-gray-700">
                                                Client shows good progress with current therapy plan.
                                                Recommended to continue CBT sessions and schedule follow-up in 2 weeks.
                                                Anxiety levels have decreased significantly with mindfulness techniques.
                                            </p>
                                            <p className="text-sm text-gray-500 mt-2">
                                                Last updated: {new Date(client.lastSession).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex justify-end space-x-3 mt-6">
                                        <Button variant="outline">Edit Client</Button>
                                        <Button className="bg-[#9333EA] hover:bg-purple-700">
                                            Schedule Session
                                        </Button>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        ))}
                    </div>

                    {filteredClients.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500">No clients found matching your search criteria.</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}