'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Users,
    Calendar,
    CheckCircle,
    Clock,
    TrendingUp,
    Activity,
    Heart,
    MessageCircle
} from 'lucide-react';
import { statistics, appointments, clients, communityPosts } from '../data/dummyData';

export default function DashboardPage() {
    const todayAppointments = appointments.filter(apt => apt.date === '2024-11-05');
    const recentClients = clients.slice(0, 4);
    const recentPosts = communityPosts.slice(0, 3);

    return (
        <div className="space-y-6">
            {/* Welcome Section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Welcome back, Dr. Uwimana</h1>
                    <p className="text-gray-600 mt-1">Here's what's happening with your clients today.</p>
                </div>
                <div className="mt-4 sm:mt-0">
                    <Button className="bg-[#9333EA] hover:bg-purple-700">
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule Session
                    </Button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
                        <Users className="h-4 w-4 text-[#9333EA]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{statistics.activeClients}</div>
                        <p className="text-xs text-muted-foreground">
                            +12% from last month
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Today's Sessions</CardTitle>
                        <Calendar className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{todayAppointments.length}</div>
                        <p className="text-xs text-muted-foreground">
                            2 confirmed, 0 pending
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Completed This Month</CardTitle>
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{statistics.completedSessions}</div>
                        <p className="text-xs text-muted-foreground">
                            91% completion rate
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
                        <Clock className="h-4 w-4 text-yellow-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{statistics.pendingSessions}</div>
                        <p className="text-xs text-muted-foreground">
                            3 urgent, 11 routine
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Today's Appointments */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Calendar className="h-5 w-5 mr-2" />
                            Today's Sessions
                        </CardTitle>
                        <CardDescription>
                            Your scheduled therapy sessions for today
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {todayAppointments.map((appointment) => (
                            <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <Avatar>
                                        <AvatarFallback>
                                            {appointment.patientName.split(' ').map(n => n[0]).join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">{appointment.patientName}</p>
                                        <p className="text-sm text-gray-600">{appointment.time} - {appointment.type}</p>
                                    </div>
                                </div>
                                <Badge variant={appointment.status === 'Confirmed' ? 'default' : 'secondary'}>
                                    {appointment.status}
                                </Badge>
                            </div>
                        ))}
                        {todayAppointments.length === 0 && (
                            <p className="text-center text-gray-500 py-8">No therapy sessions scheduled for today</p>
                        )}
                    </CardContent>
                </Card>

                {/* Recent Patients */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Users className="h-5 w-5 mr-2" />
                            Recent Clients
                        </CardTitle>
                        <CardDescription>
                            Recently seen clients
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {recentClients.map((client) => (
                            <div key={client.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                                <div className="flex items-center space-x-3">
                                    <Avatar>
                                        <AvatarFallback>
                                            {client.name.split(' ').map(n => n[0]).join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">{client.name}</p>
                                        <p className="text-sm text-gray-600">{client.condition} • {client.location}</p>
                                    </div>
                                </div>
                                <Badge
                                    variant={
                                        client.status === 'Active' ? 'default' :
                                            client.status === 'Follow-up' ? 'secondary' :
                                                'outline'
                                    }
                                >
                                    {client.status}
                                </Badge>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>

            {/* Community Activity & Quick Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Community Activity */}
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <MessageCircle className="h-5 w-5 mr-2" />
                            Community Activity
                        </CardTitle>
                        <CardDescription>
                            Recent posts and discussions from the mental health community
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {recentPosts.map((post) => (
                            <div key={post.id} className="border-l-4 border-[#9333EA] pl-4 py-2">
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-medium text-gray-900">{post.title}</h4>
                                    <span className="text-sm text-gray-500">{post.date}</span>
                                </div>
                                <p className="text-sm text-gray-600 mb-1">by {post.author}</p>
                                <p className="text-sm text-gray-700 mb-3">{post.content}</p>
                                <div className="flex items-center space-x-4">
                                    <span className="text-xs text-gray-500 flex items-center">
                                        <Heart className="h-3 w-3 mr-1" />
                                        {post.likes}
                                    </span>
                                    <span className="text-xs text-gray-500 flex items-center">
                                        <MessageCircle className="h-3 w-3 mr-1" />
                                        {post.comments}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Activity className="h-5 w-5 mr-2" />
                            Quick Stats
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Community Members</span>
                            <span className="font-semibold">{statistics.communityMembers}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Meditation Sessions</span>
                            <span className="font-semibold">{statistics.meditationSessions}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Monthly Growth</span>
                            <span className="font-semibold text-green-600 flex items-center">
                                <TrendingUp className="h-4 w-4 mr-1" />
                                {statistics.monthlyGrowth}%
                            </span>
                        </div>
                        <div className="pt-4 border-t">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-gray-600">Session Completion Rate</span>
                                <span className="text-sm font-medium">91%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-[#9333EA] h-2 rounded-full"
                                    style={{ width: '91%' }}
                                ></div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}