'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import {
    Calendar,
    Clock,
    Plus,
    Search,
    Filter,
    CheckCircle,
    XCircle,
    AlertCircle
} from 'lucide-react';
import { appointments } from '../../data/dummyData';

export default function AppointmentsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState<string>('all');

    const filteredAppointments = appointments.filter(appointment => {
        const matchesSearch = appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            appointment.type.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterStatus === 'all' || appointment.status.toLowerCase() === filterStatus.toLowerCase();
        return matchesSearch && matchesFilter;
    });

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'Confirmed':
                return <CheckCircle className="h-4 w-4 text-green-600" />;
            case 'Pending':
                return <AlertCircle className="h-4 w-4 text-yellow-600" />;
            case 'Cancelled':
                return <XCircle className="h-4 w-4 text-red-600" />;
            default:
                return <Clock className="h-4 w-4 text-gray-600" />;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Confirmed':
                return 'bg-green-100 text-green-800';
            case 'Pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'Cancelled':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const todayAppointments = appointments.filter(apt => apt.date === '2024-11-05');
    const upcomingAppointments = appointments.filter(apt => new Date(apt.date) > new Date('2024-11-05'));
    const confirmedCount = appointments.filter(apt => apt.status === 'Confirmed').length;
    const pendingCount = appointments.filter(apt => apt.status === 'Pending').length;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>
                    <p className="text-gray-600 mt-1">Manage your appointment schedule</p>
                </div>
                <Button className="mt-4 sm:mt-0 bg-[#9333EA] hover:bg-purple-700">
                    <Plus className="h-4 w-4 mr-2" />
                    New Appointment
                </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Today</p>
                                <p className="text-2xl font-bold">{todayAppointments.length}</p>
                            </div>
                            <Calendar className="h-8 w-8 text-blue-600" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Upcoming</p>
                                <p className="text-2xl font-bold">{upcomingAppointments.length}</p>
                            </div>
                            <Clock className="h-8 w-8 text-orange-600" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Confirmed</p>
                                <p className="text-2xl font-bold">{confirmedCount}</p>
                            </div>
                            <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Pending</p>
                                <p className="text-2xl font-bold">{pendingCount}</p>
                            </div>
                            <AlertCircle className="h-8 w-8 text-yellow-600" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Search and Filter */}
            <Card>
                <CardContent className="pt-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <Input
                                placeholder="Search appointments by patient name or type..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                        <div className="flex gap-2">
                            <Button
                                variant={filterStatus === 'all' ? 'default' : 'outline'}
                                onClick={() => setFilterStatus('all')}
                                size="sm"
                            >
                                All
                            </Button>
                            <Button
                                variant={filterStatus === 'confirmed' ? 'default' : 'outline'}
                                onClick={() => setFilterStatus('confirmed')}
                                size="sm"
                            >
                                Confirmed
                            </Button>
                            <Button
                                variant={filterStatus === 'pending' ? 'default' : 'outline'}
                                onClick={() => setFilterStatus('pending')}
                                size="sm"
                            >
                                Pending
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Today's Appointments */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2" />
                        Today's Appointments
                    </CardTitle>
                    <CardDescription>
                        {todayAppointments.length} appointments scheduled for today
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {todayAppointments.length > 0 ? (
                        <div className="space-y-4">
                            {todayAppointments.map((appointment) => (
                                <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                                    <div className="flex items-center space-x-4">
                                        <Avatar>
                                            <AvatarFallback>
                                                {appointment.patientName.split(' ').map(n => n[0]).join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{appointment.patientName}</h3>
                                            <p className="text-sm text-gray-600">{appointment.type}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="text-right">
                                            <p className="font-medium">{appointment.time}</p>
                                            <p className="text-sm text-gray-600">{appointment.date}</p>
                                        </div>
                                        <Badge className={getStatusColor(appointment.status)}>
                                            {appointment.status}
                                        </Badge>
                                        <div className="flex space-x-2">
                                            <Button size="sm" variant="outline">
                                                Reschedule
                                            </Button>
                                            <Button size="sm" className="bg-[#9333EA] hover:bg-purple-700">
                                                Start
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500 py-8">No appointments scheduled for today</p>
                    )}
                </CardContent>
            </Card>

            {/* All Appointments */}
            <Card>
                <CardHeader>
                    <CardTitle>All Appointments</CardTitle>
                    <CardDescription>
                        {filteredAppointments.length} of {appointments.length} appointments
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {filteredAppointments.map((appointment) => (
                            <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
                                        {getStatusIcon(appointment.status)}
                                    </div>
                                    <Avatar>
                                        <AvatarFallback>
                                            {appointment.patientName.split(' ').map(n => n[0]).join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{appointment.patientName}</h3>
                                        <p className="text-sm text-gray-600">{appointment.type}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="text-right">
                                        <p className="font-medium">{appointment.time}</p>
                                        <p className="text-sm text-gray-600">{new Date(appointment.date).toLocaleDateString()}</p>
                                    </div>
                                    <Badge className={getStatusColor(appointment.status)}>
                                        {appointment.status}
                                    </Badge>
                                    <div className="flex space-x-2">
                                        <Button size="sm" variant="outline">
                                            Edit
                                        </Button>
                                        {appointment.status === 'Pending' && (
                                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                                Confirm
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredAppointments.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500">No appointments found matching your criteria.</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}