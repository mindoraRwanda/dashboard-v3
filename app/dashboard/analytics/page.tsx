'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell
} from 'recharts';
import {
    TrendingUp,
    Users,
    Calendar,
    Activity,
    Hospital,
    GraduationCap
} from 'lucide-react';
import { statistics } from '../../data/dummyData';

const provinceData = [
    { name: 'Kigali City', users: 456, growth: 15 },
    { name: 'Southern', users: 234, growth: 8 },
    { name: 'Northern', users: 178, growth: 12 },
    { name: 'Western', users: 102, growth: 6 },
    { name: 'Eastern', users: 70, growth: 4 }
];

const monthlyData = [
    { month: 'Jan', users: 850, sessions: 120 },
    { month: 'Feb', users: 890, sessions: 135 },
    { month: 'Mar', users: 920, sessions: 142 },
    { month: 'Apr', users: 960, sessions: 158 },
    { month: 'May', users: 995, sessions: 165 },
    { month: 'Jun', users: 1040, sessions: 178 }
];

const conditionData = [
    { name: 'Anxiety Disorders', value: 89, color: '#DC2626' },
    { name: 'Depression', value: 67, color: '#7C3AED' },
    { name: 'PTSD', value: 34, color: '#059669' },
    { name: 'Bipolar Disorder', value: 23, color: '#D97706' },
    { name: 'OCD', value: 12, color: '#2563EB' },
    { name: 'Panic Disorder', value: 9, color: '#6B7280' }
];

const ageGroupData = [
    { group: '18-25', count: 156 },
    { group: '26-35', count: 298 },
    { group: '36-45', count: 234 },
    { group: '46-55', count: 189 },
    { group: '56-65', count: 123 },
    { group: '65+', count: 40 }
];

export default function AnalyticsPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
                <p className="text-gray-600 mt-1">Comprehensive insights into the Mindora mental health ecosystem</p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                        <Users className="h-4 w-4 text-[#9333EA]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{statistics.totalUsers.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground flex items-center">
                            <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
                            +{statistics.monthlyGrowth}% from last month
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Mental Health Centers</CardTitle>
                        <Hospital className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{statistics.totalMentalHealthCenters}</div>
                        <p className="text-xs text-muted-foreground">
                            Across all provinces
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Universities</CardTitle>
                        <GraduationCap className="h-4 w-4 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{statistics.totalUniversities}</div>
                        <p className="text-xs text-muted-foreground">
                            Educational partnerships
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Therapy Sessions</CardTitle>
                        <Calendar className="h-4 w-4 text-orange-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{statistics.totalSessions}</div>
                        <p className="text-xs text-muted-foreground">
                            {statistics.completedSessions} completed this month
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Charts Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* User Growth Chart */}
                <Card>
                    <CardHeader>
                        <CardTitle>User Growth Trend</CardTitle>
                        <CardDescription>Monthly user registration and therapy session trends</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={monthlyData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="users"
                                    stroke="#9333EA"
                                    strokeWidth={2}
                                    name="Users"
                                />
                                <Line
                                    type="monotone"
                                    dataKey="sessions"
                                    stroke="#10B981"
                                    strokeWidth={2}
                                    name="Sessions"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Province Distribution */}
                <Card>
                    <CardHeader>
                        <CardTitle>User Distribution by Province</CardTitle>
                        <CardDescription>Active users across Rwanda's provinces</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={provinceData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="users" fill="#9333EA" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

            {/* Charts Row 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Medical Conditions */}
                <Card>
                    <CardHeader>
                        <CardTitle>Most Common Conditions</CardTitle>
                        <CardDescription>Distribution of mental health conditions among clients</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={conditionData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={(entry: any) => `${entry.name} ${(entry.percent * 100).toFixed(0)}%`}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {conditionData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Age Demographics */}
                <Card>
                    <CardHeader>
                        <CardTitle>Age Demographics</CardTitle>
                        <CardDescription>User distribution by age groups</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={ageGroupData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="group" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="count" fill="#3B82F6" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

            {/* Detailed Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Engagement Metrics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Community Members</span>
                            <span className="font-semibold">{statistics.communityMembers}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Active Sessions</span>
                            <span className="font-semibold">{statistics.meditationSessions}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Engagement Rate</span>
                            <Badge variant="secondary">85.7%</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Daily Active Users</span>
                            <span className="font-semibold">342</span>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Appointment Analytics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Completion Rate</span>
                            <Badge className="bg-green-100 text-green-800">91%</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Average Duration</span>
                            <span className="font-semibold">32 min</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">No-show Rate</span>
                            <Badge variant="outline">4.2%</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Rescheduled</span>
                            <span className="font-semibold">23</span>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>System Performance</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Uptime</span>
                            <Badge className="bg-green-100 text-green-800">99.9%</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Response Time</span>
                            <span className="font-semibold">120ms</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Active Sessions</span>
                            <span className="font-semibold">1,247</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Data Sync</span>
                            <Badge className="bg-blue-100 text-blue-800">Real-time</Badge>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}